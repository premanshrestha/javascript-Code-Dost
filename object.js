var person = {};
console.log(person);
var anotherPerson = {name:"abhisjek", age:30}
console.log(anotherPerson);
var otherPerson = {};
otherPerson.name = "abishek";  
otherPerson.age =5;
console.log(otherPerson);

//array styling accessing objects
person["age"]= 30;console.log(person);

//uses of array styling access
var property ="name"; //
console.log(person[property]); // can change the value of the property;

//nested object properties;

var pers ={
    name:"anil",
    age:30,
    address:{
        street:"street 1",
        city:"kathmandu"
    }
}
pers.cities=["kathmandu","pok"];
console.log(pers);
console.log(pers.address.street)
// inserting in nested object
person.mobile={};
person.mobile.home = 12332131;
person.mobile.office = 12332134535435431;
console.log(person);


//Oject Constructor
var pp = {name:"abhisjek",age:30};
console.log(Object.keys(pp));
console.log(Object.values(person));

