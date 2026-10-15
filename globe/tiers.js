/* Digital with David K Globe: Economy picks for the free countries (China here, Japan in japan.js).
   Premium and First Class picks are locked in premium-plans.enc / vip-plans.enc.
   Edit those in the private folder, then run: python3 tools/add-access.py --build --private PRIVATE. No em dashes. */
window.DWDK_TIERS={
 "note": "Prices checked Oct 2026 for one traveler. Check before you book.",
 "china": {
  "cost": {
   "budget": "About 770 yuan (US$115) a day"
  },
  "sleep": {
   "Hangzhou": "Shanghai",
   "Suzhou": "Shanghai"
  },
  "cities": {
   "Shanghai": {
    "budget": {
     "stay": "A clean chain hotel like Ji Hotel or Hanting, right by a metro stop near People's Square.",
     "eat": [
      "Yang's Dumplings and a bowl of Lanzhou beef noodles.",
      "Jia Jia Tang Bao for soup dumplings. Cheap and fast."
     ],
     "move": "Metro all day. Tap in with Alipay. DiDi only late at night.",
     "stayP": {
      "p": "Ji Hotel Shanghai Nanjing Road People's Square: about 500 yuan (US$74) a night",
      "e": false
     },
     "eatP": [
      {
       "p": "About 35 to 40 yuan (US$5 to $6) per person for buns and noodles",
       "e": true
      },
      {
       "p": "About 15 to 28 yuan (US$2 to $4) a basket, 30 to 40 yuan (US$5) a meal",
       "e": false
      }
     ],
     "moveP": {
      "p": "Metro day: about 20 yuan (US$3). Late DiDi: about 30 to 50 yuan (US$5 to $7)",
      "e": true
     },
     "arriveP": {
      "p": "Maglev plus Metro Line 2: about 55 yuan (US$8) per person",
      "e": false
     }
    }
   },
   "Hangzhou": {
    "budget": {
     "eat": [
      "Kui Yuan Guan for a big bowl of Hangzhou noodles."
     ],
     "move": "Second class seat on the bullet train. Then the metro.",
     "eatP": [
      {
       "p": "About 20 to 45 yuan (US$3 to $7) per person",
       "e": false
      }
     ],
     "moveP": {
      "p": "Second class round trip plus metro: about 155 yuan (US$23)",
      "e": false
     }
    }
   },
   "Suzhou": {
    "budget": {
     "eat": [
      "A bowl of Suzhou noodles at Tong De Xing."
     ],
     "move": "Second class seat on the bullet train. Walk or metro between gardens.",
     "eatP": [
      {
       "p": "About 15 to 35 yuan (US$2 to $5) per person",
       "e": false
      }
     ],
     "moveP": {
      "p": "Second class round trip plus metro: about 85 yuan (US$13)",
      "e": false
     }
    }
   }
  },
  "daily": {
   "budget": [
    "About 610 yuan (US$91)",
    "About 630 yuan (US$94)",
    "About 1,020 yuan (US$152)",
    "About 760 yuan (US$114)",
    "About 710 yuan (US$106)",
    "About 710 yuan (US$106)",
    "About 970 yuan (US$145)"
   ]
  }
 }
};
