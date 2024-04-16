// In this file we will learn about Numbers and Maths in JS.

/**************** NUMBERS *******************/
// Numbers are a data type to represent numeric values in java script.

// There are two ways to declare a number in JS.

// 1) Using general syntax
const num1 = 1

// 2) Using new keyword
const num2 = new Number(10)

// Using second syntax give us the power to explicitly declare the value as Number data type.

// We can perform basic operations like "add(+)", "substract(-)", "multiply(*)", "divide(/) , (%)"


/******************** MATHS ***********************/
// Maths is a library in JS which allows us to perform different operations on Numbers.
// Some methods to use are:
// 1) toString(): This converts the value of any datatype to string.
// 2) abs(): Gives the absolute(positive) value of a number.
// 3) round(): Gives round of value of a a decimal number.
// 4) ceil(): Gives ciel value of a number.
// 5) floor(): Gives floor value of a number.
// 6) random(): Gives random value generated between 0 and 1.

// Formula to generate random number between a range.
const min = 10
const max = 20;
const random = (Math.floor(Math.random() * (max - min + 1)) + min) // This gives random number between min and max.
