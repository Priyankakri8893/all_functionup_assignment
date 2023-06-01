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
    return cardData.reduce((count, card) => {
        if (count[card.suit]) {
            count[card.suit]++;
        } else {
            count[card.suit] = 1;
        }
        return count;
    }, {});
}

console.log(getSuitCount(cardData));

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/