//Callback function
function sum(a,b){
    return a + b;
}

function diff(a,b){
    return a-b; 
}

function calc (fx,a,b){ // passing fx as function
    return fx(a, b);
    }
    console.log(calc(sum,4,5));
    console.log(calc(diff,4,5));