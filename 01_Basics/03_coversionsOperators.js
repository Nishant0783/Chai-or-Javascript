// // In JS we can convert a value from one data type to another.

// let score = "33"
// console.log(typeof score); // output => string

// // Now we know that score should be in number. So to convert score to number we can use: 
// let numScore = Number(score);
// console.log(typeof numScore); // output => number

// // It can happen when we are trying to convert something into number which actually can't be converted into number. For eg: A string value which has characters or characters+numbers in it.
// let names = "Nishant";
// let str = "33abcs";

// let numNames = Number(names);
// console.log(typeof numNames); // output => number
// console.log(numNames); // output => NaN

// let numStr = Number(str); 
// console.log(typeof numStr); // output => number
// console.log(numStr); // output => NaN

// /**** NOTE: In JS when any value which actually can't be converted into number is made to convert in number, JS changes that value to "NaN(Not a Number)" which has data type as number. ****/
// /**** NOTE: JS converts       1) null => 0      2) undefined => NaN      3) true => 1      4) false => 0    when converted to number****/

// let val = Number(null);
// console.log(val); // 0

// val = Number(undefined)
// console.log(val); // NaN

// val = Number(true)
// console.log(val); // 1

// val = Number(false)
// console.log(val); // 0


// // Like, we have converted all different types of values in number using "Number" we can convert values to any other data types just by using the names of their class(We will learn about it later). 
// // For eg: If we want to convert to string we can use "String", for boolean "Boolean"..
// let num = 33;
// let strNum = String(num);
// console.log(typeof strNum); // output => string

// num = 1;
// let boolNum = Boolean(num);
// console.log(typeof strNum); // output => Boolean
// console.log(strNum); // output => true, Similarly 0 is converted to false.
// // In boolean empty string is converted to "true" and non-empty string is converted to "false"



/*******************************LECTURE 07*******************************/
// Here the discussion is about some tricky conversions in JS.

// console.log("5" + 2);
// console.log(5 + "2");
// console.log(5 +  "2" + 3);
// console.log("5" + 2 + 3);

// console.log(3 + 4 + "8");

// All the above tricky log statements can be solved by having one rule in mind: "WHENEVER THERE IS A "+" BETWEEN A STRING AND ANY OTHER DATATYPE THEN JS AUTOMATICALLY INTERPRETS "+" AS A "STRING CONCATENATOR" NOT AS A "ADD" OPERATOR. SO, JS WILL CONVERTS ALL THE DATATYPES TO STRING."
/***REMEMBER: This statement is only applicable to "primitive datatypes" and with "+" sign between them. */
// The above mentioned phenomenon is called "TYPE COERCION" means converting one datatype to another. It is of two types  1) Implicit: Done by JS automatically    2) Expilicit: Instructed by programmer to convert. The one which is followed in above examples is "Implicit".

// DISCUSSION

console.log("5" + 2);  // OUTPUT: "52" because "5" is string as it is in double qoutes, so above mentioned statement applies here.
console.log(5 + "2");  // OUTPUT: "52" same reason as above.
console.log(5 + "2" + 3);  // OUTPUT: "523" because intially complier will take 5 and then "+" sign then will go to "2" which is a string, so it will covert "5" to string. Till now (5 + "2") output will be "52" which will be a string and then at last the "52" string is concatenated with 3 which is a number but JS will convert it to string and hence final result will be "523" which will be a string.
console.log("5" + 2 + 3);

console.log(3 + 4 + "8");  // OUTPUT: 78 because first complier will take 3 which is number then will take "+" and then 4 which is also a number, so 7 will be the result of "4+3" then compiler will got to "+" and then "8" which is a string. So, "+" will acts as String concatenator and will concatenate 7 with "8". Hence final output will be "78" which will be a string.

console.log("5" * "abc"); // OUTPUT: NaN because both are strings but multiplication operation is perfromed between them.

console.log("5" * 2); // OUTPUT: 10 because now "5" which is a string is treated as "number" then multiplied with 2.

// By similar reason
console.log(true + "abc"); // OUTPUT: "trueabc"
console.log("abc" + true + 1); // OUTPUT: "abctrue1"

// "TRUE IS TREATED AS 1 AND FALSE IS TREATED AS 0, WHEN CONVERTED TO NUMBERS."
console.log(true + 5); // OUTPUT: 6 because "true" will be converted to 1 and then we have "+" and then "5". So this evaluates to (1 + 5) which is 6.

console.log(false + 5); // OUTPUT: 5 same reason as above.

console.log(true + 2 + false - 1 + "xyz"); // OUTPUT: "2xyz" because true is converted to 1 then added to 2 which gives (1 + 2) = 3, then it is added to 0(false) which gives (3+0) = 3 and then 1 is subtracted which gives (3 - 1) = 2 and then "xyz" is string which is being concated to 2 which is a number. Hence final result is "2xyz" which is string.
