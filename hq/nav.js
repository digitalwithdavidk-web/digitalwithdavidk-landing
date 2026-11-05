/* Shared bottom bar for the HQ pages (Day, Maxing). Same tabs, icons and look as /hq/ so the whole HQ feels like one app.
   The Approve badge reads the last HQ copy saved on this phone (no extra network call). */
(function(){
  var me=document.currentScript, page=(me&&me.getAttribute('data-page'))||'';
  var I={
    home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    approve:'<path d="M4 5h16v11H8l-4 4z"/><path d="M8 10l2.5 2.5L16 8"/>',
    brands:'<rect x="3" y="4" width="8" height="7" rx="2"/><rect x="13" y="4" width="8" height="7" rx="2"/><rect x="3" y="13" width="8" height="7" rx="2"/><rect x="13" y="13" width="8" height="7" rx="2"/>',
    links:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    done:'<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
    day:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    maxing:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    vault:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="3.5"/><path d="M12 8.5V7M15.5 12H17"/>'
  };
  var T=[['home','Home','../hq/#home'],['approve','Approve','../hq/#approve'],['brands','Brands','../hq/#brands'],['links','Links','../hq/#links'],['done','Done','../hq/#done'],['day','Day','../day/'],['maxing','Maxing','../maxing/'],['vault','Vault','../vault/']];
  var n=0;try{var s=JSON.parse(localStorage.getItem('hq_snap')||'null');if(s&&s.queue)n=s.queue.filter(function(r){return r.status==='waiting';}).length;}catch(e){}
  var css=document.createElement('style');
  css.textContent='.dknav{position:fixed;left:0;right:0;bottom:0;z-index:50;background:rgba(5,18,13,.94);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-top:1px solid rgba(201,181,156,.13);display:grid;grid-template-columns:repeat(8,minmax(0,1fr));padding-bottom:env(safe-area-inset-bottom);font-family:Montserrat,system-ui,sans-serif}'+
    '.dknav a{height:64px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:10.5px;font-weight:700;color:#a3ada4;text-decoration:none;position:relative;min-width:0;letter-spacing:-.01em}'+
    '.dknav svg{width:23px;height:23px;stroke:currentColor;fill:none;stroke-width:1.8}'+
    '.dknav a[aria-current=page]{color:#C9B59C}.dknav a[aria-current=page]:before{content:"";position:absolute;top:0;left:28%;right:28%;height:2px;border-radius:0 0 2px 2px;background:#C9B59C}'+
    '.dknav .b{position:absolute;top:7px;left:calc(50% + 5px);background:#C9B59C;color:#0E2F24;border-radius:999px;font-size:10px;font-weight:800;min-width:18px;height:18px;line-height:18px;padding:0 5px;text-align:center}'+
    '@media (min-width:760px){.dknav{max-width:720px;margin:0 auto 12px;border:1px solid rgba(201,181,156,.13);border-radius:20px}}'+
    'body{padding-bottom:calc(76px + env(safe-area-inset-bottom))!important}';
  document.head.appendChild(css);
  function mount(){
    var nav=document.createElement('nav');nav.className='dknav';nav.setAttribute('aria-label','HQ pages');
    nav.innerHTML=T.map(function(t){return '<a href="'+t[2]+'"'+(t[0]===page?' aria-current="page"':'')+'><svg viewBox="0 0 24 24">'+I[t[0]]+'</svg>'+t[1]+(t[0]==='approve'&&n?'<span class="b">'+n+'</span>':'')+'</a>';}).join('');
    document.body.appendChild(nav);
  }
  if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount);
})();
