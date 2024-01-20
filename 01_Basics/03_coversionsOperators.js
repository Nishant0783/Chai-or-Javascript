// In JS we can convert a value from one data type to another.

let score = "33"
console.log(typeof score); // output => string

// Now we know that score should be in number. So to convert score to number we can use: 
let numScore = Number(score);
console.log(typeof numScore); // output => number

// It can happen when we are trying to convert something into number which actually can't be converted into number. For eg: A string value which has characters or characters+numbers in it.
let names = "Nishant";
let str = "33abcs";

let numNames = Number(names);
console.log(typeof numNames); // output => number
console.log(numNames); // output => NaN

let numStr = Number(str); 
console.log(typeof numStr); // output => number
console.log(numStr); // output => NaN

/**** NOTE: In JS when any value which actually can't be converted into number is made to convert in number, JS changes that value to "NaN(Not a Number)" which has data type as number. ****/
/**** NOTE: JS converts       1) null => 0      2) undefined => NaN      3) true => 1      4) false => 0    when converted to number****/

let val = Number(null);
console.log(val); // 0

val = Number(undefined)
console.log(val); // NaN

val = Number(true)
console.log(val); // 1

val = Number(false)
console.log(val); // 0


// Like, we have converted all different types of values in number using "Number" we can convert values to any other data types just by using the names of their class(We will learn about it later). 
// For eg: If we want to convert to string we can use "String", for boolean "Boolean"..
let num = 33;
let strNum = String(num);
console.log(typeof strNum); // output => string

num = 1;
let boolNum = Boolean(num);
console.log(typeof strNum); // output => Boolean
console.log(strNum); // output => true, Similarly 0 is converted to false.
// In boolean empty string is converted to "true" and non-empty string is converted to "false"

