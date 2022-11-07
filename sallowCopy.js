var person = {name:"preman",age:30};
var p1 = person;
p1.name = "rajiv"; 
//console.log(person);
//p1 and person point same object 
//change in p1 refers to change in person too

//SallowCopy
p2 = Object.assign({},person);
p3 = Object.assign({city:'kathmandu'},person); //add new field at first of objects
//console.log(p2);
p2.name = "y";
console.log(p1, person,p2)
console.log(p3)
