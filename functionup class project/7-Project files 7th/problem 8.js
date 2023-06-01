    let a1 = 100;
    let a2 = 30;
    function test(a,b){
    if(typeof a != "number" || typeof b != "number"){
        document.write("Both variables must be number");
        return false;
    }
    if(a1 == 50 || a2 == 50 || a1+a2 == 50){
        return true;
    }else{
        return false;
    }
}
console.log(test(a1,a2));