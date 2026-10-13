/* Seoul value bar data. Reads seoul.json (same fields as prices/seoul.json on the landing repo). Numbers in the HTML are the fallback. */
(function(){
  var D = {points:59200, cash:3239, today:9866, asof:'2026-10-13'};
  function money(n){ return '$' + Math.round(n).toLocaleString('en-US'); }
  function asof(s){ var a=s.split('-'), m=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; return m[+a[1]-1]+' '+(+a[2])+', '+a[0]; }
  function apply(){
    var pct = Math.max(4, Math.min(100, D.cash / D.today * 100)).toFixed(1) + '%';
    window.DKS = {paidLabel: D.points.toLocaleString('en-US') + ' points + ' + money(D.cash), paidShort: D.points.toLocaleString('en-US') + ' pts + ' + money(D.cash), cashStr: money(D.cash), todayStr: money(D.today), saveStr: money(D.today - D.cash), asofStr: asof(D.asof), today: D.today, cash: D.cash};
    var map = {paid: DKS.paidLabel, paidshort: DKS.paidShort, paidcash: DKS.cashStr, today: DKS.todayStr, save: DKS.saveStr, asof: DKS.asofStr, points: D.points.toLocaleString('en-US')};
    Object.keys(map).forEach(function(k){ document.querySelectorAll('[data-seoul="'+k+'"]').forEach(function(el){ el.textContent = map[k]; }); });
    document.querySelectorAll('[data-count-seoul]').forEach(function(el){ var k=el.getAttribute('data-count-seoul'); el.setAttribute('data-count', k==='today'?D.today:D.cash); });
    document.documentElement.style.setProperty('--sv-pct', pct);
  }
  function watch(){
    var els = document.querySelectorAll('.dk-sv');
    if (!('IntersectionObserver' in window)) { els.forEach(function(e){ e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {threshold:.25});
    els.forEach(function(e){ io.observe(e); });
    setTimeout(function(){ els.forEach(function(e){ var r=e.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) e.classList.add('in'); }); }, 400);
  }
  apply();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch); else watch();
  fetch('prices/seoul.json?v=' + Date.now(), {cache:'no-store'}).then(function(r){ if(!r.ok) throw 0; return r.json(); }).then(function(j){
    var t=j&&j.today, p=j&&j.paid;
    if (t && t.price_cad > 0) D.today = t.price_cad;
    if (t && /^\d{4}-\d{2}-\d{2}$/.test(t.as_of||'')) D.asof = t.as_of;
    if (p && p.cash_cad > 0) D.cash = p.cash_cad;
    if (p && p.points > 0) D.points = p.points;
    apply();
  }).catch(function(){});
})();
