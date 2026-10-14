/* Digital with David K Globe: travel style tiers (Budget, Comfort, Luxury).
   Same route and must-sees for everyone. Only the hotel, food and getting around change.
   Per day cost = 1 traveler, hotel + food + rides. Not flights, tours or tickets.
   Rough guide, checked Oct 2026. No em dashes. Real, named places only. */
window.DWDK_TIERS={
note:'Rough cost for 1 traveler per day: hotel, food and rides. Not flights or tickets. Check before you go.',
china:{
  cost:{budget:'400 to 600 yuan (about $85 to $130 CAD)',comfort:'1,000 to 1,600 yuan (about $215 to $340 CAD)',luxury:'3,500 to 6,000 yuan (about $745 to $1,280 CAD)'},
  sleep:{Hangzhou:'Shanghai',Suzhou:'Shanghai'},
  cities:{
    Shanghai:{
      budget:{stay:'A clean chain hotel like Ji Hotel or Hanting, right by a metro stop near People\'s Square.',eat:['Yang\'s Dumplings and a bowl of Lanzhou beef noodles.','Jia Jia Tang Bao for soup dumplings. Cheap and fast.'],move:'Metro all day. Tap in with Alipay. DiDi only late at night.'},
      comfort:{stay:'A good 4 to 5 star near The Bund, like Hotel Indigo Shanghai on the Bund.',eat:['Din Tai Fung for soup dumplings in a sit-down room.','Lost Heaven on the Bund for Yunnan food. Book a table.'],move:'Metro in the day, DiDi taxis at night.'},
      luxury:{stay:'The Peninsula Shanghai or the Fairmont Peace Hotel, right on The Bund.',eat:['Jean-Georges at Three on the Bund. Ask for a window table.','Fu He Hui, a plant based tasting menu with two Michelin stars. Book ahead.'],move:'DiDi Premier or a car from your hotel. No lines, no stairs.'}
    },
    Hangzhou:{
      budget:{eat:['Kui Yuan Guan for a big bowl of Hangzhou noodles.'],move:'Second class seat on the bullet train. Then the metro.'},
      comfort:{eat:['Lou Wai Lou on West Lake. Order the West Lake fish and Dongpo pork.'],move:'First class seat on the bullet train. DiDi around the lake.'},
      luxury:{eat:['Lunch at Jin Sha in the Four Seasons Hangzhou at West Lake.'],move:'Business class seat on the bullet train, the big lie-flat style seats. A driver waits at the station.'}
    },
    Suzhou:{
      budget:{eat:['A bowl of Suzhou noodles at Tong De Xing.'],move:'Second class seat on the bullet train. Walk or metro between gardens.'},
      comfort:{eat:['Song He Lou, an old Suzhou restaurant. Try the squirrel shaped fish.'],move:'First class seat on the bullet train. DiDi between gardens.'},
      luxury:{eat:['A long lunch at Song He Lou, then tea in a garden teahouse.'],move:'Business class seat on the bullet train, plus a private guide and driver for the gardens.'}
    }
  }
},
japan:{
  cost:{budget:'12,000 to 18,000 yen (about $110 to $165 CAD)',comfort:'30,000 to 45,000 yen (about $280 to $420 CAD)',luxury:'150,000 to 250,000 yen (about $1,400 to $2,300 CAD)'},
  sleep:{Kyoto:'Osaka'},
  cities:{
    Tokyo:{
      budget:{stay:'A Dormy Inn business hotel. Small rooms, a hot spring bath on the roof and free late night ramen.',eat:['Ichiran ramen. Order on a slip, eat in your own booth.','Fuunji in Shinjuku for thick dipping noodles.','Conveyor belt sushi at Sushiro.'],move:'Trains with Suica. Walk the rest.'},
      comfort:{stay:'Hotel Gracery Shinjuku, the one with the giant Godzilla head on top.',eat:['Gonpachi Nishi-Azabu for yakitori in a big wooden hall.','Uobei in Shibuya. Sushi comes to you on a tiny train.','A wagyu set lunch in Ginza.'],move:'Trains in the day. GO app taxis at night.'},
      luxury:{stay:'Aman Tokyo or The Peninsula Tokyo. Big rooms and city views.',eat:['A sushi counter in Ginza. Ask your hotel concierge to book it.','Narisawa, a top tasting menu in Tokyo. Book weeks ahead.','Afternoon tea at your hotel, then a cocktail bar in Ginza.'],move:'A car from your hotel, or GO app taxis. Skip the train crowds.'}
    },
    Kyoto:{
      budget:{eat:['Snacks on the walk up Fushimi Inari. Try the inari sushi.'],move:'Reserved seat on the bullet train. Local trains in Kyoto.'},
      comfort:{eat:['Vermillion Espresso Bar near the Fushimi Inari gates for a coffee break.'],move:'Reserved seat on the bullet train. Taxi from Kyoto Station.'},
      luxury:{eat:['A kaiseki lunch at Kikunoi, a famous Kyoto restaurant. Book ahead.'],move:'Green Car on the bullet train. That is first class. A private driver in Kyoto.'}
    },
    Osaka:{
      budget:{stay:'A business hotel in Namba, like Dormy Inn or APA. Close to Dotonbori.',eat:['Kushikatsu Daruma for fried food on a stick.','Takoyaki from a street stand in Dotonbori.'],move:'Metro with Suica. Walk Dotonbori.'},
      comfort:{stay:'Cross Hotel Osaka, a few minutes walk from Dotonbori.',eat:['Mizuno in Dotonbori for okonomiyaki. Expect a short line.','Sit down sushi at Kuromon Market.'],move:'Metro in the day, GO app taxis at night.'},
      luxury:{stay:'The Ritz-Carlton Osaka or Conrad Osaka. Big views over the city.',eat:['A Kobe or wagyu beef teppanyaki dinner. Your hotel can book it.','Matsusakagyu Yakiniku M for top beef you grill yourself.'],move:'Hotel car or taxis everywhere.'}
    }
  }
},
korea:{
  cost:{budget:'100,000 to 150,000 won (about $105 to $160 CAD)',comfort:'250,000 to 350,000 won (about $265 to $370 CAD)',luxury:'800,000 to 1,300,000 won (about $850 to $1,380 CAD)'},
  cities:{
    Seoul:{
      budget:{stay:'A 3 star like Ibis Styles Ambassador Seoul Myeongdong, or a clean guesthouse in Hongdae.',eat:['Gwangjang Market. Mung bean pancakes and mini gimbap.','Myeongdong street food for dinner.','A kimbap shop for a cheap fast lunch.'],move:'Subway with T-money. Walk the rest.'},
      comfort:{stay:'L7 Myeongdong by Lotte. Right in the middle of the shopping streets.',eat:['Korean BBQ at a busy local spot. Ask for pork belly and beef.','Fried chicken and beer, the famous chimaek.','A hanok cafe in Bukchon.'],move:'Subway in the day, taxis with k.ride or Uber at night.'},
      luxury:{stay:'Four Seasons Hotel Seoul or Signiel Seoul, high up in Lotte World Tower.',eat:['Mingles, one of the top tasting menus in Seoul. Book ahead.','Hanwoo, Korean beef, at a top BBQ house your hotel picks.','Drinks at a hotel rooftop bar.'],move:'A car from your hotel, or deluxe black taxis.'}
    },
    Busan:{
      budget:{stay:'Ibis Ambassador Busan Haeundae, a short walk to the beach.',eat:['Dwaeji gukbap, the Busan pork rice soup.','Street fish cakes and a grilled fish lunch at Jagalchi.'],move:'Subway with T-money. The beach train is cheap and fun.'},
      comfort:{stay:'Shilla Stay Haeundae, close to the beach.',eat:['Haeundae Amso Galbi for beef ribs. A Busan classic.','Fresh raw fish upstairs at Jagalchi Market.'],move:'Subway plus taxis.'},
      luxury:{stay:'Park Hyatt Busan or Signiel Busan. Ocean views from bed.',eat:['A beef rib dinner at Haeundae Amso Galbi, then drinks with a sea view.','A private table for raw fish at Jagalchi.'],move:'A car from your hotel.'}
    }
  }
},
thailand:{
  cost:{budget:'1,500 to 2,500 baht (about $65 to $105 CAD)',comfort:'4,000 to 6,500 baht (about $170 to $275 CAD)',luxury:'20,000 to 40,000 baht (about $850 to $1,700 CAD)'},
  cities:{
    Bangkok:{
      budget:{stay:'Lub d Bangkok Siam. A clean hostel with private rooms, right by the train.',eat:['Pad thai at Thipsamai.','Boat noodles near Victory Monument. Tiny bowls, order a few.','Street food in Chinatown on Yaowarat Road.'],move:'BTS Skytrain and MRT. Grab when it rains.'},
      comfort:{stay:'Hotel Indigo Bangkok Wireless Road. Rooftop pool, near the Skytrain.',eat:['Supanniga Eating Room for home style Thai food.','Chinatown street food, then a rooftop drink.','A long Thai massage, then dinner by the river.'],move:'Grab cars and the river boat.'},
      luxury:{stay:'Mandarin Oriental Bangkok, on the river. The hotel boat takes you across.',eat:['Sorn, a top Southern Thai tasting menu. Book weeks ahead.','Dinner on the river at your hotel.','Sky high drinks at a rooftop bar.'],move:'Hotel boat and a private driver.'}
    },
    Phuket:{
      budget:{stay:'Lub d Phuket Patong. Pool, private rooms, close to the beach.',eat:['Phuket Weekend Market for cheap street food.','Old Town noodle shops at lunch.','Beach shack fried rice and a fresh coconut.'],move:'Bolt or Grab. Shared boats for island trips.'},
      comfort:{stay:'Katathani Phuket Beach Resort on a quiet beach.',eat:['One Chun in Phuket Old Town for local Phuket dishes.','Fresh seafood on the beach.','Sunset drinks at a beach bar.'],move:'Grab cars. A small group speedboat for Phi Phi.'},
      luxury:{stay:'Trisara or Amanpuri. Private villas with your own pool.',eat:['PRU at Trisara, a Michelin star farm to table dinner.','A private dinner on the beach. Your resort sets it up.','Long lunch at a beach club.'],move:'A private driver and a private speedboat for Phi Phi.'}
    }
  }
},
vietnam:{
  cost:{budget:'1,000,000 to 1,500,000 dong (about $55 to $80 CAD)',comfort:'3,000,000 to 4,500,000 dong (about $160 to $240 CAD)',luxury:'12,000,000 to 20,000,000 dong (about $640 to $1,060 CAD)'},
  cities:{
    'Ho Chi Minh City':{
      budget:{stay:'A clean 3 star or hostel near Ben Thanh Market in District 1.',eat:['Banh Mi Huynh Hoa. Big, packed sandwiches.','Pho Hoa Pasteur for a classic bowl.','Broken rice with grilled pork at a street stall.'],move:'Grab bikes. Fast and cheap.'},
      comfort:{stay:'Liberty Central Saigon Riverside. Rooftop pool with river views.',eat:['Cuc Gach Quan for home style Vietnamese food.','Secret Garden, a rooftop family style spot.','Coffee at The Workshop.'],move:'Grab cars.'},
      luxury:{stay:'Park Hyatt Saigon or The Reverie Saigon.',eat:['Anan Saigon for fancy Vietnamese food. It has a Michelin star.','Dinner at your hotel, then a rooftop bar.','A private street food tour by car.'],move:'Hotel car or Grab premium.'}
    },
    'Da Nang':{
      budget:{stay:'A 3 star near My Khe Beach. Lots to pick from.',eat:['Mi Quang Ba Mua for Da Nang noodles.','Banh xeo, crispy pancakes, at a street spot.'],move:'Grab bikes. Tour bus for Ba Na Hills.'},
      comfort:{stay:'Novotel Danang Premier Han River, right by the bridges.',eat:['Seafood at Be Man on the beach. Pick it from the tank.','Mi Quang Ba Mua for lunch.'],move:'Grab cars.'},
      luxury:{stay:'InterContinental Danang Sun Peninsula Resort. Cable car down to the beach.',eat:['La Maison 1888 at the InterContinental.','A private seafood dinner on the beach.'],move:'Private driver for Ba Na Hills.'}
    },
    'Hoi An':{
      budget:{stay:'A family homestay or small guesthouse near the Old Town.',eat:['Banh Mi Phuong, one of the most famous banh mi in Vietnam.','Cao lau noodles at a street stall.'],move:'Rent a bike or walk. Old Town is small.'},
      comfort:{stay:'A 4 star near the Old Town, like Anantara Hoi An Resort on the river.',eat:['Morning Glory for Hoi An dishes.','A cooking class with a market walk.'],move:'Walk the Old Town. Grab to the beach.'},
      luxury:{stay:'Four Seasons Resort The Nam Hai. Villas on the beach.',eat:['A private cooking class with a chef.','Dinner by the river in the Old Town.'],move:'Resort car to the Old Town. Yaly Couture for an extra fitting on your suit.'}
    }
  }
},
dubai:{
  cost:{budget:'400 to 600 AED (about $150 to $225 CAD)',comfort:'900 to 1,400 AED (about $340 to $525 CAD)',luxury:'3,500 to 6,000 AED (about $1,300 to $2,250 CAD)'},
  sleep:{'Abu Dhabi':'Dubai'},
  cities:{
    Dubai:{
      budget:{stay:'Rove Downtown. Clean, fun and close to the Dubai Mall.',eat:['Ravi Restaurant in Satwa for Pakistani food. Cheap and famous.','Al Ustad Special Kabab in Bur Dubai.','Shawarma from a street window.'],move:'Dubai Metro with a Nol card. Taxis for short hops.'},
      comfort:{stay:'Vida Downtown. Walk to the Burj Khalifa.',eat:['Arabian Tea House in Al Fahidi for breakfast.','Dinner at Dubai Mall with the fountain show.','A shisha cafe in the evening.'],move:'Careem or Uber, plus the Metro.'},
      luxury:{stay:'Burj Al Arab, Armani Hotel Dubai inside the Burj Khalifa, or Atlantis The Royal.',eat:['At.mosphere, high up in the Burj Khalifa.','Ossiano, the underwater restaurant at Atlantis.','A beach club lunch.'],move:'A private driver or a car from your hotel.'}
    },
    'Abu Dhabi':{
      budget:{eat:['Lunch at a cafe near the mosque.'],move:'Intercity bus from Dubai. Cheap but slow.'},
      comfort:{eat:['Lunch in the Louvre Abu Dhabi cafe.'],move:'Careem or Uber both ways.'},
      luxury:{eat:['Gold flake cappuccino at Emirates Palace Mandarin Oriental.'],move:'A private driver for the whole day.'}
    }
  }
},
canada:{
  cost:{budget:'$120 to $180 CAD',comfort:'$300 to $450 CAD',luxury:'$900 to $1,500 CAD'},
  sleep:{'Niagara Falls':'Toronto'},
  cities:{
    Toronto:{
      budget:{stay:'Planet Traveler, a hostel in Kensington Market with a rooftop patio.',eat:['Peameal bacon sandwich at Carousel Bakery in St. Lawrence Market.','Cheap eats in Kensington Market.','Chinatown dumplings.'],move:'TTC subway. Tap your card.'},
      comfort:{stay:'Chelsea Hotel Toronto, close to everything downtown.',eat:['Pai Northern Thai Kitchen. Expect a line.','Brunch in the Distillery District.','A game day bite near the arena.'],move:'TTC plus Uber at night.'},
      luxury:{stay:'Four Seasons Hotel Toronto in Yorkville, or Shangri-La Toronto.',eat:['Alo, one of the best tasting menus in Canada. Book far ahead.','Steak dinner in Yorkville.','Drinks at a rooftop bar.'],move:'Uber Black or a hotel car.'}
    },
    'Niagara Falls':{
      budget:{eat:['Pack snacks. Food near the falls costs more.'],move:'GO Train there and back.'},
      comfort:{eat:['Table Rock House Restaurant, right next to the falls.'],move:'Rent a car for the day.'},
      luxury:{eat:['Skylon Tower Revolving Dining Room, then wine in Niagara-on-the-Lake.'],move:'Private driver and a winery stop.'}
    },
    Montreal:{
      budget:{stay:'Auberge Saintlo Montreal, a hostel downtown with private rooms.',eat:['St-Viateur and Fairmount bagels.','La Banquise for poutine, open 24 hours.','Schwartz\'s for smoked meat.'],move:'Metro with an OPUS card.'},
      comfort:{stay:'Le Petit Hotel in Old Montreal. Stone walls, cozy rooms.',eat:['Schwartz\'s for smoked meat, then dessert on the Plateau.','L\'Express for a classic French bistro dinner.','Brunch on the Plateau.'],move:'Metro plus Uber.'},
      luxury:{stay:'Ritz-Carlton Montreal or Four Seasons Hotel Montreal.',eat:['Toqué!, one of the most famous restaurants in Montreal.','Joe Beef for a big night out.','Champagne brunch at your hotel.'],move:'A car from your hotel.'}
    }
  }
},
usa:{
  cost:{budget:'US$150 to $220 (about $215 to $315 CAD)',comfort:'US$350 to $500 (about $500 to $710 CAD)',luxury:'US$1,200 to $2,000 (about $1,710 to $2,850 CAD)'},
  cities:{
    'New York':{
      budget:{stay:'HI New York City hostel, or Pod Times Square for a tiny private room.',eat:['A slice at Joe\'s Pizza.','A bagel with cream cheese from a corner deli.','Halal cart chicken over rice.'],move:'Subway. Tap your card or phone with OMNY.'},
      comfort:{stay:'citizenM New York Times Square. Smart rooms and a rooftop bar.',eat:['Katz\'s Delicatessen for pastrami.','Pizza in Brooklyn.','Dinner in the West Village.'],move:'Subway in the day, Uber at night.'},
      luxury:{stay:'The Peninsula New York, The Mark, or Aman New York.',eat:['Le Bernardin, a famous seafood tasting menu.','Carbone for spicy rigatoni. Very hard to book.','Drinks at a hotel bar uptown.'],move:'Uber Black or a car service.'}
    },
    Miami:{
      budget:{stay:'A simple budget hotel in Miami Beach, a few blocks from the sand. Pick one near Collins Avenue.',eat:['Versailles for Cuban food and a cafecito.','La Sandwicherie in South Beach.','A Cuban sandwich at a ventanita window.'],move:'Free Miami Beach Trolley and the free Metromover downtown.'},
      comfort:{stay:'Kimpton EPIC Hotel downtown. Big pool, water views.',eat:['Joe\'s Stone Crab. Stone crab season runs mid October to May.','Versailles for Cuban food.','Brunch in Wynwood.'],move:'Uber.'},
      luxury:{stay:'Faena Hotel Miami Beach or The Setai.',eat:['Carbone Miami.','Dinner on Ocean Drive, then a club night.','A long lunch at a beach club.'],move:'Uber Black, or rent a convertible.'}
    }
  }
},
australia:{
  cost:{budget:'A$120 to $180 (about $120 to $180 CAD)',comfort:'A$300 to $450 (about $295 to $445 CAD)',luxury:'A$1,000 to $1,800 (about $990 to $1,790 CAD)'},
  cities:{
    Sydney:{
      budget:{stay:'Wake Up! Sydney, a big hostel by Central Station with private rooms.',eat:['A meat pie from Harry\'s Cafe de Wheels.','Chat Thai in Haymarket.','Fish and chips at the beach.'],move:'Trains, buses and ferries. Tap your card on the Opal reader.'},
      comfort:{stay:'QT Sydney, a fun hotel in the middle of the city.',eat:['Mr. Wong for dim sum and Cantonese food.','Brunch in Bondi.','Fish and chips in Manly.'],move:'Opal tap for trains and ferries. Uber at night.'},
      luxury:{stay:'Park Hyatt Sydney, with the Opera House out your window, or Capella Sydney.',eat:['Quay, a top tasting menu with harbour views.','Bennelong, inside the Opera House.','Drinks at a harbour rooftop bar.'],move:'Private car, or a water taxi across the harbour.'}
    },
    Melbourne:{
      budget:{stay:'Melbourne Central YHA, a hostel with private rooms.',eat:['Queen Victoria Market hot jam donuts.','Pack a lunch for the long Great Ocean Road bus tour.','Pellegrini\'s Espresso Bar for pasta.'],move:'Free tram zone in the city. Tap your card on the trams.'},
      comfort:{stay:'QT Melbourne, close to the laneways.',eat:['Chin Chin for spicy Thai food.','A Great Ocean Road small group tour with lunch stops.','Coffee in the laneways.'],move:'Trams plus Uber.'},
      luxury:{stay:'The Langham Melbourne or Park Hyatt Melbourne.',eat:['Vue de monde, high up with city views.','A private Great Ocean Road tour, plus a helicopter ride over the Twelve Apostles.','Attica, one of the most famous restaurants in Australia.'],move:'Private driver.'}
    }
  }
}
};
