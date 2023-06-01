// write your own find and findIndex function
// (Hint: using for loop and if else)

const numbers = [1, 5, 3, 7, 2];

// find function
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback = arr[i]) {
      return arr[i];
    }
  }
  return undefined;
}
const foundNumber = myFind(numbers, (num) => num > 3);
console.log(foundNumber); 

// findIndex function
function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
}
const foundIndex = myFindIndex(numbers, (num) => num === 7);
console.log(foundIndex);
