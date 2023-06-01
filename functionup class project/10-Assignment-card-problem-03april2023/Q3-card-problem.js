const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];
function getSuitCount(cardData) {
    const suits ={};
    for(let i= 0; i<cardData.length; i++){
        if(suits[cardData[i].suit]){
            suits[cardData[i].suit] += 1
        }else{
            suits[cardData[i].suit] = 1;
        }
    }
    return suits
}
console.log(getSuitCount(cardData));
// function getSuitCount(cardData) {
//     debugger;
//     return cardData.reduce((count, card) => {
//         if (count[card.suit]) {
//             count[card.suit]++;
//         } else {
//             count[card.suit] = 1;
//         }
//         return count;
//     }, {});
// }

// console.log(getSuitCount(cardData));

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

function getSuitCount(cardData) {
    const suitCount = {};
    for (let i = 0; i < cardData.length; i++) {
      const currentSuit = cardData[i].suit;
      if (suitCount[currentSuit]) {
        suitCount[currentSuit] += 1;
      } else {
        suitCount[currentSuit] = 1;
      }
    }
    return suitCount;
  }
  console.log(getSuitCount(cardData));