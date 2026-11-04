/* HQ database bridge for the Day and Maxing pages.
   Gives the page the same small db API the old dashboards used (collection/doc/get/set/update/delete/onSnapshot),
   backed by the private HQ Google Sheet (stats tab rows "db:<app>:<collection>:<docid>", value = JSON, empty = deleted).
   Reads and writes go through the HQ backend with the same passcode as /hq/. Nothing is stored in this public repo.
   Agents write the same rows straight into the sheet (stats tab, upsert by key). */
(function(){
  var me=document.currentScript, APP=(me&&me.getAttribute('data-app'))||'app';
  var API=(window.HQ_CONFIG||{}).api, PFX='db:'+APP+':', POLL=60000;
  var cache={}, loaded=false, lastFetch=0, subs=[], readyRes, ready=new Promise(function(r){readyRes=r;});
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v);}catch(e){return null;}}
  function err(code,msg){var e=new Error(msg||code);e.code=code;return e;}
  function post(action,extra){
    if(!store('hq_key'))return Promise.reject(err('permission_denied','locked'));
    var body=Object.assign({action:action,key:store('hq_key')},extra||{});
    return fetch(API,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body),redirect:'follow'})
      .then(function(r){return r.json();})
      .then(function(d){
        if(!d||!d.ok){if(d&&d.error==='locked'){store('hq_key',null);showLock('Wrong passcode. Try again.');throw err('permission_denied','locked');}throw err('unavailable',d&&d.error);}
        absorb(d);return d;
      });
  }
  function absorb(d){
    var s=d.stats||{},n={};
    Object.keys(s).forEach(function(k){if(k.indexOf(PFX)===0)n[k.slice(PFX.length)]=s[k]&&s[k].value;});
    cache=n;loaded=true;lastFetch=Date.now();hideLock();readyRes();notify();
  }
  function parse(v){if(v==null||v==='')return null;try{return JSON.parse(v);}catch(e){return null;}}
  function snapDoc(id,obj){return {id:id,exists:obj!=null,data:function(){return obj==null?undefined:JSON.parse(JSON.stringify(obj));}};}
  function list(coll,filters){
    var p=coll+':',out=[];
    Object.keys(cache).sort().forEach(function(k){
      if(k.indexOf(p)!==0)return;var o=parse(cache[k]);if(o==null)return;
      if(filters.every(function(f){return o[f[0]]===f[2];}))out.push(snapDoc(k.slice(p.length),o));
    });
    return {docs:out,size:out.length,empty:!out.length,forEach:function(fn){out.forEach(fn);}};
  }
  function fresh(){return (loaded&&Date.now()-lastFetch<20000)?Promise.resolve():refresh();}
  function refresh(){return post('get').catch(function(e){if(!loaded)throw e;});}
  function notify(){subs.forEach(function(s){try{s.cb(list(s.coll,s.filters));}catch(e){console.log('[hqdb] listener',e);}});}
  function write(key,obj){
    var prev=cache[key];cache[key]=obj==null?'':JSON.stringify(obj);notify();
    return post('setStat',{k:PFX+key,value:cache[key]}).catch(function(e){cache[key]=prev;notify();throw e;});
  }
  function query(coll,filters){
    return {
      where:function(f,op,v){if(op!=='==')throw err('invalid_argument','only == is supported');return query(coll,filters.concat([[f,op,v]]));},
      get:function(){return ready.then(fresh).then(function(){return list(coll,filters);});},
      onSnapshot:function(cb,onErr){var s={coll:coll,filters:filters,cb:cb};subs.push(s);if(loaded)setTimeout(function(){cb(list(coll,filters));},0);return function(){subs=subs.filter(function(x){return x!==s;});};},
      doc:function(id){return docRef(coll,id||(Date.now().toString(36)+Math.random().toString(36).slice(2,8)));}
    };
  }
  function docRef(coll,id){
    var key=coll+':'+id;
    return {id:id,
      get:function(){return ready.then(fresh).then(function(){return snapDoc(id,parse(cache[key]));});},
      set:function(o,opt){var base=(opt&&opt.merge)?(parse(cache[key])||{}):{};return write(key,Object.assign(base,o));},
      update:function(o){var cur=parse(cache[key]);if(cur==null)return Promise.reject(err('not_found','no such doc'));return write(key,Object.assign(cur,o));},
      delete:function(){return write(key,null);}
    };
  }
  var DB={collection:function(c){return query(c,[]);},doc:function(path){var i=path.indexOf('/');return docRef(path.slice(0,i),path.slice(i+1));}};
  var USER={canEdit:function(){return Promise.resolve(true);},can:function(){return Promise.resolve(true);}};
  window.claude=window.claude||{};
  window.claude.use=function(name){if(name==='db')return ready.then(function(){return DB;});if(name==='user')return ready.then(function(){return USER;});return Promise.resolve(null);};

  /* passcode screen, same passcode as HQ (saved once per browser, shared with /hq/) */
  var lock=null;
  function showLock(msg){
    if(!lock){
      var css=document.createElement('style');
      css.textContent='#hqLock{position:fixed;inset:0;z-index:999;background:#0A221A;color:#EDE6DC;display:flex;align-items:center;justify-content:center;padding:24px;font-family:Montserrat,system-ui,sans-serif}#hqLock[hidden]{display:none}#hqLock .b{width:100%;max-width:340px;display:flex;flex-direction:column;gap:12px;text-align:center}#hqLock h2{margin:0;font-size:22px;font-weight:800}#hqLock p{margin:0;font-size:14px;color:#C9B59C}#hqLock input{font:inherit;font-size:18px;padding:14px;border-radius:12px;border:1px solid #C9B59C;background:#EDE6DC;color:#0E2F24;text-align:center;letter-spacing:.2em}#hqLock button{font:inherit;font-size:15px;font-weight:800;padding:14px;border-radius:12px;border:0;background:#C9B59C;color:#0E2F24;cursor:pointer}#hqLock .e{color:#F0B4A8;font-size:13px;min-height:1em}#hqLock a{color:#C9B59C;font-size:13px}';
      document.head.appendChild(css);
      lock=document.createElement('div');lock.id='hqLock';
      lock.innerHTML='<form class="b"><h2>Digital with David K HQ</h2><p>Enter your HQ passcode to open this page.</p><input type="password" inputmode="numeric" autocomplete="current-password" aria-label="HQ passcode"><button type="submit">Open</button><div class="e" role="status"></div><a href="../hq/">Go to HQ</a></form>';
      document.body.appendChild(lock);
      lock.querySelector('form').addEventListener('submit',function(e){e.preventDefault();var v=lock.querySelector('input').value.trim();if(!v)return;store('hq_key',v);lock.querySelector('.e').textContent='Checking...';refresh().catch(function(){});});
    }
    lock.hidden=false;lock.querySelector('.e').textContent=msg||'';var i=lock.querySelector('input');i.value='';setTimeout(function(){i.focus();},50);
  }
  function hideLock(){if(lock)lock.hidden=true;}
  function start(){
    if(!store('hq_key'))showLock();else refresh().catch(function(e){if(e.code!=='permission_denied')console.log('[hqdb] load failed',e);});
    setInterval(function(){if(!document.hidden&&store('hq_key'))refresh().catch(function(){});},POLL);
    document.addEventListener('visibilitychange',function(){if(!document.hidden&&store('hq_key')&&Date.now()-lastFetch>15000)refresh().catch(function(){});});
  }
  if(document.body)start();else document.addEventListener('DOMContentLoaded',start);
})();
