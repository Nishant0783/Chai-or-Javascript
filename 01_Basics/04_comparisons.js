// In this file we will discuss about comprarison operators.

console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 <= 1);
console.log(2 >= 1);
// Above all comparisons are based on general mathematics and needs no disscussion. Here we are comparing just two different numbers.

console.log("qwe" > "qwer");
console.log("qwer" > "qwer");
console.log("qwert" > "qwer");
console.log("qwert" == "qwer");
console.log("qwert" == "qwert");
// In above all operations we are comparing String using "comparison operators" which just checks the length of string and compare them.



// In above comparisons we can observe that all the things which are getting compared are of same datatypes.
// The problem kicks in when we try to compare the values with different datatypes.

// 1) Comparing string with a number.
// This comparison always returns "false" because JS will try to convert the "String" to number which will be "NaN" and comparing "NaN" with number will always return false.
console.log("2" > 2);  // OUTPUT: False
console.log("sdfs" == 2);  // OUTPUT: False


// 2) Comparing boolean with a number.
// This comparison will convert the boolean value to number format i.e., true --> 1 and false --> 0 and then compare them.
console.log(true > 5);  // OUTPUT: false
console.log(true < 5);  // OUTPUT: true


// 3) Comparing boolean with a string.
// This comparison will always return "false" because JS will perform "type coercion" to make comparison meaningful and will convert boolean value to it's numerical value and string to it's numerical value. So, internally we are comparing 0 or 1 with "NaN" which will always return false.
console.log(true > "true"); // OUTPUT: false


// 4) Comparing "null" with number or a string.
// While comparing "null" with number JS will convert "null" to it's numerical value which is "0" and then compare it with other number.
// While comparing "null" with string JS will perform "type coericon" to make comparison meaningfull and converts "null" to it's numerical value which is "0" and string to it's numerical value which is "NaN". So, internally we are comparing "0" with "NaN" which will always return false.
console.log(null > 1);  // OUTPUT: false
console.log(null < 1);  // OUTPUT: true
console.log(null == 0);  // OUTPUT: true
console.log(null > "abc");  // OUTPUT: false
console.log(null == "");  // OUTPUT: false

// 5) Comparing "undefined" with a number or a string
// In this comparison JS converts "undefined" to "null" and then same logic as above is applied for comparison with String or number. 
console.log(undefined > "osada"); // OUTPUT: false
console.log(undefined > 1);  // OUTPUT: false
console.log(undefined == null);  // OUTPUT: true


/*************Above all comparisons are in loose comparisons means we are directly checking values not dataypes. To perfrom strict checking means for comparing datatypes we use "===" operator.***********/

/************It is very much advisable to compare the values which have same datatype. In consistent datatype values comparison is not advisable.**********/

