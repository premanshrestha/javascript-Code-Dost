//String Concatenation
var country  = "Nepal";
var capital = "kathmandu";
var sentence = capital + " is capital of" + country;
console.log(sentence);

//Dynamic type conversion
var a = 5;
var b = 4;
var sum = a + b;    
var c = "hello world";
var add = a + c ;
var x = 3;
var y = "1" // string 
var sumXY = x*y; // change automatic y to number in javascript 
console.log(sumXY)

// Escape Character \
//I need to print "Master Blasters" 
var sentence = "He us called \"Master blaster\"";
console.log(sentence)

//String length
var name = "Youstart";
console.log(name.length)
console.log(name[name.length-1])

//IndexOf
var word = "hello world";
console.log(word.indexOf("lo"));

//charAt
console.log(word.charAt(0))

//split 
var word  = "Youstart is a good plateform";
var out = word.split(" ");
console.log(out);
console.log(out.length-1);

//replace
var nam = "Youstart";
var newNam = nam.replace("t","z");
console.log(newNam);

//function chaining
var reversed= nam.split("").reverse().join('');
console.log(reversed);
