#!/usr/bin/env python3
"""Add emails to the Digital with David K Globe guest list (globe/access.json).

Only SHA-256 hashes are saved, never the plain emails.

Use:
  python3 tools/add-access.py subscribers.csv          # any cell with @ counts
  python3 tools/add-access.py name@email.com other@email.com
  python3 tools/add-access.py --key NEWKEY              # add a signup link key
"""
import csv, hashlib, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ACCESS = os.path.join(HERE, '..', 'globe', 'access.json')


def h(value):
    return hashlib.sha256(value.strip().lower().encode('utf-8')).hexdigest()


def emails_from(arg):
    if os.path.isfile(arg):
        with open(arg, newline='', encoding='utf-8-sig') as f:
            for row in csv.reader(f):
                for cell in row:
                    cell = cell.strip()
                    if '@' in cell and ' ' not in cell:
                        yield cell
    elif '@' in arg:
        yield arg


def main(argv):
    keys_in, items, i = [], [], 0
    while i < len(argv):
        if argv[i] == '--key' and i + 1 < len(argv):
            keys_in.append(argv[i + 1]); i += 2; continue
        items.append(argv[i]); i += 1
    if not items and not keys_in:
        print(__doc__); return 1
    try:
        with open(ACCESS, encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = {'emails': [], 'keys': []}
    emails = set(data.get('emails', []))
    keys = set(data.get('keys', []))
    before = len(emails)
    for arg in items:
        for e in emails_from(arg):
            emails.add(h(e))
    for k in keys_in:
        keys.add(hashlib.sha256(k.strip().encode('utf-8')).hexdigest())
    data = {'emails': sorted(emails), 'keys': sorted(keys)}
    with open(ACCESS, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=1)
        f.write('\n')
    print('Added %d new. Guest list now has %d emails and %d keys.' % (len(emails) - before, len(emails), len(keys)))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
