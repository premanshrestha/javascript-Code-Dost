localStorage.setItem('name','coderdost');
localStorage.setItem('age','11');
localStorage.setItem('class','nodejs');

const value = localStorage.getItem('name');
console.log(value);

sessionStorage.setItem('name',"data");
const s = sessionStorage.getItem('name')
console.log(s);