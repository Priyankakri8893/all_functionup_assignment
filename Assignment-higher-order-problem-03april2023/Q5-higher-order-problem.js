/**
  *  Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
 const arrays = [[1, 2, 3], [4, 5], [6]];
 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */

 const arrays = [[1, 2, 3], [4, 5], [6]];

const flattenedArray = arrays.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(flattenedArray);
