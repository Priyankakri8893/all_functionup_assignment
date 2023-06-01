//Problem 3
    let globalVar = "I am a global variable";
    function test(){
        let localVar = "I am a local variable";
        console.log(globalVar);
        console.log(localVar);
    }
    test();

    console.log(globalVar);
    console.log(localVar);
