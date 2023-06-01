/**
 * explain the difference between primitive and non primitive data types when we use the following operator
 * 1. assignment operator
 * 2. equality operator
 *
 *
 */

// 1:=> Assignment operator:
// When assigning a primitive value to a variable, the value is copied to the new variable.
// Any subsequent changes to either the original or copied value will not affect the other.
// For example:

let x = 8;
let y = x;
x = 10;
console.log(x);
console.log(y);

// When assigning a non-primitive value (such as an Object or array) to a variable, the reference
// to the value is copied to the new variable.This means that any changes made to the value using
// either variable will affect both variables, because they both reference the same value.
// For example:

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1);
console.log(arr2);

// 2:=> Equality operator
// When comparing primitive values using the equality operator (==), javascript check whether 
// the values are equal in value and data type. If the values and types are the same, 
// it return true. If they are different, it returen false.
// For example:

console.log(5 == 5);
console.log(5 == "5");
console.log(5 == 6);

// When comparing non-primitive values using the equality operator(==), javascript checks 
// whether the reference to the values are the same. In other words, it checks wether the 
// variables reference the same object in memory.
// For example:

let obj1 = { name: 'Priyanka'};
let obj2 = { name: 'Priyanka'};
console.log(obj1 == obj2);