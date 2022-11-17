console.log("START");
const yourname = 'abc';
function getName(name) {
    name = this.name;
    return name;
}
debugger; //directly put debugger
person ={
    name: 'ram',
    getName: getName
   
}
console.log(getName(person.getName(yourname)));