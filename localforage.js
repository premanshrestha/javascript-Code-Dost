//localforage returns promises
// it can take data backup at localstorage,indexDB or Web SQl in browser
localforage.config({
    driver: localforage.LOCALSTORAGE,

})
localforage.setItem('name','codermate');
localforage.getItem('name').then((data)=>{
console.log(data);
})

