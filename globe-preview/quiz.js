/* Digital with David K Globe: "Build my trip" quiz (PREVIEW).
   Asks 7 quick questions, saves the answers on this phone only (localStorage),
   then puts a boarding pass on top of every trip and re-sorts the plan:
   matching stops get a "For you" badge and lead the "Start with these" list,
   bar and club stops are swapped out for "no alcohol" / "skip" / family trips.
   Tags: TAGS below for China + Japan (Economy). Other countries are tagged by keywords.
   No em dashes. */
(function(){
'use strict';
var SKEY='dwdk_trip_quiz';
function $(id){return document.getElementById(id)}
function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function load(){try{var v=localStorage.getItem(SKEY);return v?JSON.parse(v):null}catch(e){return null}}
function save(o){try{localStorage.setItem(SKEY,JSON.stringify(o))}catch(e){}}
function host(){return window.DWDKG||{}}

/* ===== Tag words shown to people ===== */
var LBL={adventure:'Adventure',food:'Food',shopping:'Shopping',spontaneous:'Spontaneous',animals:'Animals + nature',culture:'Culture',photo:'Photo spots',wellness:'Spa + wellness',chill:'Chill',nightlife:'Nightlife',drinks:'Drinks'};

/* ===== Questions ===== */
var Q=[
 {k:'name',type:'text',q:'What is your first name?',sub:'It goes on your boarding pass.'},
 {k:'who',type:'one',q:'Who is coming?',opts:[['solo_guy','Solo guy'],['solo_girl','Solo girl'],['couple','Couple'],['friends','Group of friends'],['family','Family']]},
 {k:'vibe',type:'one',q:'What kind of trip?',opts:[['relax','Relaxing'],['exciting','Exciting']]},
 {k:'drinks',type:'one',q:'Do you drink?',opts:[['yes','Yes'],['sometimes','Sometimes'],['no','No alcohol']]},
 {k:'night',type:'one',q:'Nightlife and clubs?',opts:[['love','Love it'],['one','Maybe one night'],['skip','Skip it']]},
 {k:'likes',type:'many',q:'Pick all you like',sub:'Tap as many as you want.',opts:[['adventure','Adventure'],['food','Food'],['shopping','Shopping'],['spontaneous','Spontaneous plans'],['animals','Animals + nature'],['culture','Culture'],['photo','Photo spots'],['wellness','Spa + wellness']]},
 {k:'note',type:'note',q:'Anything else?',sub:'A food you love, a must see, a thing to skip. Anything.'}
];
var WHO={solo_guy:'Solo guy',solo_girl:'Solo girl',couple:'Couple',friends:'Group of friends',family:'Family'};
var VIBE={relax:'Relaxing',exciting:'Exciting'};
var DRK={yes:'Drinks: yes',sometimes:'Drinks: sometimes',no:'No alcohol'};
var NGT={love:'Nightlife: love it',one:'One big night',skip:'No clubs'};

/* ===== Tags for every stop we can see (China + Japan, Economy) ===== */
var F='family-ok';
var TAGS={
 china:{
  "land, drop your bags, grab a luckin":['food','chill',F],
  "yang's dumplings, pan-fried soup buns":['food',F],
  "the bund at night":['photo','chill','culture',F],
  "morning tai chi in fuxing park":['culture','wellness','chill',F],
  "yu garden":['culture','photo',F],
  "yu garden lit up":['photo','culture',F],
  "shanghai international glasses city":['shopping',F],
  "shanghai head spa":['wellness','chill'],
  "hotel robot room service":['chill','food',F],
  "luckin and a slow walk":['chill','photo','food',F],
  "round 2 of soup buns":['food',F],
  "shanghai tower, 118th floor":['photo','adventure',F],
  "shanghai hongqiao to hangzhou east":['adventure',F],
  "west lake":['animals','photo','chill',F],
  "sunset by the lake, train home":['photo','chill','animals',F],
  "quick train to suzhou":['adventure',F],
  "humble administrator's garden":['culture','animals','photo',F],
  "pingjiang road canal walk":['culture','photo','food','chill',F],
  "one more round of tai chi":['wellness','culture','chill',F],
  "pick one: second head spa or new sunglasses":['wellness','shopping','spontaneous'],
  "huangpu river cruise":['photo','chill',F]
 },
 japan:{
  "tap in with suica":[F],
  "shibuya crossing":['photo','adventure',F],
  "shibuya sky":['photo','adventure',F],
  "senso-ji in asakusa":['culture','photo','food',F],
  "akihabara":['adventure','shopping',F],
  "omoide yokocho, then golden gai":['nightlife','drinks','food'],
  "meiji shrine and harajuku":['culture','shopping','animals','photo',F],
  "pack light for tomorrow":['chill',F],
  "shinjuku lights":['photo','food',F],
  "ride the shinkansen":['adventure',F],
  "fushimi inari":['culture','photo','adventure','animals',F],
  "train to osaka":['chill',F],
  "kuromon market":['food',F],
  "osaka castle":['culture','photo',F],
  "dotonbori":['food','photo',F],
  "nara deer park":['animals','adventure','photo',F],
  "back to osaka, rest up":['chill','wellness',F],
  "shinsekai":['food','culture',F],
  "one last konbini run":['food','chill',F],
  "shop shinsaibashi":['shopping',F],
  "head home":[F]
 }
};
/* Swaps for stops we take out (no alcohol, no clubs, family) */
var SWAP={
 "omoide yokocho, then golden gai":{t:'Omoide Yokocho, no bar crawl',d:'Yakitori shoulder to shoulder with locals. Ask for oolong tea or a soda. Skip the Golden Gai bars and walk back past the lit up side streets.',tags:['food','culture',F]}
};
/* Keyword tags for countries without a list (Premium + First Class plans) */
var KW=[
 ['nightlife',/\b(club|clubs|nightclub|dj|party|parties|bar crawl|bar hop|dance floor|rave|beach club|lounge)\b/i],
 ['drinks',/\b(bar|bars|beer|beers|cocktail|cocktails|wine|sake|soju|whisky|whiskey|pub|pubs|brewery|rooftop bar|happy hour|drinks?|spirits|champagne|speakeasy)\b/i],
 ['food',/\b(eat|food|market|dumpling|dumplings|noodle|noodles|ramen|sushi|bbq|barbecue|restaurant|dinner|lunch|breakfast|brunch|street food|taco|tacos|curry|pho|bakery|dessert|coffee|cafe|snack|snacks|seafood|steak|tasting)\b/i],
 ['shopping',/\b(shop|shops|shopping|mall|boutique|boutiques|souvenir|souvenirs|outlet)\b/i],
 ['animals',/\b(animal|animals|zoo|aquarium|deer|elephant|elephants|monkey|monkeys|turtle|turtles|beach|beaches|island|islands|park|garden|gardens|lake|forest|mountain|mountains|waterfall|desert|reef|snorkel|nature|hike|hiking|falls)\b/i],
 ['culture',/\b(temple|temples|shrine|museum|museums|palace|old town|history|historic|castle|church|mosque|cathedral|gallery|heritage|tradition|traditional)\b/i],
 ['photo',/\b(view|views|sunset|sunrise|skyline|lookout|photo|photos|observation|tower|deck|lights|neon)\b/i],
 ['wellness',/\b(spa|massage|onsen|hot spring|sauna|wellness|yoga|jjimjilbang|hammam|facial|pool day)\b/i],
 ['adventure',/\b(hike|hiking|safari|dune|dunes|quad|atv|zipline|dive|diving|surf|surfing|kayak|boat|jet ski|skydive|roller coaster|theme park|bullet train|helicopter|climb)\b/i],
 ['chill',/\b(rest|relax|slow|nap|chill|easy|lazy|stroll|sunbed|lounger)\b/i],
 ['spontaneous',/\b(your pick|pick one|free day|free time|wander|no plan|choose)\b/i]
];
function norm(s){return String(s||'').toLowerCase().replace(/[\u2018\u2019]/g,"'").replace(/\s+/g,' ').trim()}
function tagsFor(key,title,text){
 var m=TAGS[key],t=norm(title);
 if(m&&m[t])return m[t].slice();
 var out=[],s=title+' '+text;
 KW.forEach(function(r){if(r[1].test(s))out.push(r[0])});
 if(out.indexOf('nightlife')<0&&out.indexOf('drinks')<0)out.push(F);
 return out;
}

/* ===== What the answers want ===== */
function wants(a){
 var w={};(a.likes||[]).forEach(function(x){w[x]=2});
 if(a.vibe==='relax'){w.chill=(w.chill||0)+1;w.wellness=(w.wellness||0)+1}
 if(a.vibe==='exciting'){w.adventure=(w.adventure||0)+1;w.nightlife=(w.nightlife||0)+1}
 if(a.night==='love')w.nightlife=(w.nightlife||0)+2;
 if(a.drinks==='yes')w.drinks=(w.drinks||0)+1;
 if(a.who==='couple'){w.photo=(w.photo||0)+1}
 if(a.who==='friends'){w.food=(w.food||0)+1}
 return w;
}
function blocked(a,tags,nightCount){
 var hasN=tags.indexOf('nightlife')>-1,hasD=tags.indexOf('drinks')>-1,fam=tags.indexOf(F)>-1;
 if(a.drinks==='no'&&hasD)return 'drink';
 if(a.night==='skip'&&hasN)return 'club';
 if(a.night==='one'&&hasN&&nightCount>0)return 'club';
 if(a.who==='family'&&(hasN||hasD)&&!fam)return 'family';
 return null;
}
function hasAnswers(a){return !!(a&&(a.name||a.who||a.vibe||a.drinks||a.night||(a.likes&&a.likes.length)||a.note))}
function passNo(a){var s=(a.name||'')+'|'+(a.who||'')+'|'+(a.vibe||'')+'|'+(a.likes||[]).join(',')+'|'+(a.at||0),h=7;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return 'DK-'+('0000'+(h%100000)).slice(-5)}

/* ===== Re-sort a trip page ===== */
function clear(root){
 [].forEach.call(root.querySelectorAll('.q-pass,.q-top,.q-swap,.q-for'),function(e){e.parentNode.removeChild(e)});
 [].forEach.call(root.querySelectorAll('.slot.q-hide'),function(e){e.classList.remove('q-hide')});
 [].forEach.call(root.querySelectorAll('.slot.q-match'),function(e){e.classList.remove('q-match')});
}
function slotParts(sl){var h=sl.querySelector('h4'),p=sl.querySelector('p:not(.price)'),w=sl.querySelector('.when');return {title:h?h.textContent:'',text:p?p.textContent:'',when:w?w.textContent:''}}
function apply(root,key,placeName){
 if(!root)return;clear(root);
 var a=load();
 var main=root.querySelector('main.wrap');if(!main)return;
 var anchor=main.querySelector('.remind');
 var card=document.createElement('section');card.className='q-pass';card.setAttribute('aria-label','Your boarding pass');
 if(!a||!hasAnswers(a)){
  card.innerHTML='<div class="q-pt"><span class="q-k">Make it yours</span><b>Build my trip</b><p>Answer 7 quick taps and this plan sorts itself for you.</p></div><div class="q-pb"><button type="button" class="btn btn-gold btn-sm" data-q-open>Build my trip (1 min)</button></div>';
  main.insertBefore(card,main.firstChild);
  return;
 }
 var w=wants(a),slots=[].slice.call(root.querySelectorAll('.days .slot')),picks=[],cands=[],hid={drink:0,club:0,family:0},nightKept={base:0,vip:0},matched=0;
 slots.forEach(function(sl){
  var P=slotParts(sl),tags=tagsFor(key,P.title,P.text),grp=sl.closest('.vipplan')?'vip':'base';
  sl.setAttribute('data-tags',tags.join(' '));
  var why=blocked(a,tags,nightKept[grp]);
  if(why){
   hid[why]++;sl.classList.add('q-hide');
   var sw=SWAP[norm(P.title)],s=document.createElement('div');s.className='slot q-swap';
   var ico=sl.querySelector('.ico');
   var night=/night/i.test(P.when);
   var t=sw?sw.t:(night?'Your swap: an easy night':'Your swap: free time'),d=sw?sw.d:(why==='drink'?'We took out a bar stop for you. Grab a late dinner, a dessert spot or a night walk near your hotel.':'We took out a club stop for you. Grab a late dinner, a dessert spot or a night walk near your hotel.');
   if(!night&&!sw)d='We took this one out for you. Explore the streets near your hotel or rest up.';
   s.innerHTML='<div class="ico">'+(ico?ico.innerHTML:'')+'</div><div><div class="when">'+esc(P.when)+'</div><h4>'+esc(t)+'</h4><p>'+esc(d)+'</p><div class="q-for q-sw">Swapped for you</div></div>';
   sl.parentNode.insertBefore(s,sl.nextSibling);
   return;
  }
  if(tags.indexOf('nightlife')>-1)nightKept[grp]++;
  var score=0,hit=[];tags.forEach(function(g){if(w[g]){score+=w[g];if(LBL[g])hit.push(LBL[g])}});
  if(score>0&&hit.length)cands.push({sl:sl,score:score,hit:hit,grp:grp,title:P.title,when:P.when});
 });
 /* only the strongest matches get the badge, so it still means something */
 var mx=0;cands.forEach(function(c){if(c.score>mx)mx=c.score});
 var bar=Math.max(2,Math.ceil(mx*0.6)),vipOn=document.documentElement.getAttribute('data-tier')==='vip'&&!!root.querySelector('.vipplan');
 cands.forEach(function(c){
  if(c.score<bar)return;
  var sl=c.sl;matched+=(c.grp==='vip')===vipOn?1:0;sl.classList.add('q-match');
  var b=document.createElement('div');b.className='q-for';b.textContent='For you: '+c.hit.slice(0,3).join(', ');
  var inner=sl.children[1]||sl;var pr=inner.querySelector('.price');inner.insertBefore(b,pr||null);
  var day=sl.closest('article');
  if(day&&!day.id&&c.grp==='vip')day.id='qv'+(++VID);
  if(day&&day.id&&((c.grp==='vip')===vipOn))picks.push({score:c.score,i:picks.length,day:day,title:c.title,when:c.when,hit:c.hit,grp:c.grp});
 });
 /* the pass */
 var nm=a.name||'',who=a.who?WHO[a.who]:'';
 var tagsHTML=[who,a.vibe?VIBE[a.vibe]:'',a.drinks?DRK[a.drinks]:'',a.night?NGT[a.night]:''].filter(Boolean).concat((a.likes||[]).map(function(x){return LBL[x]})).map(function(x){return '<span>'+esc(x)+'</span>'}).join('');
 var notes=[];
 if(matched)notes.push(matched+(matched===1?' stop':' stops')+' marked "For you"');
 if(hid.drink)notes.push(hid.drink+' bar '+(hid.drink===1?'stop':'stops')+' swapped out');
 if(hid.club)notes.push(hid.club+' club '+(hid.club===1?'stop':'stops')+' swapped out');
 if(hid.family)notes.push(hid.family+' late night '+(hid.family===1?'stop':'stops')+' swapped for the family');
 var place=placeName||key;
 var h='<div class="q-pt"><div class="q-row"><span class="q-k">Boarding pass &middot; '+esc(passNo(a))+'</span><span class="q-k q-r">Built '+esc(a.day||'')+'</span></div>'+
  '<div class="q-route"><div><small>From</small><b>'+esc((nm||'YOU').toUpperCase().slice(0,12))+'</b></div><svg viewBox="0 0 44 22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M2 11h36" stroke-dasharray="2 4"/><path d="M30 5l8 6-8 6"/></svg><div class="to"><small>To</small><b>'+esc(String(place).toUpperCase().slice(0,12))+'</b></div></div>'+
  '<h2>'+(nm?esc(nm)+'\'s itinerary, built for '+esc(nm):'Your itinerary, built for you')+'</h2>'+
  (tagsHTML?'<div class="q-tags">'+tagsHTML+'</div>':'')+'</div>'+
  '<div class="q-perf" aria-hidden="true"></div><div class="q-pb">'+
  (notes.length?'<p class="q-done">'+esc(notes.join('. '))+'.</p>':'<p class="q-done">Pick a few things you like and we will mark your best stops.</p>')+
  (a.note?'<p class="q-note"><b>Your note</b>"'+esc(a.note)+'" Got it, we\'ll use this as we add more.</p>':'')+
  '<button type="button" class="btn btn-line btn-sm" data-q-open>Edit my answers</button></div>';
 card.innerHTML=h;
 main.insertBefore(card,main.firstChild);
 /* lead with the best matches */
 picks.sort(function(x,y){return y.score-x.score||x.i-y.i});
 var top=picks.slice(0,4);
 var sec=document.createElement('section');sec.className='q-top';
 if(top.length){
  sec.innerHTML='<p class="eyebrow">Built for '+(nm?esc(nm):'you')+'</p><h2>Start with these</h2><ol>'+top.map(function(p){var id=p.day&&p.day.id,dn=p.day&&p.day.querySelector('.n');return '<li><a href="#'+esc(id||'')+'"><small>'+esc(dn?dn.textContent:'')+' &middot; '+esc(p.when)+'</small><b>'+esc(p.title)+'</b><span>'+esc(p.hit.slice(0,3).join(', '))+'</span></a></li>'}).join('')+'</ol>';
 }else{
  sec.innerHTML='<p class="eyebrow">Built for '+(nm?esc(nm):'you')+'</p><h2>Your plan</h2><p class="sub">No stop matches your picks yet. We add more every week.</p>';
 }
 var lg=host().level?host().level():'';
 if(a.night==='love'&&lg!=='first'&&!(nightKept.base>0)){
  sec.innerHTML+='<p class="q-up">Into nightlife? The wildest clubs are in First Class. <button type="button" class="q-link" data-q-up>See First Class</button></p>';
 }
 card.parentNode.insertBefore(sec,card.nextSibling);
}

/* ===== Quiz screen ===== */
var VID=0;
var step=0,draft=null,lastFocus=null,onDone=null;
function build(){
 if($('qz'))return;
 var d=document.createElement('div');d.id='qz';d.className='qz';d.hidden=true;d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','qzH');
 d.innerHTML='<div class="qz-in"><div class="qz-top"><div class="qz-brand"><img src="../images/brand/dk-beige.svg" alt=""><b>Digital<span>with David K.</span></b></div><button type="button" class="qz-x" id="qzX">Skip quiz</button></div>'+
  '<div class="qz-card"><div class="qz-head"><span class="qz-k">Build my trip</span><span class="qz-n" id="qzN"></span></div><div class="qz-bar"><i id="qzBar"></i></div><div id="qzBody"></div></div></div>';
 document.body.appendChild(d);
 $('qzX').addEventListener('click',function(){finish(true)});
 d.addEventListener('keydown',function(e){if(e.key==='Escape')finish(true)});
 d.addEventListener('click',function(e){
  var o=e.target.closest('[data-opt]');
  if(o){var q=Q[step];
   if(q.type==='one'){draft[q.k]=o.getAttribute('data-opt');paint();setTimeout(next,REDUCED?0:180);return}
   if(q.type==='many'){var v=o.getAttribute('data-opt'),L=draft.likes||(draft.likes=[]),i=L.indexOf(v);if(i>-1)L.splice(i,1);else L.push(v);o.setAttribute('aria-pressed',String(i<0));return}
  }
  if(e.target.closest('[data-next]')){grab();next();return}
  if(e.target.closest('[data-skip]')){var q2=Q[step];if(q2.type==='one')delete draft[q2.k];if(q2.type==='text'||q2.type==='note')draft[q2.k]='';if(q2.type==='many')draft.likes=[];next();return}
  if(e.target.closest('[data-back-q]')){grab();if(step>0){step--;paint()}return}
 });
 d.addEventListener('submit',function(e){e.preventDefault();grab();next()});
}
var REDUCED=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function cleanName(v){v=String(v||'').replace(/[^A-Za-z\u00C0-\u024F' -]/g,'').replace(/\s+/g,' ').trim().slice(0,20);return v?v.charAt(0).toUpperCase()+v.slice(1):''}
function grab(){var q=Q[step],f=$('qzF');if(!f)return;if(q.type==='text')draft.name=cleanName(f.value);if(q.type==='note')draft.note=String(f.value||'').replace(/\s+/g,' ').trim().slice(0,280)}
function paint(){
 var q=Q[step],h='';
 $('qzN').textContent=(step+1)+' of '+Q.length;$('qzBar').style.width=Math.round((step+1)/Q.length*100)+'%';
 h+='<h2 id="qzH">'+esc(q.q)+'</h2>'+(q.sub?'<p class="qz-sub">'+esc(q.sub)+'</p>':'');
 if(q.type==='text')h+='<form class="qz-f" novalidate><label class="qz-sr" for="qzF">First name</label><input id="qzF" type="text" maxlength="20" autocomplete="given-name" autocapitalize="words" placeholder="Your first name" value="'+esc(draft.name||'')+'"><p class="qz-fine">Stays on this phone only.</p><button class="btn btn-gold" type="submit">Next</button></form>';
 if(q.type==='one')h+='<div class="qz-opts'+(q.opts.length===2?' two':'')+'">'+q.opts.map(function(o){return '<button type="button" class="qz-o" data-opt="'+o[0]+'" aria-pressed="'+(draft[q.k]===o[0])+'">'+esc(o[1])+'</button>'}).join('')+'</div>';
 if(q.type==='many')h+='<div class="qz-opts two">'+q.opts.map(function(o){return '<button type="button" class="qz-o" data-opt="'+o[0]+'" aria-pressed="'+((draft.likes||[]).indexOf(o[0])>-1)+'">'+esc(o[1])+'</button>'}).join('')+'</div><button class="btn btn-gold qz-go" type="button" data-next>Next</button>';
 if(q.type==='note')h+='<form class="qz-f" novalidate><label class="qz-sr" for="qzF">Anything else</label><textarea id="qzF" rows="3" maxlength="280" placeholder="Type here (optional)">'+esc(draft.note||'')+'</textarea><p class="qz-fine">Got it, we\'ll use this as we add more. For now it stays on this phone only.</p><button class="btn btn-gold" type="submit">Build my trip</button></form>';
 h+='<div class="qz-nav">'+(step>0?'<button type="button" class="qz-l" data-back-q>&larr; Back</button>':'<span></span>')+'<button type="button" class="qz-l" data-skip>Skip</button></div>';
 $('qzBody').innerHTML=h;
 setTimeout(function(){try{var f=$('qzF')||$('qzBody').querySelector('.qz-o');f&&f.focus({preventScroll:true})}catch(e){}},30);
}
function next(){if(step<Q.length-1){step++;paint()}else finish(false)}
function today(){try{return new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}catch(e){return ''}}
function finish(skipped){
 var o=draft||{};
 if(skipped&&!hasAnswers(o)){var old=load();if(!old)save({skipped:true,at:Date.now()})}
 else{o.done=true;o.at=Date.now();o.day=today();delete o.skipped;save(o);if(o.name&&host().setName)host().setName(o.name)}
 var z=$('qz');z.classList.remove('on');setTimeout(function(){if(!z.classList.contains('on'))z.hidden=true},250);
 document.documentElement.classList.remove('qz-lock');
 try{lastFocus&&lastFocus.focus({preventScroll:true})}catch(e){}
 if(onDone)onDone(!skipped||hasAnswers(o));
}
function open(cb){
 build();onDone=cb||null;lastFocus=document.activeElement;
 var old=load()||{};draft={name:old.name||(host().name?host().name():''),who:old.who,vibe:old.vibe,drinks:old.drinks,night:old.night,likes:(old.likes||[]).slice(),note:old.note||''};
 step=0;paint();var z=$('qz');z.hidden=false;void z.offsetWidth;z.classList.add('on');document.documentElement.classList.add('qz-lock');
}
document.addEventListener('click',function(e){
 if(e.target.closest('[data-q-open]')){e.preventDefault();host().openQuiz&&host().openQuiz()}
 if(e.target.closest('[data-q-up]')){e.preventDefault();host().up&&host().up('first')}
});
window.DWDKQuiz={open:open,apply:apply,answers:load,seen:function(){return !!load()},hasAnswers:function(){return hasAnswers(load())}};
})();
