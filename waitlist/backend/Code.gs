/* Waitlist backend (Google Apps Script web app). Adds a contact to Brevo list 5 "Out of Office Creators waitlist".
   Setup once: script.google.com > New project > paste this > Project Settings > Script Properties: BREVO_API_KEY = your Brevo v3 API key.
   Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone. Copy the /exec URL into WAITLIST_API in waitlist/index.html. */
var LIST_ID = 5;
function doPost(e) {
  try {
    var b = JSON.parse(e.postData.contents || '{}');
    var email = String(b.email || '').trim().toLowerCase();
    var first = String(b.firstName || '').trim().slice(0, 60);
    if (!b.consent || !first || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return out({ ok: false, error: 'invalid' });
    var props = PropertiesService.getScriptProperties();
    var key = props.getProperty('BREVO_API_KEY') || props.getProperty('BREVO-API-KEY');
    if (!key) return out({ ok: false, error: 'no key' });
    var r = UrlFetchApp.fetch('https://api.brevo.com/v3/contacts', {
      method: 'post', contentType: 'application/json', muteHttpExceptions: true,
      headers: { 'api-key': key, accept: 'application/json' },
      payload: JSON.stringify({ email: email, attributes: { FIRSTNAME: first }, listIds: [LIST_ID], updateEnabled: true })
    });
    var c = r.getResponseCode();
    return out({ ok: c >= 200 && c < 300 });
  } catch (err) { return out({ ok: false, error: 'server' }); }
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
