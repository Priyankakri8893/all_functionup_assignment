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

// function getSuitValues(cardData) {
//     return cardData.reduce((values, card) => {
//         if (values[card.suit]) {
//             values[card.suit].push(card.value);
//         } else {
//             values[card.suit] = [card.value];
//         }
//         return values;
//     }, {});
// }

// console.log(getSuitValues(cardData)); 


// function getSuitValues(cardData) {
//     const results = {};
//     for(let i = 0; i<cardData.length; i++){
//         const suits = cardData[i].suit;
//         const values = cardData[i].value;
//         if(results[suits]){
//             results[suits].push(values);
//         }else{
//             results[suits] = values
//         }
//     }
//     return results;
// }
// console.log(getSuitValues(cardData)); 

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/

function getSuitValues(cardData) {
    const suits = {};
    for (let i = 0; i < cardData.length; i++) {
      const sui = cardData[i].suit;
      const valu = cardData[i].value;
      if (suits[sui]) {
        suits[sui].push(valu);
      } else {
        suits[sui] = [valu];
      }
    }
    return suits;
  }
  console.log(getSuitValues(cardData));