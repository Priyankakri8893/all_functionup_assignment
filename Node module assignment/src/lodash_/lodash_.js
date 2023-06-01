// Problem 4
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays on console.
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
// - Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
// - Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
const lodash = require('lodash')

const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
const splitArr = lodash.chunk(monthsArr, 4);

const oddArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const oddLastNinelm =lodash.tail(oddArr);

const arr1 = [5, 10, 6, 5,];
const arr2 = [9, 2, 7, 2];
const arr3 = [11, 20, 8, 11, 50];
const arr4 = [13, 14, 15, 14, 33];
const arr5 = [31, 21, 22, 33, 21, 25];
const uniqueArr = lodash.union(arr1, arr2, arr3, arr4, arr5);

const arrPair = [['horror', 'The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy', 'Pans Labyrinth']];
const keyValuePair = lodash.fromPairs(arrPair);



module.exports = {splitArr, oddLastNinelm, uniqueArr, keyValuePair};