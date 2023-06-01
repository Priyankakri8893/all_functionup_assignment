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
function getSuits(cardData) {
    const suits = [];
    for(let i = 0;  i<cardData.length; i++){
        if(!suits.includes(cardData[i].suit)){
            suits.push(cardData[i].suit)
        }
    }
    return suits
}
console.log(getSuits(cardData));

// function getSuits(cardData) {
//     const suits = cardData.map(cayxrd => cayxrd.suit);
//     debugger;
//     const sui =  suits.filter((suit, index) => suits.indexOf(suit) === index);
//      return sui;
// }

// console.log(getSuits(cardData));

/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/

// function getSuits(cardData) {
//     const suits = [];
//     for (let i = 0; i < cardData.length; i++) {
//       if (!suits.includes(cardData[i].suit)) {
//         suits.push(cardData[i].suit);
//       }
//     }
//     return suits;
//   }
//   console.log(getSuits(cardData));