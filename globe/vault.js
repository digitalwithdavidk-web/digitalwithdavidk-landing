/* Digital with David K Globe: who is on board, and at what level.
   access.json: "emails" + "keys" = Economy (China + Japan), "premium" = every country,
   "first" = everything + First Class. All are SHA-256 hashes, never plain emails.
   Premium + First Class plans are locked (AES-GCM) in premium-plans.enc / vip-plans.enc.
   Each premium/first email has one small locked box in "boxes" (key = PBKDF2 of the email),
   so only that exact email can open the plans. Lists are re-read on every load,
   so a removed email loses access. Add or remove people with tools/add-access.py. */
(function(){
var enc=new TextEncoder(),dec=new TextDecoder();
function hex(buf){return Array.prototype.map.call(new Uint8Array(buf),function(b){return('0'+b.toString(16)).slice(-2)}).join('')}
function unb64(s){var bin=atob(s.trim()),a=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return a}
function getJSON(u){return fetch(u,{cache:'no-store'}).then(function(r){if(!r.ok)throw new Error('net');return r.json()})}
function getText(u){return fetch(u,{cache:'no-store'}).then(function(r){if(!r.ok)throw new Error('net');return r.text()})}
function sha(v){return crypto.subtle.digest('SHA-256',enc.encode(v)).then(hex)}
function has(list,x){return !!(list&&list.indexOf&&list.indexOf(x)>-1)}
function kek(secret,kdf){
  return crypto.subtle.importKey('raw',enc.encode(secret),'PBKDF2',false,['deriveKey']).then(function(base){
    return crypto.subtle.deriveKey({name:'PBKDF2',salt:enc.encode(kdf.salt),iterations:kdf.iter,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['decrypt'])});
}
function open(key,b64){var all=unb64(b64);return crypto.subtle.decrypt({name:'AES-GCM',iv:all.slice(0,12)},key,all.slice(12))}
function rawKey(b64){return crypto.subtle.importKey('raw',unb64(b64),'AES-GCM',false,['decrypt'])}
function plans(file,b64key){
  return Promise.all([rawKey(b64key),getText(file)]).then(function(r){return open(r[0],r[1])}).then(function(b){return JSON.parse(dec.decode(b))});
}
/* unlock(email, key) -> {level:'none'|'economy'|'premium'|'first', premium, vip} ; rejects on network trouble */
window.DWDKVault={unlock:function(email,key){
  email=(email||'').trim().toLowerCase();key=(key||'').trim();
  return getJSON('access.json').then(function(acc){
    return Promise.all([email?sha(email):Promise.resolve(''),key?sha(key):Promise.resolve('')]).then(function(H){
      var he=H[0],hk=H[1];
      var eco=(he&&has(acc.emails,he))||(hk&&has(acc.keys,hk));
      var paid=he&&(has(acc.first,he)?'first':(has(acc.premium,he)?'premium':null));
      var none={level:eco?'economy':'none',premium:null,vip:null};
      var w=paid&&acc.boxes&&acc.boxes[he];
      if(!w||!acc.kdf)return none;
      return kek(email,acc.kdf).then(function(k){return open(k,w)}).then(function(b){
        var p=JSON.parse(dec.decode(b));
        return Promise.all([p.p?plans('premium-plans.enc',p.p):null,(paid==='first'&&p.v)?plans('vip-plans.enc',p.v):null]).then(function(x){
          if(!x[0])return none;
          return{level:x[1]?'first':'premium',premium:x[0],vip:x[1]};
        });
      },function(){return none});
    });
  });
}};
})();
