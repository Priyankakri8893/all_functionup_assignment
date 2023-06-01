const array = [23 , 45, 467, 789, 34, 989, 56]

    // problem => return an array such that numbers at odd idex are multiplied by 2
    // and numbers at even index are multiplied by 10

 
const result = [];

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    result.push(array[i] * 10);
  } else {
    result.push(array[i] * 2);
  }
}

console.log(result);