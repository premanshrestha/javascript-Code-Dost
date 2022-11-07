setTimeout(function () {   
    console.log(hellow)
},2000)
console.log('end');
var number = 0 ;
var id = setInterval(function(){
    number ++;
    console.log(number);
    clearInterval(id);
    
},2000);
console.log(id);