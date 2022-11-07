
// hoisting is calling function before it define.
//works in normal function
console.log(rum(2,3,4))
console.log(sum(1,1,1))
function rum(a,b,c){
    return a + b + c;
}

//Variable type function
var sum = function (a,b,c) {//errors 
    return a + b + c;
}