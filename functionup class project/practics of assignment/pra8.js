// Write Javascript code to print whether given no is palindrome or not

// Palindromic numbers remain the same when the digits are reversed.. 

// Create a function which accepts a number and prints whether it is palindrome or not:

// Input and Output:

// isPalindrome(1441)
// true

// isPalindrome
// false


// function isPalindrome(num) {
//     const strNum = String(num);
//     const reversedStr = strNum.split('').reverse().join('');
//     return strNum === reversedStr;
//   }
//   console.log(isPalindrome(1441)); // true
//   console.log(isPalindrome(12345)); // false
    

  function isPalindrome(num){
    const strNum = String(num);
    const reve = strNum.split('').reverse().join('');
    return strNum === reve;
  }
  console.log(isPalindrome(1441));