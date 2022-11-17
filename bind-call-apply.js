function getName(title){
    console.log(title +"" + this.name);
}
const person = {
    name: 'John',
    getName : getName
  };

  const anotherperson = {
    name: 'Mary'
}

anotherperson.getName= person.getName;

 const getNameFx = person.getName;
getNameFx('ms');

const getNameFxAnother = getNameFx.bind(anotherperson);
getNameFxAnother('ms');

getNameFx.call(anotherperson,'mx'); // directly call function without defining 

getNameFx.apply(anotherperson,['dr']); // pass array

// person.getName("mr");
// anotherperson.getName('mr');