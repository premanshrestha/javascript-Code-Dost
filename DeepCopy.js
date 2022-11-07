//Deep copy 
//nested objects coping

var person = {
    name:"preman",
    age:30,
city:{
    name:"kathmandu",
    houseNo:25
}
};
var p1 = JSON.stringify(person);
console.log(p1);
p1 = JSON.parse(p1);
console.log(p1);
p1.city.name = "ny";
console.log(p1,person);


