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

// =========================================== 1 ==================================================== //


// function findCard(value, suit) {
//     for(i = 0; i < cardData.length; i++){
//         if(cardData[i].value === value && cardData[i].suit === suit){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(findCard(5, 'heart'));
// console.log(findCard(10, 'club'));

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


// function getSuits(cardData) { 
//     const suits = [];
//     for(let i = 0; i < cardData.length; i++){
//         if(!suits.includes(cardData[i].suit)){
//             suits.push(cardData[i].suit);
//         }
//     }   
//     return suits; 
// }
// console.log(getSuits(cardData));
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


// function getSuitCount(cardData) {
//     const suits = {};
//     for(let i = 0; i <cardData.length; i++){
//         let x = cardData[i].suit;
//         if(suits[x]){
//             suits[x] += 1;
//         }else{
//             suits[x] = 1;
//         }
//     }
//     return suits;
// }
// console.log(getSuitCount(cardData));
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    const results = {};
    for(let i = 0; i<cardData.length; i++){
        const suits = cardData[i].suit;
        const values = cardData[i].value;
        if(results[suits]){
            results[suits].push(values);
        }else{
            results[suits] = [values];
        }
    }
    return results;
}
console.log(getSuitValues(cardData)); 

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/




