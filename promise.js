console.log("START");
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("1");
    },2000)
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("13");
    },2000)
});

p1.then((data)=>{
    console.log("then1",data);
   //Note: //return "2";  //even return value its treats as a promise
   return p2;

}).then(data =>{
    console.log(('then2'),data);
})

console.log('End'); 