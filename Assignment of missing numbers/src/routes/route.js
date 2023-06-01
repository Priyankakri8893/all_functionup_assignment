const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber;

  // Calculate the sum of all the numbers in the array
  let sum = arr.reduce((a, b) => a + b, 0);

  // Calculate the expected sum of all numbers from 1 to n
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;

  // Subtract the sum of the array from the expected sum to get the missing number
  missingNumber = expectedSum - sum;
  console.log(missingNumber);

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});


router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let missingNumber;

    // Calculate the sum of all the numbers in the array
  let sum = arr.reduce((a, b) => a + b, 0);

  // Calculate the expected sum of all numbers from 1 to n
  let n = arr.length + 1;
  let expectedSum = (n * (arr[0]+arr[arr.length-1])) / 2;
    
  // Subtract the sum of the array from the expected sum to get the missing number
  missingNumber = expectedSum - sum;
  console.log(missingNumber);


    ///LOGIC WILL GO HERE 

    res.send(  { data: missingNumber  }  );
});

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    res.send('Hello there, welcome to this application!')
});

module.exports = router;