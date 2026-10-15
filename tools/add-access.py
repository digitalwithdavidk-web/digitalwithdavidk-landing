#!/usr/bin/env python3
"""Digital with David K Globe: who gets in, and at what level.

Levels (globe/access.json):
  economy  = "emails" list (SHA-256 of the email). China + Japan. Same as before.
  premium  = "premium" list. Every country + Premium picks.
  first    = "first" list. Everything + First Class picks. (First Class includes Premium.)
  "keys"   = ?k= link keys (SHA-256). A key = Economy.

Premium and First Class plans are locked (AES-GCM) in globe/premium-plans.enc and
globe/vip-plans.enc. So each premium/first email also gets a small locked box in
"boxes" that only that exact email can open. That needs the PRIVATE folder
(secrets.json + content/), which never goes in the repo. David's copy:
  /Users/davidkduong/Downloads/DWDK site versions/globe-private

Use (from the repo folder):
  python3 tools/add-access.py subscribers.csv                 # economy (any cell with @)
  python3 tools/add-access.py name@email.com                  # economy
  python3 tools/add-access.py --key NEWKEY                    # economy link key
  python3 tools/add-access.py --level premium --private PRIVATE name@email.com
  python3 tools/add-access.py --level first   --private PRIVATE buyers.csv
  python3 tools/add-access.py --remove name@email.com         # out of every level
  python3 tools/add-access.py --build --private PRIVATE       # re-lock plans after editing content/
  python3 tools/add-access.py --count
(Or set DWDK_GLOBE_PRIVATE instead of --private.) Then commit globe/access.json.
Premium/first needs: pip install cryptography
"""
import base64, csv, hashlib, json, os, secrets, sys

HERE = os.path.dirname(os.path.abspath(__file__))
GLOBE = os.path.join(HERE, '..', 'globe')
ACCESS = os.path.join(GLOBE, 'access.json')
SALT = 'dwdk-globe-v2'
ITER = 150000
LEVELS = ('economy', 'premium', 'first')


def h(value):
    return hashlib.sha256(value.strip().lower().encode('utf-8')).hexdigest()


def hk(value):
    return hashlib.sha256(value.strip().encode('utf-8')).hexdigest()


def emails_from(arg):
    if os.path.isfile(arg):
        with open(arg, newline='', encoding='utf-8-sig') as f:
            for row in csv.reader(f):
                for cell in row:
                    cell = cell.strip()
                    if '@' in cell and ' ' not in cell:
                        yield cell.lower()
    elif '@' in arg:
        yield arg.strip().lower()


def load():
    try:
        with open(ACCESS, encoding='utf-8') as f:
            d = json.load(f)
    except FileNotFoundError:
        d = {}
    for k in ('emails', 'keys', 'premium', 'first'):
        d.setdefault(k, [])
    d.setdefault('boxes', {})
    d['kdf'] = {'alg': 'PBKDF2-SHA256', 'salt': SALT, 'iter': ITER}
    return d


def save(d):
    out = {
        'emails': sorted(set(d['emails'])),
        'keys': sorted(set(d['keys'])),
        'premium': sorted(set(d['premium'])),
        'first': sorted(set(d['first'])),
        'boxes': dict(sorted(d['boxes'].items())),
        'kdf': d['kdf'],
    }
    with open(ACCESS, 'w', encoding='utf-8') as f:
        json.dump(out, f, indent=1)
        f.write('\n')
    return out


def private_secrets(private, need_v=False):
    if not private:
        sys.exit('Premium and First Class need --private PRIVATE (the globe-private folder).')
    p = os.path.join(private, 'secrets.json')
    with open(p, encoding='utf-8') as f:
        s = json.load(f)
    if 'p' not in s:  # first run after GLOBE-MEMBERS: make the Premium key
        s['p'] = base64.b64encode(secrets.token_bytes(32)).decode('ascii')
        with open(p, 'w', encoding='utf-8') as f:
            json.dump(s, f)
        print('Made a new Premium key in secrets.json. Run --build next.')
    return s


