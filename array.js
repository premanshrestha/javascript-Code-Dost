//Basic
var cities = ["kathmandu","pokhara","new york"]
console.log(cities[1]);
var randomArray = [1,2,"abc",1.5,true];
console.log(randomArray[4]);
console.log(cities,cities.length);
cities[3] = "paris";
console.log(cities);
// add more arrays extra
cities[10] = "Birjang";
console.log(cities);

//Push function (return value) 
//Add
//push end of the array
cities.push("mumbai")
console.log(cities);
var output = cities.push("ny"); //return value is length of array
console.log(output);


//Pop dunction (return value) 
//remove 
cities.pop();
console.log(cities);

//Note : Both pop and push change mutated origina array

//Splice funcition
cities.splice(3,6); // delete from 3 index 6 values
var returnedSpleceValues = cities.splice(3,1);
console.log(returnedSpleceValues); // return array of deleted value
console.log(cities);

var charec = ["a", "b", "c", "d", "e", "f"];
charec.splice(1,1,'d'); // delete b and replce by d 
console.log(charec);

//slice
// return value from give index(first argu) to last index (Second argu)
var outputOfSlice = cities.slice(1,5) // non-mutator means donnot change arrays
console.log(outputOfSlice);



 //reverse
 //join
 //indexof
 //concate: anmal.concat(bird)


 //Nested arrays
 var birds = ["parrot","sparrow",["a", "b","c"]];
 console.log(birds);
 console.log(birds[2][0]);