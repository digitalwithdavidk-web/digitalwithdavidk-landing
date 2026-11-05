/**
 * DWDK HQ backend (Digital with David K CEO dashboard)
 * Google Apps Script web app + Google Sheet database.
 * Page: https://digitalwithdavidk.com/hq/
 * All data requests are POST (text/plain JSON) and carry the HQ passcode.
 * v2 (Nov 5 2026): reads skip the lock, row writes are batched. Same API, same deployment URL.
 * Only a salted SHA-256 hash of the passcode is kept, in Script Properties.
 */
var COLS = {
  queue:   ['id','tab','brand','who','channel','context','draft','translation','priority','status','createdAt','createdBy','decidedAt','editedDraft','sentAt'],
  links:   ['id','url','kind','note','at','status','resultUrl'],
  brands:  ['id','order','name','account','loginUrl','loginLabel','contact','deliverables','payment','paymentStatus','notes','updatedAt'],
  history: ['hid','at','action','changes','state'],
  stats:   ['key','value','updatedAt']
};
var PROPS = PropertiesService.getScriptProperties();

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action === 'ping' || !p.action) {
    return json_({ok: true, app: 'DWDK HQ', passcodeSet: !!PROPS.getProperty('PASS_HASH')});
  }
  return json_({ok: false, error: 'Use POST for data'});
}

function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents || '{}'); } catch (err) { return json_({ok:false, error:'Bad JSON'}); }
  try {
    ensureSetup_();
    var a = body.action;
    if (a === 'status') return json_({ok:true, passcodeSet: !!PROPS.getProperty('PASS_HASH')});
    if (a === 'setPasscode') return json_(setPasscode_(body.passcode));
    if (!checkKey_(body.key)) return json_({ok:false, error:'locked'});
    if (a === 'get') { var snap = snapshot_(); snap.ok = true; snap.result = {}; return json_(snap); } // reads need no lock (v2, Nov 5)
    var lock = LockService.getScriptLock();
    lock.waitLock(28000);
    try {
      var out;
      switch (a) {
        case 'get': out = {}; break;
        case 'approve': out = decide_(body.ids, 'approved', 'approve'); break;
        case 'skip': out = decide_(body.ids, 'skipped', 'skip'); break;
        case 'edit': out = edit_(body.id, body.text, !!body.approve); break;
        case 'undo': out = undo_(); break;
        case 'redo': out = redo_(); break;
        case 'addLink': out = addLink_(body); break;
        case 'task': out = task_(body); break;
        case 'add': out = addRows_(body.rows); break;          // agents: new drafts, always status waiting
        case 'markSent': out = markSent_(body.ids); break;     // agents: only approved rows become sent
        case 'setStat': out = setStat_(body.k, body.value); break;
        case 'upsertBrand': out = upsertBrand_(body.brand); break;
        default: return json_({ok:false, error:'Unknown action'});
      }
      var data = snapshot_();
      data.ok = true; data.result = out;
      return json_(data);
    } finally { lock.releaseLock(); }
  } catch (err) {
    return json_({ok:false, error: String(err && err.message || err)});
  }
}

/* ---------- passcode ---------- */
function hash_(salt, s) {
  var raw = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt + '|' + s, Utilities.Charset.UTF_8);
  return raw.map(function(b){ var v = (b < 0 ? b + 256 : b).toString(16); return v.length === 1 ? '0' + v : v; }).join('');
}
function setPasscode_(pass) {
  if (PROPS.getProperty('PASS_HASH')) return {ok:false, error:'Passcode already set'};
  var until = Number(PROPS.getProperty('CLAIM_UNTIL') || 0);
  if (until && Date.now() > until) return {ok:false, error:'Setup window closed. Run resetPasscode in the script editor.'};
  pass = String(pass || '');
  if (pass.length < 6) return {ok:false, error:'Use at least 6 characters'};
  var salt = Utilities.getUuid();
  PROPS.setProperties({PASS_SALT: salt, PASS_HASH: hash_(salt, pass)});
  return {ok:true};
}
function checkKey_(key) {
  var h = PROPS.getProperty('PASS_HASH');
  if (!h || !key) return false;
  var cache = CacheService.getScriptCache();
  var fails = Number(cache.get('fails') || 0);
  if (fails >= 10) return false;
  var ok = hash_(PROPS.getProperty('PASS_SALT'), String(key)) === h;
  if (!ok) cache.put('fails', String(fails + 1), 600);
  return ok;
}
/** Run by hand in the editor if David forgets his passcode: clears it and opens a new 48h setup window. */
function resetPasscode() {
  PROPS.deleteProperty('PASS_HASH'); PROPS.deleteProperty('PASS_SALT');
  PROPS.setProperty('CLAIM_UNTIL', String(Date.now() + 48 * 3600 * 1000));
}