def seal(key, data):
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    iv = secrets.token_bytes(12)
    return base64.b64encode(iv + AESGCM(key).encrypt(iv, data, None)).decode('ascii')


def box(email, payload):
    kek = hashlib.pbkdf2_hmac('sha256', email.encode('utf-8'), SALT.encode('utf-8'), ITER, 32)
    return seal(kek, json.dumps(payload).encode('utf-8'))


def build(private, s):
    """premium-plans.enc = every member country + Premium picks (incl. China Premium).
    vip-plans.enc = First Class plans (content/vip.json)."""
    with open(os.path.join(private, 'content', 'member.json'), encoding='utf-8') as f:
        member = json.load(f)
    china_p = os.path.join(private, 'content', 'china-premium.json')
    if os.path.exists(china_p):
        with open(china_p, encoding='utf-8') as f:
            member['china'] = json.load(f)
    with open(os.path.join(private, 'content', 'vip.json'), encoding='utf-8') as f:
        vip = json.load(f)
    for name, data, k in (('premium', member, 'p'), ('vip', vip, 'v')):
        raw = json.dumps(data, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
        with open(os.path.join(GLOBE, name + '-plans.enc'), 'w') as f:
            f.write(seal(base64.b64decode(s[k]), raw) + '\n')
    print('Locked: globe/premium-plans.enc + globe/vip-plans.enc. Commit both.')


def main(argv):
    level, private, keys_in, items = 'economy', os.environ.get('DWDK_GLOBE_PRIVATE'), [], []
    mode, i = 'add', 0
    while i < len(argv):
        a = argv[i]
        if a == '--level' and i + 1 < len(argv):
            level = argv[i + 1].lower(); i += 2; continue
        if a == '--private' and i + 1 < len(argv):
            private = argv[i + 1]; i += 2; continue
        if a == '--key' and i + 1 < len(argv):
            keys_in.append(argv[i + 1]); i += 2; continue
        if a in ('--remove', '--build', '--count'):
            mode = a[2:]; i += 1; continue
        items.append(a); i += 1
    if level not in LEVELS:
        print('Level must be economy, premium or first.'); return 1
    d = load()
    if mode == 'count':
        print('Economy %d emails + %d keys. Premium %d. First Class %d.' % (len(d['emails']), len(d['keys']), len(d['premium']), len(d['first'])))
        return 0
    if mode == 'build':
        build(private, private_secrets(private)); return 0
    found = [e for a in items for e in emails_from(a)]
    if mode == 'remove':
        n = 0
        for e in found:
            x = h(e)
            for k in ('emails', 'premium', 'first'):
                if x in d[k]:
                    d[k].remove(x); n += 1
            d['boxes'].pop(x, None)
        for k in keys_in:
            if hk(k) in d['keys']:
                d['keys'].remove(hk(k)); n += 1
        save(d); print('Removed %d. Commit globe/access.json.' % n); return 0
    if not found and not keys_in:
        print(__doc__); return 1
    if level == 'economy':
        before = len(set(d['emails']))
        d['emails'] += [h(e) for e in found]
        d['keys'] += [hk(k) for k in keys_in]
        out = save(d)
        print('Added %d new. Economy now has %d emails and %d keys.' % (len(out['emails']) - before, len(out['emails']), len(out['keys'])))
        return 0
    s = private_secrets(private)
    payload = {'p': s['p']} if level == 'premium' else {'p': s['p'], 'v': s['v']}
    for e in set(found):
        x = h(e)
        d[level].append(x)
        if level == 'first' and x in d['premium']:
            d['premium'].remove(x)
        if level == 'premium' and x in d['first']:
            d['first'].remove(x)
        d['boxes'][x] = box(e, payload)
    out = save(d)
    print('%s now has %d emails. Commit globe/access.json.' % ('Premium' if level == 'premium' else 'First Class', len(out[level])))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
