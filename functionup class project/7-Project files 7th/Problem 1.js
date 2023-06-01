// Problem 1
// if the number is even and less than 15, print a 
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c 
// if the number is odd and more than 10, print d 
// we need to solve this using two methods using nested if else , using logical operators


//using logincal operators

let x = -14;
if(x % 2 == 0 && x<15){
    console.log("a");
}else if(x % 2 == 0 && x>15){
    console.log("b");
}else if(x % 2 != 0 && x<10){
    console.log('c');
}else if(x % 2 != 0 && x>10){
    console.log("d");
}

//using nested if else

// let x = 12;
// if(x % 2 == 0){
//     if(x<15){
//         console.log("a");
//     }
//     else{
//         console.log("b");
//     }
// }
// else{
//     if(x<10){
//         console.log("c");
//     }
//     else{
//         console.log("d");
//     }
// }

