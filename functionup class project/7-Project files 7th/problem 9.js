   let a = 50;
    if (a >= 100 && a <= 200){
        console.log("The number is between 100 and 200");
    }else{
        console.log("The number is not between 100 and 200")
    }

    let b = 450
    if ((b >= 100 && b <= 200)||(b >= 400 && b<= 500)){
        console.log("The number is between 100 and 200 or 400 and 500");
    }else{
        console.log("The number is not between 100 and 200 or 400 and 500")
    }

    console.log("Edge cases");

    let x = "hello"
    if(typeof x != "number"){
        console.log("This is not a number");
    }else if(typeof x == "undefined"){
        console.log("The variable is not defined.")
    }