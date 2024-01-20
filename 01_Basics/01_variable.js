// In this we will learn about variables:


// In JS we can decalre variable by 4 different methods: 
// 1) Using "const" keyword : This keyword allows to declare a constant which means it's value can't be changed.
const age = 14;

// 2) Using "var" keyword : This keyword is used to declare a variable in earlier versions of JS. It is not advisable to use "var" because it can't handle the block levels.
var sum = 20;

// 3) Using "let" keyword : This keyword is introduced in newer versions of JS to handle block levels.
let gain = 40;

// 4) Using no keyword : In this we directly write the variable name to declare it. It is absolutely non-advisable to declare variable in this way.
loss = 50;

let undeclaredVariable;

// To print something in JS we use 
console.log(age);

// But when we have print more than 1 variable at in single statement we can use but this method gives index of the variable in array not their name.
console.table([age, sum, gain, loss, undeclaredVariable]);

/*** NOTE: In JS when we don't initialize a variable or don't give any value then by default "undefined" is assigned to that variable. For eg: undeclaredVariable ***/
