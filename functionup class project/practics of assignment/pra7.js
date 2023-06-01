// Write a JavaScript program to return object containing max, min, sum of the given array

// Create a function which accepts a array with number and prints the output like the following:

// Input and Output:

// arrayStats([10, 20, 30])
// stats: { min: 10, max: 30, sum: 60 }

// arrayStats([55, 35, 65, 75])
// stats: { min: 35, max: 75, sum: 230 }

// arrayStats([12, 100, 15, 280])
// stats: { min: 12, max: 280, sum: 407 }

function arrayStats(arr) {
    let stats = {
      min: arr[0],
      max: arr[0],
      sum: 0
    };
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < stats.min) {
        stats.min = arr[i];
      }
      if (arr[i] > stats.max) {
        stats.max = arr[i];
      }
      stats.sum += arr[i];
    }
    return stats;
    //console.log(`stats: { min: ${stats.min}, max: ${stats.max}, sum: ${stats.sum} }`);
  }

  console.log(arrayStats([10, 20, 30])); // stats: { min: 10, max: 30, sum: 60 }
//arrayStats([55, 35, 65, 75]); // stats: { min: 35, max: 75, sum: 230 }
//arrayStats([12, 100, 15, 280]); // stats: { min: 12, max: 280, sum: 407 }
