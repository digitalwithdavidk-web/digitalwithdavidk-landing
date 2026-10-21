/* Digital with David K Globe: weekly drops (the top voted countries go live here).
   Same trip shape as japan.js. These open for Premium and First Class (not in FREEK).
   To lock them like the other Premium countries, move them into the private content/
   folder and run: python3 tools/add-access.py --build --private PRIVATE, then delete them here.
   No em dashes. Prices checked Oct 2026. */
(function(){
var F=window.DWDK_FREE=window.DWDK_FREE||{trips:{},tiers:{}};F.trips=F.trips||{};
F.trips.morocco={
 "name":"Morocco","flag":"MA","daysN":7,"cities":"Marrakech, Fes",
 "lead":"Busy souks, rooftop dinners, a sunset in the desert, and a train ride to one of the oldest old towns in the world.",
 "stats":[[2,"Cities"],[7,"Days"],[1,"Desert sunset"]],
 "plan":"Days 1 to 4 in Marrakech, with a desert sunset and a mountain day. Day 5 is a long train ride to Fes. Days 6 and 7 in Fes. Fly home from Fes or go back by train.",
 "days":[
  {"t":"Land in the Red City","city":"Marrakech","s":[
   ["Morning","Get to your riad","A riad is a house with a garden in the middle. Most are inside the old town. Cars cannot get close, so ask your riad to send someone to meet you.",["Ask for pickup"],{"p":"Airport pickup from your riad: price varies, ask when you book","e":true}],
   ["Afternoon","Walk the souks","Get lost in the market lanes. Look first, then ask the price. Haggling is normal. Only start if you really want to buy.",["Bring small bills"],{"p":"Free to walk","e":false}],
   ["Night","Jemaa el-Fnaa","The big square wakes up at night. Food stalls, music and smoke everywhere. Then go up to a rooftop cafe and watch it from above.",["*Best at sunset"],{"p":"Free to walk. Food stalls are cheap, agree on the price first","e":true}]
  ]},
  {"t":"Gardens and palaces","city":"Marrakech","s":[
   ["Morning","Jardin Majorelle","Bright blue walls and big cactus gardens. Go when it opens. You must buy tickets online on the official site. There is no ticket desk at the gate.",["Book online"],{"p":"170 dirhams for the garden. The museums are extra","e":false}],
   ["Afternoon","Bahia Palace","Painted ceilings and tile courtyards. It is in the old town, so walk there from the souks.",[],{"p":"Small entry fee, check before you go","e":true}],
   ["Night","Hammam, then dinner","Get a hot scrub at a hammam. You will feel brand new. Then a slow dinner of tagine on a riad rooftop.",["Book the hammam"],{"p":"Check before you go. Spa hammams cost more than local ones","e":true}]
  ]},
  {"t":"Sunset in the desert","city":"Marrakech","s":[
   ["Morning","Sleep in, mint tea","Slow start. Breakfast in your riad and a glass of mint tea. Ask your host for their favorite spots.",[],{"p":"Breakfast is often included with your riad","e":true}],
   ["Afternoon","Drive to Agafay","The Agafay desert is a rocky desert about an hour from Marrakech. Most people book a tour with a ride there and back.",["*Book a tour"],{"p":"Tours vary a lot. Check what is included before you book","e":true}],
   ["Night","Camels and stars","Ride a camel at sunset, then dinner under the stars at a desert camp. Bring a jacket. It gets cold fast at night.",["Bring a jacket"],{"p":"Often part of the tour price","e":true}]
  ]},
  {"t":"Into the Atlas Mountains","city":"Marrakech","s":[
   ["Morning","Day trip to the mountains","Book a day trip to the Atlas Mountains. You see small Berber villages, rivers and big views. Wear shoes you can walk in.",["Wear good shoes"],{"p":"Tour prices vary, check before you go","e":true}],
   ["Afternoon","Lunch with a view","Most trips stop for lunch in a village. Try a Berber omelette or a fresh tagine.",[],{"p":"Check before you go","e":true}],
   ["Night","Pack for the train","Back in Marrakech. Pack tonight. Buy your train ticket to Fes ahead of time in the ONCF app.",["Book the train"],{"p":"Free","e":false}]
  ]},
  {"t":"Train to Fes","city":"Fes","s":[
   ["Morning","Early train north","The train from Marrakech to Fes takes about 7 hours. Get a first class seat. Bring snacks, water and a charged phone.",["*First class"],{"p":"Check the ONCF app for today's price","e":true}],
   ["Afternoon","Check in to your riad","Fes also has riads inside the old town. Ask your riad to meet you at the gate. The lanes are a maze.",["Ask for pickup"],{"p":"Price varies by riad","e":true}],
   ["Night","Blue Gate at night","Walk to Bab Boujloud, the Blue Gate. It is the main way into the old town. Grab dinner at a cafe near the gate.",[],{"p":"Free to walk","e":false}]
  ]},
  {"t":"Get lost in the old medina","city":"Fes","s":[
   ["Morning","Hire a licensed guide","The Fes medina has about 9,000 lanes. A licensed guide for half a day saves you hours. Ask your riad to book one.",["*Licensed guide"],{"p":"Check before you go. Agree on the price first","e":true}],
   ["Afternoon","The leather tanneries","See the big dye pits from a leather shop terrace. They hand you mint to smell because it stinks. They hope you shop, but you do not have to.",["Mint for the smell"],{"p":"Free to look. A small tip is normal","e":true}],
   ["Night","Madrasa and dinner","See the tile work at Bou Inania Madrasa if it is open. Then dinner on a rooftop over the old town.",[],{"p":"Small entry fee, check before you go","e":true}]
  ]},
  {"t":"Last day in Fes","city":"Fes","s":[
   ["Morning","Jnan Sbil Garden","A big shady garden near the old town. A calm walk after two loud days.",[],{"p":"Check before you go","e":true}],
   ["Afternoon","Last shopping","Pick up a rug, leather bag or spices. Remember you cannot take dirhams out of Morocco, so spend them or change them back.",["Spend your dirhams"],{"p":"Haggle. Start low and smile","e":true}],
   ["Night","Fly home or ride back","Fly home from Fes, or take the train back to Casablanca or Marrakech for your flight.",[],{"p":"Check before you go","e":true}]
  ]}
 ],
 "before":[
  ["Entry for Canadians","Right now, Canadians do not need a visa for a tourist trip of less than 90 days. Your passport needs at least 6 months left after the day you leave Morocco. Check the Government of Canada Morocco page before you fly."],
  ["Money: bring cash too","The money is the dirham. Big hotels and some restaurants take cards, but souks, taxis and tips are cash. Use bank ATMs. You cannot take dirhams out of the country, so do not change too much."],
  ["Get an eSIM","Buy a travel eSIM for Morocco before you land, like Airalo or Holafly. Most are data only, so you will not get a local number for text codes."],
  ["Download these before you land","ONCF for train tickets. Uber or Bolt for rides in Marrakech, and inDrive in Fes. Check the car and plate before you get in. Google Maps with the old town saved offline. Google Translate with French and Arabic."],
  ["Dress and safety","Pack light clothes that cover your shoulders and knees for the old towns. Watch your phone and wallet in busy markets. If someone offers to show you the way, say no thanks and keep walking."]
 ]
};
F.trips.iceland={
 "name":"Iceland","flag":"IS","daysN":6,"cities":"Reykjavik, Selfoss, Vik",
 "lead":"Geysers, giant waterfalls, black sand beaches and hot lagoons, all in one road trip.",
 "stats":[[3,"Stops"],[6,"Days"],[1,"Road trip"]],
 "plan":"Days 1 and 2 in Reykjavik. Day 3 drive the Golden Circle and sleep in Selfoss. Days 4 and 5 on the south coast in Vik. Day 6 drive back and soak in the Blue Lagoon on the way to the airport.",
 "days":[
  {"t":"Land and soak","city":"Reykjavik","s":[
   ["Morning","Pick up your car","Get your rental car at Keflavik airport. It is about 45 minutes to Reykjavik. From November to April, your car must have winter tires.",["*Winter tires"],{"p":"Check before you go. Prices change by season","e":true}],
   ["Afternoon","Walk downtown","Walk Laugavegur, the main shopping street. Grab a famous hot dog. Order it with everything.",[],{"p":"Free to walk","e":false}],
   ["Night","Sky Lagoon","A hot lagoon by the ocean, a short drive from downtown. Book a time slot online. Evening slots sell out first.",["Book ahead"],{"p":"From 13,990 krona for the Saman pass","e":false}]
  ]},
  {"t":"City views and northern lights","city":"Reykjavik","s":[
   ["Morning","Hallgrimskirkja tower","The tall white church on the hill. Ride up the tower for the best view of the colorful roofs.",[],{"p":"1,500 krona for the tower","e":false}],
   ["Afternoon","Harbor and Harpa","Walk to the old harbor and the glass concert hall, Harpa. Get fish and chips or a lobster soup by the water.",[],{"p":"Free to walk","e":false}],
   ["Night","Chase the northern lights","From about September to April, the lights can show up on dark, clear nights. Check the aurora forecast in the Vedur app. A tour driver knows where the sky is clear.",["*Clear sky needed"],{"p":"Tour prices vary, check before you go","e":true}]
  ]},
  {"t":"The Golden Circle","city":"Selfoss","s":[
   ["Morning","Thingvellir National Park","Walk between two big plates of the earth. Pay for parking at the machine or online.",["Pay for parking"],{"p":"Parking: 1,000 krona for a car","e":false}],
   ["Afternoon","Geysir and Gullfoss","Watch the Strokkur geyser shoot up every few minutes. Then drive to Gullfoss, a huge two step waterfall.",[],{"p":"Free to see. Parking may cost extra","e":true}],
   ["Night","Sleep in Selfoss","Drive to Selfoss for the night. It is a small town with food and a short drive to the south coast.",[],{"p":"Check before you go","e":true}]
  ]},
  {"t":"Waterfall day","city":"Vik","s":[
   ["Morning","Seljalandsfoss","You can walk behind this waterfall. Bring a rain jacket. You will get wet.",["Bring a rain jacket"],{"p":"Paid parking, check before you go","e":true}],
   ["Afternoon","Skogafoss","A giant waterfall right by the road. Climb the stairs on the side for the view from the top.",[],{"p":"Paid parking, check before you go","e":true}],
   ["Night","Check in to Vik","Vik is a tiny village by the sea, about 187 km from Reykjavik. Book your room early. There are not many.",["Book early"],{"p":"Check before you go","e":true}]
  ]},
  {"t":"Black sand beaches","city":"Vik","s":[
   ["Morning","Reynisfjara beach","Black sand, tall rock columns and huge waves. Stay far back from the water. Sneaker waves can pull people in with no warning.",["*Stay back from the waves"],{"p":"Free. Parking may cost extra","e":true}],
   ["Afternoon","Dyrholaey","A big rock arch and a lighthouse with views of the whole coast. In summer you may see puffins.",[],{"p":"Free","e":false}],
   ["Night","Warm dinner in Vik","Lamb soup or fresh fish in the village. Then look up. Vik has very little light, so the stars are big.",[],{"p":"Check before you go","e":true}]
  ]},
  {"t":"Blue Lagoon, then home","city":"Reykjavik","s":[
   ["Morning","Drive back west","Leave early. It is about 2 and a half hours back toward Reykjavik with no stops. Check road conditions first.",["Check the roads"],{"p":"Fuel: check before you go","e":true}],
   ["Afternoon","Blue Lagoon","The milky blue lagoon is close to the airport, so it is perfect on your last day. Book a time slot online.",["Book ahead"],{"p":"From 11,990 krona for Comfort","e":false}],
   ["Night","Fly home","Drop your car at Keflavik and fly home. Leave extra time if the weather is bad.",[],{"p":"Free","e":false}]
  ]}
 ],
 "before":[
  ["Entry for Canadians","Right now, Canadians do not need a visa for up to 90 days in any 180 days in the Schengen area, and Iceland is part of it. Your passport needs at least 3 months left after you leave. At the border, your face and fingerprints may be taken for the new EU entry system. ETIAS is not open yet. Check the Government of Canada Iceland page before you fly."],
  ["Money: cards everywhere","The money is the krona. Cards and Apple Pay work almost everywhere, so you barely need cash. Know your card PIN. Many gas pumps ask for it."],
  ["Get an eSIM","Buy a travel eSIM for Iceland before you land, like Airalo or Holafly. You need data for maps and the road updates."],
  ["Download these before you land","Vedur for weather and the northern lights forecast. 112 Iceland for safety alerts. Check road conditions on umferdin.is. Parka for parking. Google Maps with the south coast saved offline."],
  ["Driving and safety","Headlights must be on all the time. Never drive off the road. Weather changes fast, so check it every morning and pack layers, a rain jacket and good shoes."]
 ]
};
})();
