// function filterOddNumbers(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//const evenNumbers = [1, 2, 3, 4, 5].push(6).filter(filterOddNumbers);

// Q1. without actually running this code, you need to answer whether this code will run or not along with the reason

//This code will not run as expected. This is because the "push()" method returns the new length of the array, not the modified array. Therefore, when we try to call "filter()" on the result of 'push()', we will get an error because "filter()" is not a method of the number data type.

// Q2. now run the above code and see the result/error. Analyze the difference bw your answer before and after running the code 

// TypeError: [1,2,3,4,5].push(...).filter is not a function

// Q3. correct the code so that method chain starts working

const num = [1, 2, 3, 4, 5];
function filterOddNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(filterOddNumbers(2));
num.push(6);
const evenNumbers = num.filter(num => num % 2 === 0);
console.log(evenNumbers);

