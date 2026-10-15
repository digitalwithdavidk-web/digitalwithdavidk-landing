#!/usr/bin/env bash
# Digital with David K Globe: add or remove ONE paid member, then commit globe/access.json.
# Run by .github/workflows/globe-access.yml (Stan -> Zapier -> GitHub). Can also be run by hand.
#
# Needs these env vars:
#   IN_EMAIL    buyer email
#   IN_LEVEL    premium | first   (or empty, then IN_PRODUCT decides)
#   IN_PRODUCT  Stan product name (optional): "First Class" in it = first, "Premium" = premium
#   IN_ACTION   add | remove      (also accepts: new, purchase, cancel, cancelled, refund)
#   GLOBE_PRIVATE_JSON  contents of secrets.json (only needed for add)
#   GLOBE_BRANCH        branch to push (default main)
#   GLOBE_NO_PUSH=1     test mode: commit locally, do not push
#
# Never prints the email or the secret.
set -euo pipefail
cd "$(dirname "$0")/.."

fail() { echo "::error::$1"; exit 1; }

raw_email="${IN_EMAIL:-}"
[ -n "$raw_email" ] && echo "::add-mask::$raw_email"
email="$(printf '%s' "$raw_email" | tr -d '[:space:]' | tr '[:upper:]' '[:lower:]')"
[ -n "$email" ] && echo "::add-mask::$email"
[[ "$email" =~ ^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$ ]] || fail "Missing or bad email (value hidden)."

level="$(printf '%s' "${IN_LEVEL:-}" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')"
if [ -z "$level" ]; then
  product="$(printf '%s' "${IN_PRODUCT:-}" | tr '[:upper:]' '[:lower:]')"
  case "$product" in
    *"first class"*|*first*) level=first ;;
    *premium*)               level=premium ;;
  esac
fi
case "$level" in premium|first) ;; *) fail "Level must be premium or first." ;; esac

action="$(printf '%s' "${IN_ACTION:-}" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')"
case "$action" in
  add|new|purchase|subscribe) action=add ;;
  remove|cancel|cancelled|canceled|refund|refunded|expired) action=remove ;;
  *) fail "Action must be add or remove." ;;
esac
echo "Request: $action $level (email hidden)."

branch="${GLOBE_BRANCH:-main}"
tmp="$(mktemp -d "${RUNNER_TEMP:-/tmp}/globe-private.XXXXXX")"
trap 'rm -rf "$tmp"' EXIT
chmod 700 "$tmp"

update() {
  if [ "$action" = add ]; then
    [ -n "${GLOBE_PRIVATE_JSON:-}" ] || fail "GitHub Secret GLOBE_PRIVATE_JSON is missing."
    ( umask 077; printf '%s' "$GLOBE_PRIVATE_JSON" > "$tmp/secrets.json" )
    python3 -c 'import json,sys; s=json.load(open(sys.argv[1])); sys.exit(0 if "p" in s and "v" in s else 1)' "$tmp/secrets.json" \
      || fail "GLOBE_PRIVATE_JSON is not a valid secrets.json (needs p and v)."
    DWDK_NO_KEYGEN=1 python3 tools/add-access.py --level "$level" --private "$tmp" "$email"
    rm -f "$tmp/secrets.json"
  else
    python3 tools/add-access.py --remove --level "$level" "$email"
  fi
}

git config user.name "globe-access-bot"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

for try in 1 2 3 4 5; do
  if [ -z "${GLOBE_NO_PUSH:-}" ]; then
    git fetch -q origin "$branch"
    git reset -q --hard "origin/$branch"
  fi
  update
  if git diff --quiet -- globe/access.json; then
    echo "No change needed (already done)."
    exit 0
  fi
  git add globe/access.json
  git commit -q -m "Globe access: $action $level (auto)"
  if [ -n "${GLOBE_NO_PUSH:-}" ]; then
    echo "Committed (test mode, not pushed)."
    exit 0
  fi
  if git push -q origin "HEAD:$branch"; then
    echo "Pushed. Done."
    exit 0
  fi
  echo "Push raced with another update, trying again ($try)."
  sleep $(( (RANDOM % 8) + 3 ))
done
fail "Could not push after 5 tries."
