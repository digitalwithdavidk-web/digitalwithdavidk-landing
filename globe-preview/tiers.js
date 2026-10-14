/* Digital with David K Globe: Economy picks for the free countries (China here, Japan in japan.js).
   Premium and First Class picks are locked in premium-plans.enc / vip-plans.enc.
   Edit those in the private folder, then run: python3 tools/add-access.py --build --private PRIVATE. No em dashes. */
window.DWDK_TIERS={
 "note": "Rough cost for 1 traveler per day: hotel, food and rides. Not flights or tickets. Check before you go.",
 "china": {
  "cost": {
   "budget": "400 to 600 yuan (about $85 to $130 CAD)"
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
     "move": "Metro all day. Tap in with Alipay. DiDi only late at night."
    }
   },
   "Hangzhou": {
    "budget": {
     "eat": [
      "Kui Yuan Guan for a big bowl of Hangzhou noodles."
     ],
     "move": "Second class seat on the bullet train. Then the metro."
    }
   },
   "Suzhou": {
    "budget": {
     "eat": [
      "A bowl of Suzhou noodles at Tong De Xing."
     ],
     "move": "Second class seat on the bullet train. Walk or metro between gardens."
    }
   }
  }
 }
};
