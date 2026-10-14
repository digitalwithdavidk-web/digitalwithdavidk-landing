/* Digital with David K Globe: itineraries (facts checked Oct 14, 2026).
   Edit words here. Chips that start with * show in gold. No em dashes. */
window.DWDK_TRIPS={
japan:{
  name:'Japan',flag:'JP',daysN:7,cities:'Tokyo, Kyoto, Osaka',
  lead:'Tokyo nights, a bullet train to Kyoto, and three days of eating your way through Osaka.',
  stats:[[3,'Cities'],[7,'Days'],[1,'Bullet train']],
  plan:'Days 1 to 3 in Tokyo. Day 4 in Kyoto. Days 5 to 7 in Osaka. Kyoto to Osaka is only about 30 minutes by train.',
  days:[
    {t:'Land in Shibuya',city:'Tokyo',s:[
      ['Morning','Tap in with Suica','Add a Suica card to Apple Wallet before you fly. Tap your phone on trains and at 7-Eleven. No ticket lines.',['Works on iPhone']],
      ['Afternoon','Shibuya Crossing','Walk the busiest crossing in the world. Then grab a coffee upstairs and watch it from above.',['*Free']],
      ['Night','Shibuya Sky','Go up just before sunset and stay for the city lights. Book online. It is cheaper and it sells out.',['About 2,700 to 3,400 yen online','Book ahead']]]},
    {t:'Old Tokyo, tiny bars',city:'Tokyo',s:[
      ['Morning','Senso-ji in Asakusa','The oldest temple in Tokyo. Go early, before the tour groups. Grab a snack on the shop street out front.',['*Free to walk the grounds']],
      ['Afternoon','Akihabara','Games, anime and arcades. Try a claw machine. Everybody loses. That is the fun.',['Bring coins']],
      ['Night','Omoide Yokocho, then Golden Gai','Yakitori and a beer shoulder to shoulder with locals. Then walk to Golden Gai, about 200 tiny bars. Look for a "no cover" sign.',['Some bars charge a seat fee','About 500 to 1,500 yen']]]},
    {t:'Your pick day',city:'Tokyo',s:[
      ['Morning','Meiji Shrine and Harajuku','A quiet forest shrine, then the busy shops of Takeshita Street right next door.',['*Shrine is free']],
      ['Afternoon','Pack light for tomorrow','Send your big bag ahead with a hotel luggage service and ride the train with a small bag.',['Ask your front desk']],
      ['Night','Shinjuku lights','Big screens, side streets and late ramen. Try a ticket machine ramen shop. Pick, pay, eat.',['Most bowls about 1,000 to 1,500 yen']]]},
    {t:'Bullet train to Kyoto',city:'Kyoto',s:[
      ['Morning','Ride the Shinkansen','The Nozomi train gets you from Tokyo to Kyoto in about 2 hours 15 minutes. Book on the smartEX app or Trip.com. Sit on the right side for a chance to see Mount Fuji.',['About 14,170 yen reserved seat']],
      ['Afternoon','Fushimi Inari','Thousands of orange gates up a mountain. Walk past the first crowd. It gets quiet fast the higher you go.',['*Free','Open 24 hours']],
      ['Night','Train to Osaka','Hop on the JR Special Rapid to Osaka. About 30 minutes.',['Tap your Suica']]]},
    {t:'Eat everything',city:'Osaka',s:[
      ['Morning','Kuromon Market','Fresh seafood, wagyu sticks and fruit. Come hungry. Graze stall to stall.',['Go before lunch']],
      ['Afternoon','Osaka Castle','Walk the moat and the park. Go inside the main tower if you like museums.',['Tower about 1,200 yen']],
      ['Night','Dotonbori','The neon river and the famous running man sign. Eat takoyaki and okonomiyaki on the street.',['*Free to walk']]]},
    {t:'Day trip or slow day',city:'Osaka',s:[
      ['Morning','Nara deer park','About 45 minutes by train. Deer walk right up to you and bow for crackers.',['Check train times']],
      ['Afternoon','Back to Osaka, rest up','Hotel nap. You have earned it.',[]],
      ['Night','Shinsekai','Old school Osaka. Try kushikatsu, fried food on a stick. One rule: no double dipping in the sauce.',['Cheap eats']]]},
    {t:'Last day',city:'Osaka',s:[
      ['Morning','One last konbini run','Egg sandwich and fried chicken from a convenience store. Trust me.',['Under 1,000 yen']],
      ['Afternoon','Shop Shinsaibashi','A long covered shop street. Bring your passport. Many shops take off the tax for tourists.',['Bring your passport']],
      ['Night','Head home','Leave time at the airport. Japan now adds a 3,000 yen departure tax, usually inside your plane ticket.',['Built into most tickets']]]}
  ],
  before:[
    ['Entry for Canadians','Canadians can visit Japan for up to 90 days with no visa. No form to apply for before you fly. Have a valid passport.'],
    ['Fill in Visit Japan Web','Do your arrival and customs forms online before you land. You get QR codes to show at the airport. It saves a lot of time.'],
    ['Suica on your phone','Add Suica to Apple Wallet. Use it for trains, buses and convenience stores. Carry a little cash too. Some small spots are cash only.'],
    ['Get an eSIM','Buy a Japan eSIM before you fly so Google Maps works the second you land. Google Maps works great in Japan.'],
    ['Download these before you land','GO for taxis (in English, takes foreign cards). smartEX or Trip.com for the bullet train. Google Translate with the camera for menus.']
  ]
},
korea:{
  name:'South Korea',flag:'KR',daysN:6,cities:'Seoul, Busan',
  lead:'Four days in Seoul, from palaces to Hongdae nights, then the fast train down to the beaches of Busan.',
  stats:[[2,'Cities'],[6,'Days'],[1,'KTX train']],
  plan:'Days 1 to 4 in Seoul. Days 5 and 6 in Busan. The KTX train takes about 2.5 hours.',
  days:[
    {t:'Land and eat',city:'Seoul',s:[
      ['Morning','Get your T-money and apps set','Load a T-money card for subways and buses. Open Naver Map, not Google Maps. It works way better here.',['Works in Seoul and Busan']],
      ['Afternoon','Myeongdong street food','Walk the street stalls. Try egg bread, tornado potato and a fruit cup. Then skin care shopping.',['Cheap eats']],
      ['Night','Korean BBQ','Grill pork belly at the table. Wrap it in lettuce with garlic and sauce. One bite. Repeat.',['Go with friends']]]},
    {t:'Palace in hanbok',city:'Seoul',s:[
      ['Morning','Rent a hanbok','Rent the classic Korean outfit near the palace. Wear it in and you get in free.',['*Free entry in hanbok','Closed Tuesdays']],
      ['Afternoon','Gyeongbokgung and Bukchon','Walk the big palace, then the old hanok houses of Bukchon up the hill. Keep your voice down. People live there.',['Palace 3,000 won without hanbok']],
      ['Night','Ikseon-dong','Tiny alleys full of cafes and bars inside old houses.',['Great for photos']]]},
    {t:'Hongdae night',city:'Seoul',s:[
      ['Morning','Seongsu cafes','The cool cafe and pop-up shop area. Every week something new opens.',['Go after 11am']],
      ['Afternoon','Han River picnic','Order fried chicken to the park by the river. Sit on a mat with a cold drink. This is how locals chill.',['*Park is free']],
      ['Night','Hongdae','Street dancers, buskers, bars and clubs. It goes late. Grab a late snack at a convenience store after.',['Goes past 2am']]]},
    {t:'Views and shopping',city:'Seoul',s:[
      ['Morning','Sleep in, then brunch','You went out last night. Take it slow.',[]],
      ['Afternoon','Gangnam and COEX','The giant Starfield Library inside COEX Mall. Huge walls of books. Free to walk in.',['*Free']],
      ['Night','N Seoul Tower','Ride up Namsan for the whole city lit up. The Banpo Bridge rainbow fountain runs in spring and fall until October 31. Check the show times.',['Tower ticket price: check before you go']]]},
    {t:'KTX to the beach',city:'Busan',s:[
      ['Morning','Ride the KTX','Seoul Station to Busan in about 2.5 hours. Book ahead on the Korail site.',['About 59,800 won']],
      ['Afternoon','Gamcheon Culture Village','A hill of colorful houses and art. Wear good shoes. It is steep.',['Small map fee optional']],
      ['Night','Haeundae Beach','Walk the sand at night, then grab seafood and soju by the water.',['*Beach is free']]]},
    {t:'Fish market, fly home',city:'Busan',s:[
      ['Morning','Jagalchi Fish Market','Pick your seafood downstairs and they cook it for you upstairs.',['Bring cash']],
      ['Afternoon','Haedong Yonggungsa','A temple right on the ocean rocks. One of the prettiest spots in Korea.',['*Free']],
      ['Night','Head home','Fly out of Busan or take the KTX back to Seoul.',[]]]}
  ],
  before:[
    ['Entry for Canadians','Canadians can visit South Korea with no visa for up to 6 months. Canadians also skip the K-ETA until December 31, 2026. Going in 2027? Check the rules first.'],
    ['Fill in the e-Arrival card','Do the online arrival card before you land. It is free. Only use the official Korean government site.'],
    ['Money','Cards work almost everywhere. You can now add a T-money card to iPhone with the MobileTmoney app and top it up with a Mastercard. Carry a little cash for markets.'],
    ['Get an eSIM','Buy a Korea eSIM before you fly. Maps and taxis need data.'],
    ['Download these before you land','Naver Map (best for walking and subway). KakaoTalk (everyone uses it to text). k.ride or Uber for taxis with a foreign card. Papago to translate.']
  ]
},
thailand:{
  name:'Thailand',flag:'TH',daysN:7,cities:'Bangkok, Phuket',
  lead:'Temples and rooftop nights in Bangkok, then island boat days and sunsets in Phuket.',
  stats:[[2,'Cities'],[7,'Days'],[1,'Island day']],
  plan:'Days 1 to 3 in Bangkok. Days 4 to 7 in Phuket. It is about a 1.5 hour flight.',
  days:[
    {t:'Land in Bangkok',city:'Bangkok',s:[
      ['Morning','Get Grab, get moving','Order a Grab from the airport. You see the price before you ride.',['No haggling']],
      ['Afternoon','Thai massage','A real one hour Thai massage. Best fix for a long flight.',['Very cheap vs home']],
      ['Night','Street food on Yaowarat','Bangkok Chinatown at night. Grilled seafood, noodles and mango sticky rice.',['Bring small cash']]]},
    {t:'Temples day',city:'Bangkok',s:[
      ['Morning','The Grand Palace','Go right when it opens. Cover your shoulders and knees or they will not let you in.',['500 baht','Dress code']],
      ['Afternoon','Wat Arun','Take the little river ferry across. Climb the steps of the temple by the water.',['200 baht']],
      ['Night','A rooftop drink','Dress up a bit and go up high for the skyline. Most rooftops have a dress code. No flip flops.',['Book a table']]]},
    {t:'Market and malls',city:'Bangkok',s:[
      ['Morning','Chatuchak Weekend Market','Thousands of stalls. Clothes, art, food. Only open Saturday and Sunday.',['About 9am to 6pm']],
      ['Afternoon','Malls and AC','ICONSIAM or Siam Paragon. Food halls that beat most restaurants back home.',['*Free to walk']],
      ['Night','Pack for the island','Early night. Beach tomorrow.',[]]]},
    {t:'Fly to Phuket',city:'Phuket',s:[
      ['Morning','Fly to Phuket','About 1.5 hours. Grab or Bolt from the airport to your hotel.',['Grab and Bolt both work']],
      ['Afternoon','Pool, then beach','Do nothing. That is the plan.',[]],
      ['Night','Phuket Old Town','Colorful old shop houses, cafes and night food. A nice break from the party streets.',['*Free to walk']]]},
    {t:'Island boat day',city:'Phuket',s:[
      ['Morning','Phi Phi Islands boat trip','Speedboat out to the Phi Phi Islands. Clear water, cliffs, snorkeling.',['Book the day before']],
      ['Afternoon','Maya Bay','The famous beach from the movies. You can look but you cannot swim there. It closes every August and September.',['Open from October 1']],
      ['Night','Seafood dinner','Back on land, pick fresh seafood by the beach.',[]]]},
    {t:'Big Buddha and sunset',city:'Phuket',s:[
      ['Morning','Slow beach morning','Kata or Karon beach. Fewer people early.',['*Free']],
      ['Afternoon','Big Buddha','A giant white Buddha on a hill. Huge views. Cover shoulders and knees.',['*Free, donations welcome']],
      ['Night','Promthep Cape sunset','The best sunset spot on the island. Get there early for a good spot.',['*Free']]]},
    {t:'Last day',city:'Phuket',s:[
      ['Morning','Last swim','One more swim and one more mango shake.',[]],
      ['Afternoon','Head to the airport','Leave extra time. Phuket airport traffic can be slow.',[]],
      ['Night','Fly home','Or fly back to Bangkok for a last night out.',[]]]}
  ],
  before:[
    ['Entry for Canadians','Since September 15, 2026, Canadians can stay up to 30 days with no visa (it used to be 60). You may be able to extend once. Check before you book long trips.'],
    ['Fill in the TDAC','The Thailand Digital Arrival Card is a must. Do it online in the 3 days before you land. It is free. Use only the official site: tdac.immigration.go.th.'],
    ['Money','Cards work in malls and hotels. Street food and markets want cash baht. Use a no foreign fee card for the rest.'],
    ['Get an eSIM','Buy a Thailand eSIM before you fly so Grab works the second you land.'],
    ['Download these before you land','Grab (rides and food). Bolt (often cheaper rides). Google Maps works well here.']
  ]
},
vietnam:{
  name:'Vietnam',flag:'VN',daysN:7,cities:'Ho Chi Minh City, Da Nang, Hoi An',
  lead:'The fast energy of Saigon, beach days in Da Nang, and a suit made for you in Hoi An.',
  stats:[[3,'Cities'],[7,'Days'],[1,'Custom suit']],
  plan:'Days 1 to 3 in Ho Chi Minh City. Days 4 and 5 in Da Nang. Days 6 and 7 in Hoi An, about 45 minutes away.',
  days:[
    {t:'Land in Saigon',city:'Ho Chi Minh City',s:[
      ['Morning','Iced coffee first','Order a ca phe sua da. Strong Vietnamese coffee with sweet milk on ice.',['Very cheap']],
      ['Afternoon','Ben Thanh Market','Food stalls, souvenirs and fruit. Bargain with a smile.',['Bring cash']],
      ['Night','Bui Vien Walking Street','Loud music, tiny stools and street food. Go once for the story.',['Goes late']]]},
    {t:'Tunnels and pho',city:'Ho Chi Minh City',s:[
      ['Morning','Cu Chi Tunnels','A half day trip out of the city. Crawl through real war tunnels. Not for tall guys.',['About 90,000 to 125,000 dong','Cash only']],
      ['Afternoon','Pho for lunch','Eat where the locals line up. Add herbs, lime and chili.',['Cheap eats']],
      ['Night','Rooftop view','Grab a drink up high and watch the motorbikes stream below.',[]]]},
    {t:'City walk',city:'Ho Chi Minh City',s:[
      ['Morning','Central Post Office','A grand old post office from the 1800s. Still open, still sends mail.',['*Free']],
      ['Afternoon','Banh mi run','Try a few banh mi spots and pick your winner.',['Very cheap']],
      ['Night','Pack for the beach','Early night. Flight tomorrow.',[]]]},
    {t:'Fly to Da Nang',city:'Da Nang',s:[
      ['Morning','Fly to Da Nang','About 1 hour 20 minutes. Take Grab or Xanh SM to your hotel.',['Xanh SM is the most used ride app']],
      ['Afternoon','My Khe Beach','A long, wide beach right in the city.',['*Free']],
      ['Night','Dragon Bridge','On Saturday and Sunday nights the dragon breathes fire and water around 9pm. Check the time before you go.',['*Free','Weekends']]]},
    {t:'Golden Bridge',city:'Da Nang',s:[
      ['Morning','Ba Na Hills','Ride the cable car up to the famous bridge held by giant stone hands. Go early before the crowds.',['About 950,000 dong with cable car']],
      ['Afternoon','Marble Mountains','Caves and temples inside big rock hills on the way to Hoi An.',['Small entry fee']],
      ['Night','Move to Hoi An','About 45 minutes by car.',[]]]},
    {t:'Suit day',city:'Hoi An',s:[
      ['Morning','Get measured for a suit','Hoi An tailors can make a suit in 1 to 2 days. Go on day one so there is time for a fitting.',['Agree on the price first']],
      ['Afternoon','Ancient Town','Old yellow houses and the Japanese Bridge. Buy the town ticket to go inside old houses.',['120,000 dong ticket']],
      ['Night','Lanterns on the river','The whole town lights up with lanterns. Ride a little boat and float a candle.',['Small boat fee']]]},
    {t:'Pick up and fly home',city:'Hoi An',s:[
      ['Morning','Final fitting','Try the suit on. Ask for small fixes. Pick it up.',[]],
      ['Afternoon','An Bang Beach','One last swim and fresh coconut.',[]],
      ['Night','Fly home from Da Nang','The airport is about 45 minutes from Hoi An.',[]]]}
  ],
  before:[
    ['Entry for Canadians','Canadians need an e-visa. Apply on the official site evisa.gov.vn only. It costs US$25 for one entry and lasts up to 90 days. Apply at least a week before you fly.'],
    ['Money','Lots of small spots want cash dong. Use an ATM at the airport. Count the zeros. 100,000 dong is only about 5 Canadian dollars.'],
    ['Get an eSIM','Buy a Vietnam eSIM before you fly. Data is cheap.'],
    ['Crossing the street','Walk slow and steady. Do not stop or run. The motorbikes go around you.'],
    ['Download these before you land','Grab (rides and food). Xanh SM (electric taxis, very popular). Google Translate. Zalo (the local texting app).']
  ]
},
dubai:{
  name:'Dubai (UAE)',flag:'AE',daysN:5,cities:'Dubai, Abu Dhabi',
  lead:'The tallest building in the world, a desert night, old Dubai by boat, and a day trip to Abu Dhabi.',
  stats:[[2,'Cities'],[5,'Days'],[1,'Desert night']],
  plan:'Days 1 to 4 in Dubai. Day 5 is a day trip to Abu Dhabi, about 1.5 hours away.',
  days:[
    {t:'Land and look up',city:'Dubai',s:[
      ['Morning','Get to your hotel','Take Careem or Uber. Both work well here.',[]],
      ['Afternoon','Dubai Mall','Walk the giant mall. See the aquarium wall for free from outside.',['*Free to walk']],
      ['Night','Dubai Fountain','The water show by the Burj Khalifa. Every 30 minutes from 6pm. Free.',['*Free','Every 30 min from 6pm']]]},
    {t:'Burj Khalifa',city:'Dubai',s:[
      ['Morning','Slow pool morning','It is hot. Swim early, rest midday.',[]],
      ['Afternoon','At the Top','Go up the Burj Khalifa. Book online. Sunset times cost the most.',['From about 169 AED online','Book ahead']],
      ['Night','Dinner with a view','Pick a spot facing the tower and watch it light up.',[]]]},
    {t:'Desert night',city:'Dubai',s:[
      ['Morning','Sleep in','Big night tonight.',[]],
      ['Afternoon','Desert safari','Dune bashing in a 4x4, sand boarding and a sunset over the dunes. Pick-up from your hotel.',['From about 150 AED']],
      ['Night','Dinner at camp','BBQ dinner and a show under the stars.',['Usually in the price']]]},
    {t:'Old Dubai',city:'Dubai',s:[
      ['Morning','Al Fahidi','Old sand colored houses and quiet lanes. A slower side of the city.',['*Free to walk']],
      ['Afternoon','Abra ride and the souks','Ride a wooden boat across the creek for 1 dirham. Then walk the Gold Souk and Spice Souk.',['1 AED cash']],
      ['Night','Dubai Marina','Walk the water at night. Boats, towers and lights.',['*Free to walk']]]},
    {t:'Abu Dhabi day trip',city:'Abu Dhabi',s:[
      ['Morning','Sheikh Zayed Grand Mosque','White marble and gold. Book your entry online first. Cover arms and legs. Women cover their hair.',['10 AED for tourists','Closed Friday midday']],
      ['Afternoon','Louvre Abu Dhabi','Art under a giant metal dome that makes "rain" of light.',['70 AED adults']],
      ['Night','Back to Dubai','About 1.5 hours by car. Last dinner.',[]]]}
  ],
  before:[
    ['Entry for Canadians','Canadians get a free entry stamp at the airport. You can stay up to 90 days. No visa to apply for. Have 6 months left on your passport.'],
    ['Money','Cards work almost everywhere. Keep a little cash in dirham for the abra boat and the souks.'],
    ['Get an eSIM','Buy a UAE eSIM before you fly. Some calling apps are limited here, so test yours.'],
    ['Respect the rules','Dress modest in malls and old areas. Cover shoulders and knees at the mosque. No public drinking outside hotels and bars.'],
    ['Download these before you land','Careem and Uber for rides. Get a Nol card for the Metro (you cannot tap a bank card at the gates yet). Note: the Museum of the Future is closed for a refresh until early 2027.']
  ]
},
canada:{
  name:'Canada',flag:'CA',daysN:7,cities:'Toronto, Niagara Falls, Montreal',
  lead:'Big city Toronto, a day at Niagara Falls, then the train to Montreal for bagels and old stone streets.',
  stats:[[3,'Cities'],[7,'Days'],[1,'Train ride']],
  plan:'Days 1 to 3 in Toronto. Day 3 is a Niagara Falls day trip. Days 4 to 7 in Montreal, about 5 hours by train.',
  days:[
    {t:'Land in Toronto',city:'Toronto',s:[
      ['Morning','Tap and go','Tap your credit card or phone on the TTC subway. No ticket needed.',['$3.30 a ride']],
      ['Afternoon','Kensington and Chinatown','Thrift shops, street art and cheap eats side by side.',['*Free to walk']],
      ['Night','CN Tower','Go up for the city lights. Feeling brave? The EdgeWalk lets you walk outside the tower on a harness.',['Main deck about $47','EdgeWalk from $199']]]},
    {t:'Eat Toronto',city:'Toronto',s:[
      ['Morning','St. Lawrence Market','A peameal bacon sandwich. A Toronto classic. Closed Mondays.',['Closed Mondays']],
      ['Afternoon','Distillery District','Old brick streets, cafes and shops.',['*Free to walk']],
      ['Night','A game or a show','Catch the Raptors, Leafs or Blue Jays if they are in town.',['Check schedules']]]},
    {t:'Niagara Falls',city:'Niagara Falls',s:[
      ['Morning','Get there','About 1.5 hours by car, or take the GO Train. It runs all year now.',['GO Train all year']],
      ['Afternoon','Get close to the falls','Take a boat ride right up to the mist. You will get wet. That is the point.',['Check boat season']],
      ['Night','Back to Toronto','Or stay and see the falls lit up at night.',['*Free to look']]]},
    {t:'Train to Montreal',city:'Montreal',s:[
      ['Morning','Ride VIA Rail','About 5 hours. Book early for cheap seats.',['Book early']],
      ['Afternoon','Old Montreal','Stone streets that feel like Europe. See Notre-Dame Basilica.',['Basilica has a fee']],
      ['Night','Poutine','Fries, cheese curds and gravy. Try it at a late night spot.',[]]]},
    {t:'Bagels and views',city:'Montreal',s:[
      ['Morning','Bagel showdown','St-Viateur vs Fairmount. Both open 24 hours. Pick a side.',['Open 24 hours']],
      ['Afternoon','Mount Royal lookout','Walk up to the Kondiaronk lookout for the full skyline.',['*Free']],
      ['Night','Mile End and the Plateau','Cool bars, cafes and colorful stairs outside the houses.',[]]]},
    {t:'Markets and smoked meat',city:'Montreal',s:[
      ['Morning','Jean-Talon Market','A big open market. Fruit, cheese and maple everything.',['*Free to walk']],
      ['Afternoon','Smoked meat sandwich','A Montreal must. Order it medium fat.',[]],
      ['Night','A night out on Crescent Street','Bars and late food downtown.',[]]]},
    {t:'Last day',city:'Montreal',s:[
      ['Morning','Slow brunch','Montreal does brunch right.',[]],
      ['Afternoon','Last walk','Grab maple treats for home.',[]],
      ['Night','Head home','Fly out of Montreal.',[]]]}
  ],
  before:[
    ['Canadian? You are set','You do not need a passport to fly inside Canada. Bring a government photo ID.'],
    ['Visiting from another country?','US citizens just need a passport. Most other visitors who fly in need an eTA. It costs $7 CAD. Apply only on the Government of Canada site.'],
    ['Money','Tap your card almost everywhere. Tip 15 to 20% at sit-down restaurants.'],
    ['Getting around','Toronto: tap your card on the TTC. Montreal: buy an OPUS card for the metro (bank card tap is not there yet).'],
    ['Download these before you land','Transit (live bus and train times). Uber. VIA Rail for train tickets.']
  ]
},
usa:{
  name:'United States',flag:'US',daysN:7,cities:'New York, Miami',
  lead:'Four days of New York energy, then three days of Miami sun.',
  stats:[[2,'Cities'],[7,'Days'],[1,'Free ferry']],
  plan:'Days 1 to 4 in New York. Days 5 to 7 in Miami. The flight is about 3 hours.',
  days:[
    {t:'Land in New York',city:'New York',s:[
      ['Morning','Tap the subway','Tap your card or phone with OMNY. No MetroCard needed.',['$3 a ride']],
      ['Afternoon','Central Park','Rent a bike or just walk. Grab a hot dog from a cart.',['*Free']],
      ['Night','A view from the top','SUMMIT One Vanderbilt or Top of the Rock. Book a sunset time online.',['About $44 to $49 and up']]]},
    {t:'Brooklyn day',city:'New York',s:[
      ['Morning','Walk the Brooklyn Bridge','Walk from Manhattan to Brooklyn. Go early for photos with no crowd.',['*Free']],
      ['Afternoon','DUMBO','Stand on Washington Street for the famous bridge photo. Then pizza.',['*Free']],
      ['Night','Pizza slice crawl','Try a few classic slice shops and pick your winner.',['Cheap eats']]]},
    {t:'Statue and downtown',city:'New York',s:[
      ['Morning','Staten Island Ferry','It is free and passes the Statue of Liberty. Stand on the right side going out.',['*Free','About 25 min']],
      ['Afternoon','Wall Street and the 9/11 Memorial','The two big pools where the towers stood. Quiet and powerful.',['*Memorial pools are free']],
      ['Night','Times Square','See it once at night. Then go eat somewhere else.',['*Free']]]},
    {t:'Your pick day',city:'New York',s:[
      ['Morning','SoHo shopping','Big brands and cool small shops.',[]],
      ['Afternoon','The High Line','A park built on old train tracks above the street.',['*Free']],
      ['Night','Catch a show','A Broadway show or a comedy club in the Village.',['Book ahead']]]},
    {t:'Fly to Miami',city:'Miami',s:[
      ['Morning','Fly south','About 3 hours from New York to Miami.',[]],
      ['Afternoon','South Beach','Drop your bags and get in the water.',['*Free']],
      ['Night','Ocean Drive','The pastel art deco hotels lit up in neon.',['*Free to walk']]]},
    {t:'Art and Cuban food',city:'Miami',s:[
      ['Morning','Wynwood Walls','Huge colorful murals. The main walls charge entry. The street art around it is free.',['About $12']],
      ['Afternoon','Little Havana','Walk Calle Ocho. Cuban coffee, cigars and dominoes in the park.',['*Free to walk']],
      ['Night','Brickell night','Dinner and drinks in the downtown towers.',[]]]},
    {t:'Last day',city:'Miami',s:[
      ['Morning','Beach one more time','Early swim before the heat.',[]],
      ['Afternoon','Key Biscayne or a boat','Quieter beaches across the bridge, or rent a boat with friends.',[]],
      ['Night','Fly home','Leave extra time at Miami airport.',[]]]}
  ],
  before:[
    ['Entry for Canadians','Canadians do not need a visa or ESTA for a trip. Bring your passport. You can usually stay up to 6 months.'],
    ['Staying 30 days or more?','Canadians staying 30 days or longer must register with the US. If you fly in, your entry record usually counts. Driving in? Check the rule first.'],
    ['Money','Tip 18 to 20% at sit-down restaurants. Use a card with no foreign exchange fee.'],
    ['Phone plan','Add a US roaming plan or buy a US eSIM so maps work.'],
    ['Download these before you land','Uber or Lyft. OMNY is just your tap card or phone in New York. Google Maps for subway times.']
  ]
},
australia:{
  name:'Australia',flag:'AU',daysN:7,cities:'Sydney, Melbourne',
  lead:'Harbour days and beach walks in Sydney, then coffee, laneways and the Great Ocean Road from Melbourne.',
  stats:[[2,'Cities'],[7,'Days'],[1,'Road trip']],
  plan:'Days 1 to 4 in Sydney. Days 5 to 7 in Melbourne. The flight is about 1.5 hours.',
  days:[
    {t:'Land in Sydney',city:'Sydney',s:[
      ['Morning','Tap and go','Tap your credit card or phone on trains, buses and ferries. No Opal card needed.',['Contactless works']],
      ['Afternoon','The Opera House','Walk the harbour around the Opera House and the Harbour Bridge.',['Tour about $50 AUD online']],
      ['Night','Dinner at Circular Quay','Eat by the water with the bridge lit up.',[]]]},
    {t:'Bondi to Coogee',city:'Sydney',s:[
      ['Morning','Coastal walk','About 6 km along the cliffs from Bondi to Coogee. 2 to 3 hours with stops.',['*Free']],
      ['Afternoon','Swim at Coogee','Cool off at the end of the walk.',['*Free']],
      ['Night','Bondi night','Back to Bondi for dinner and drinks.',[]]]},
    {t:'Ferry to Manly',city:'Sydney',s:[
      ['Morning','Manly Ferry','About 30 minutes from Circular Quay. Best harbour view in the city.',['Tap your card']],
      ['Afternoon','Manly Beach','Surf lesson or just lie in the sand.',[]],
      ['Night','The Rocks','Old pubs on cobblestone streets near the bridge.',[]]]},
    {t:'Your pick day',city:'Sydney',s:[
      ['Morning','Blue Mountains day trip','Big cliffs and the Three Sisters rocks. About 2 hours by train.',['Check train times']],
      ['Afternoon','Lookouts and trails','Walk a short trail to a lookout.',['*Free lookouts']],
      ['Night','Back in Sydney','Pack for Melbourne.',[]]]},
    {t:'Fly to Melbourne',city:'Melbourne',s:[
      ['Morning','Fly south','About 1.5 hours.',[]],
      ['Afternoon','Coffee and laneways','Melbourne takes coffee seriously. Walk the street art lanes like Hosier Lane.',['*Free to walk']],
      ['Night','Rooftop or a laneway bar','Hidden bars down little alleys.',[]]]},
    {t:'Great Ocean Road',city:'Melbourne',s:[
      ['Morning','Leave early','Drive or join a tour. The coastal road to the Twelve Apostles is about 4 hours each way. Tours run 11 to 13 hours.',['Long day']],
      ['Afternoon','Twelve Apostles','Giant rock towers standing in the ocean.',['*Free lookout']],
      ['Night','Back to the city','Sleep in tomorrow.',[]]]},
    {t:'Last day',city:'Melbourne',s:[
      ['Morning','Queen Victoria Market','Food stalls and hot doughnuts.',[]],
      ['Afternoon','Ride the free tram','Trams in the city center are free inside the Free Tram Zone.',['*Free Tram Zone']],
      ['Night','Fly home','Long flight home. Do it lying flat if you can.',[]]]}
  ],
  before:[
    ['Entry for Canadians','Canadians need an ETA before flying. Apply in the official AustralianETA app. It costs $20 AUD, lasts 12 months, and lets you stay up to 3 months each visit.'],
    ['Arrival card','Most people still fill in a paper card on the plane. Do not bring food you did not declare. Australia is very strict.'],
    ['Money','Tap your card almost everywhere. Tipping is not expected.'],
    ['Getting around','Sydney and Melbourne both let you tap a credit card or phone on trains and trams.'],
    ['Download these before you land','Uber or DiDi for rides. Google Maps for transit. A weather app, the sun is strong here.']
  ]
}
};