/* ---------- sheet helpers ---------- */
function ss_() { return SpreadsheetApp.openById(PROPS.getProperty('SHEET_ID')); }
function ensureSetup_() {
  if (PROPS.getProperty('SHEET_ID')) return;
  var ss = SpreadsheetApp.create('DWDK HQ Database');
  PROPS.setProperty('SHEET_ID', ss.getId());
  PROPS.setProperty('CLAIM_UNTIL', String(Date.now() + 7 * 24 * 3600 * 1000));
  Object.keys(COLS).forEach(function(name, i) {
    var sh = i === 0 ? ss.getSheets()[0].setName(name) : ss.insertSheet(name);
    sh.getRange(1, 1, 1, COLS[name].length).setValues([COLS[name]]).setFontWeight('bold');
    sh.setFrozenRows(1);
    sh.getRange('A:Z').setNumberFormat('@');
  });
  seed_();
}
var SS_ = null;
function rows_(name) {
  var sh = (SS_ = SS_ || ss_()).getSheetByName(name);
  var v = sh.getDataRange().getValues();
  var head = v.shift();
  return v.map(function(r, i) { var o = {_row: i + 2}; head.forEach(function(h, j){ o[h] = r[j] === undefined ? '' : String(r[j]); }); return o; });
}
function append_(name, obj) {
  var sh = ss_().getSheetByName(name);
  sh.appendRow(COLS[name].map(function(c){ return obj[c] === undefined || obj[c] === null ? '' : String(obj[c]); }));
}
function patch_(name, rowNum, fields) {
  // v2 (Nov 5): one read + one write per row instead of one write per cell
  var sh = (SS_ = SS_ || ss_()).getSheetByName(name), n = COLS[name].length;
  var rng = sh.getRange(rowNum, 1, 1, n), row = rng.getValues()[0], changed = false;
  Object.keys(fields).forEach(function(k) {
    var col = COLS[name].indexOf(k);
    if (col >= 0) { row[col] = String(fields[k] === null || fields[k] === undefined ? '' : fields[k]); changed = true; }
  });
  if (changed) rng.setValues([row]);
}
function now_() { return new Date().toISOString(); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/* ---------- history (undo / redo) ---------- */
var TRACK = ['status','decidedAt','editedDraft'];
function pick_(row) { var o = {}; TRACK.forEach(function(k){ o[k] = row[k] || ''; }); return o; }
function pushHistory_(action, changes) {
  // a new action clears the redo stack
  rows_('history').forEach(function(h){ if (h.state === 'undone') patch_('history', h._row, {state:'dead'}); });
  append_('history', {hid: String(Date.now()), at: now_(), action: action, changes: JSON.stringify(changes), state: 'done'});
}
function applyChanges_(changes, side) {
  var byId = {}; rows_('queue').forEach(function(r){ byId[r.id] = r; });
  var skipped = [];
  changes.forEach(function(c) {
    var r = byId[c.id]; if (!r) return;
    if (r.status === 'sent') { skipped.push(r.who || r.id); return; } // already sent by an agent, cannot be pulled back
    patch_('queue', r._row, c[side]);
  });
  return skipped;
}
function undo_() {
  var h = rows_('history').filter(function(x){ return x.state === 'done'; }).pop();
  if (!h) return {msg: 'Nothing to undo'};
  var skipped = applyChanges_(JSON.parse(h.changes), 'before');
  patch_('history', h._row, {state: 'undone'});
  return {msg: 'Undid ' + label_(h), alreadySent: skipped};
}
function redo_() {
  var und = rows_('history').filter(function(x){ return x.state === 'undone'; });
  if (!und.length) return {msg: 'Nothing to redo'};
  // undo walks back from the newest action, so the most recently undone one is the oldest of the undone rows
  var h = und[0];
  und.forEach(function(x){ if (Number(x.hid) < Number(h.hid)) h = x; });
  var skipped = applyChanges_(JSON.parse(h.changes), 'after');
  patch_('history', h._row, {state: 'done'});
  return {msg: 'Redid ' + label_(h), alreadySent: skipped};
}
function label_(h) { var n = JSON.parse(h.changes).length; return h.action + (n > 1 ? ' (' + n + ' items)' : ''); }

/* ---------- actions ---------- */
function decide_(ids, status, action) {
  ids = [].concat(ids || []);
  var changes = [];
  rows_('queue').forEach(function(r) {
    if (ids.indexOf(r.id) < 0 || r.status !== 'waiting') return;
    var before = pick_(r), after = pick_(r);
    after.status = status; after.decidedAt = now_();
    patch_('queue', r._row, after);
    changes.push({id: r.id, before: before, after: after});
  });
  if (changes.length) pushHistory_(changes.length > 1 ? (action === 'approve' ? 'send all' : 'skip all') : action, changes);
  return {count: changes.length};
}
function edit_(id, text, approve) {
  var r = rows_('queue').filter(function(x){ return x.id === id; })[0];
  if (!r) throw new Error('Not found');
  if (r.status !== 'waiting') throw new Error('Already decided');
  var before = pick_(r), after = pick_(r);
  after.editedDraft = String(text || '');
  if (approve) { after.status = 'approved'; after.decidedAt = now_(); }
  patch_('queue', r._row, after);
  pushHistory_(approve ? 'edit + send' : 'edit', [{id: id, before: before, after: after}]);
  return {count: 1};
}
function addLink_(b) {
  var url = String(b.url || '').trim();
  if (!/^https?:\/\//i.test(url)) throw new Error('Paste a full link (https://...)');
  var kind = ['inspo','mypost','other'].indexOf(b.kind) >= 0 ? b.kind : 'other';
  append_('links', {id: 'L' + Date.now(), url: url, kind: kind, note: b.note || '', at: now_(), status: 'new', resultUrl: ''});
  return {count: 1};
}
function task_(b) {
  var k = 'tasks:' + String(b.date || '').slice(0, 10);
  var cur = {}; var st = rows_('stats').filter(function(x){ return x.key === k; })[0];
  if (st) { try { cur = JSON.parse(st.value || '{}'); } catch (e) {} }
  cur[b.task] = !!b.done;
  setStat_(k, JSON.stringify(cur));
  return {count: 1};
}
function setStat_(k, value) {
  var st = rows_('stats').filter(function(x){ return x.key === k; })[0];
  if (st) patch_('stats', st._row, {value: value, updatedAt: now_()});
  else append_('stats', {key: k, value: value, updatedAt: now_()});
  return {count: 1};
}
function addRows_(rows) {
  var existing = {}; rows_('queue').forEach(function(r){ existing[r.id] = 1; });
  var n = 0;
  [].concat(rows || []).forEach(function(r) {
    if (!r || !r.id || existing[r.id]) return;
    r.status = 'waiting'; r.createdAt = r.createdAt || now_();
    append_('queue', r); n++;
  });
  return {count: n};
}
function markSent_(ids) {
  ids = [].concat(ids || []); var n = 0;
  rows_('queue').forEach(function(r) {
    if (ids.indexOf(r.id) >= 0 && r.status === 'approved') { patch_('queue', r._row, {status: 'sent', sentAt: now_()}); n++; }
  });
  return {count: n};
}
function upsertBrand_(b) {
  if (!b || !b.id) throw new Error('brand.id needed');
  b.updatedAt = now_();
  var r = rows_('brands').filter(function(x){ return x.id === b.id; })[0];
  if (r) patch_('brands', r._row, b); else append_('brands', b);
  return {count: 1};
}

/* ---------- read ---------- */
function snapshot_() {
  var weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
  var q = rows_('queue').filter(function(r) {
    if (r.status === 'waiting') return true;
    var t = Date.parse(r.sentAt || r.decidedAt || r.createdAt);
    return !isNaN(t) && t >= weekAgo;
  });
  var hist = rows_('history');
  var links = rows_('links').slice(-60);
  var stats = {}; rows_('stats').forEach(function(s){ stats[s.key] = {value: s.value, updatedAt: s.updatedAt}; });
  var lastDone = hist.filter(function(x){ return x.state === 'done'; }).pop();
  var lastUndone = hist.filter(function(x){ return x.state === 'undone'; });
  return {
    queue: q.map(strip_), links: links.map(strip_), brands: rows_('brands').map(strip_), stats: stats,
    canUndo: !!lastDone, undoLabel: lastDone ? label_(lastDone) : '',
    canRedo: lastUndone.length > 0
  };
}
function strip_(r) { var o = {}; Object.keys(r).forEach(function(k){ if (k !== '_row') o[k] = r[k]; }); return o; }

/* ---------- seed (runs once, on first request) ---------- */
function seed_() {
  if (typeof SEED_QUEUE === "undefined") return;
  SEED_QUEUE.forEach(function(r){ append_('queue', r); });
  SEED_BRANDS.forEach(function(b, i){ b.order = String(i + 1); b.updatedAt = now_(); append_('brands', b); });
  SEED_STATS.forEach(function(s){ append_('stats', {key: s[0], value: s[1], updatedAt: now_()}); });
}
