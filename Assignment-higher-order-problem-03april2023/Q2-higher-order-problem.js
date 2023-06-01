//const practiceData = [[14,21,23,64], [33,46,51,65]]
/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 * 
 * 
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */

//Using a for loop

// const practiceData = [[14,21,23,64], [33,46,51,65]];
// const incrementbyone = [];
// for(let i=0; i<practiceData.length; i++){
// const subArr = practiceData[i];
// const incrementsubArr = [];
// for(j=0; j<practiceData[i].length; j++){
//     const num = subArr[j];
//     incrementsubArr.push(num + 1);
// }
// incrementbyone.push(incrementsubArr);
// }
// console.log(incrementbyone);

//Using a higher order function

// const practiceData = [[14,21,23,64], [33,46,51,65]];
// const incrementbyone = practiceData.map(subArr => subArr.map(num => num +1));
// console.log(incrementbyone);

//Using a higher order function

// const practiceData = [[14,21,23,64], [33,46,51,65]];
// const evenNo = practiceData.map(subArr => subArr.filter(num => num % 2 == 0));
// console.log(evenNo);

//Using a for loop

const practiceData = [[14,21,23,64], [33,46,51,65]];
const evenNo = [];
for(let i = 0; i<practiceData.length; i++){
    const subArr = practiceData[i];
    const evenSubarr = [];
    for(let j = 0; j < subArr.length; j++){
        if(subArr[j] % 2 == 0){
            evenSubarr.push(subArr[j]);
        }
    }
    evenNo.push(evenSubarr);
}
console.log(evenNo);
