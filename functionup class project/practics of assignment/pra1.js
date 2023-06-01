
// Write a Javascript code to split a number into its digits
// Create a function which accepts a number and prints the output like the following:
// Input and Output:
// splitNumber(10)
// [1, 0]

// splitNumber(931)
// [9, 3, 1]
// splitNumber(19375)
// [1, 9, 3, 7, 5]

// function splitNumber(number) {
//     const digits = [];
  
//     while (number > 0) {
//       const digit = number % 10;
//       digits.unshift(digit);
//       number = Math.floor(number / 10);
//     }
  
//     return digits;
//   }
  

function splitNumber(num) {
    const strNum = num.toString();
    const arr = [...strNum];
    const splitno =arr.map(stri => parseInt(stri))
    return splitno;
  }
  
  console.log(splitNumber(19375));

