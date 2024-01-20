// Earlier in starting days of JS there were different browsers and every browser has their own standards of JS which was a pain for developers. So, to solve this inconsistency problem "ECMA Script" was formed.
// ECMA script is a standard of JS which is now followed everywhere.

// In JS, to make our program explicitly run in newer version of JS we use "use strict". But now it is not used much because now latest version of JS is very popular and stable.
"use strict" // explicitly telling the node to run JS in newer version.

// DATA TYPES IN JS:
// 1) number: Denotes numerical value in the range 2 to the power 53.
let num = 14

// 2) bigint: Used to store values which are greater than the rnage of number. "n" is used after the number as a suffix to denote bigint  values.
let bigNum = 1232323232323232323232323232323n

// 3) string: Used to store set of characters. We can use both single and double quotes to represent a string but it is advisable to use double quotes.
let name = "Nishant"

// 4) boolean: Used to store true/false value.
let relationship = false

// 5) null: Standalone value means it represents the variable is defined but currently it does not have value which it is meant to store. For eg: In a weather app we are getting value of "temprature" variable but due to some fault we are not able to get the vlaue of "temprature". So, instead of making it store some random value in case of failure we use "null".

// 6) undefined: It is used to store no value means currently the variable holds nothing.

// 7) object: It is a key-vlaue pair. WE WILl DISCUSS OBJECT LATER.


// Now, JS has a operator to check the datatype of a given variable. The operator is "typeof". This operator returns the data type of given variable or value.
console.log(typeof 17); // output=> number

console.log(typeof null); // output=> object
/**** NOTE: In JS null is a type of object ****/

console.log(typeof undefined); // output=> undefined
/**** NOTE: In JS undefined has undefined type ****/