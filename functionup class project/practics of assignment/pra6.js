//Str = ' hesitate' return no of vowels in a string

const str = ' hesitate';
let count = 0;

for (let i = 0; i < str.length; i++) {
  const char = str[i].toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    count++;
  }
}

console.log(count); // outputs: 3


//Write Javascript code to calculate the number of visiting birds in a
// specific week
// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number.
// It returns the total number of birds that you counted in that specific week. You can assume weeks
// are always tracked completely.
// Input and Output:
// var birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
// birdsInWeek(birdsPerDay, 2)
// 12
function birdsInWeek(birdsPerDay, number_of_week) {
  const startIndex = (number_of_week - 1) * 7; 
  const endIndex = startIndex + 6;
  let totalBirdsInWeek = 0;
    for (let i = startIndex; i <= endIndex; i++) {
    totalBirdsInWeek += birdsPerDay[i];
  }
  return totalBirdsInWeek;
}

var birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
var number_of_week = 2;
var totalBirds = birdsInWeek(birdsPerDay, number_of_week);
console.log(totalBirds);
