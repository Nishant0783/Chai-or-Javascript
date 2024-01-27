// In this file we will have small discussion above memory organization in JS.

// To learn about memory organization we just need to understand two statements: 
// STATEMENT 1) In JS the memory allocated for all the primitive data types is in "Stack".
// STATEMENT 2) In JS the memeory allocated for all non-primitve data types is in "Heap".

// Primitive data types: There are 7 types of primitive data types ---> String, Number, Symbol, Boolean, BigInt, null, undefined

// In primitive data types what happpens is when we declare a variable and initialize it's value then the variable is stored in stack memmory with is's value.
// Then when we assign that variable to another variable, The the copy of that variable is assigned to it, not original variable.

// For eg: 
let player = "MsDhoni"
let captain = player
captain = "Rohit sharma"

// Let's understand what is happening here:
// 1) "player" is decalared with value "MsDhoni". So, in stack a variable will be created with a name "player" and "MsDhoni" will be assigned to it.
// 2) "captain" is declared with value of "player". So, in stack another variable will be declared with name "captain" and "player" will be assigned to it as a value. So, the value of captain and player is same till now. 
/****REMEMBER: the "player" assigned to "captain" is not original value of player. Copy of "player" is assigned to "captain".*****/
// 3) Now the value of "captain" is changed to "Rohit Sharma" but, the value of palyer will remain same because we the copy of player was assigned to it not the original player.

console.log(player) // OUTPUT: "MsDhoni"
console.log(captain) // OUTPUT: "Rohit Sharma"


// Non-Primitive Datatypes: There are 7 types of non-primitive datatypes ---> Object, Array, Function, Regular Expression, Maps and Sets, Date, Promise

// In non-primitive data types what happens is when we declare a variable and assign a value to it then, the name of variable is stored in stack and the value is stored in heap. So, when we declare another variable with same value then the name of that new variable is stored in stack and for it's value a refrence is given of the older value which is stored in heap. So, when we try to change value of the any variable then value of both the variable is same.

// For eg:
let userOne = {
    name: "Ayush",
    email: "ay@gamil.com"
}
let userTwo = userOne

userTwo.email = "py@gmail.com"
// Let's understand what is happening here:
// 1) We declared "userOne" variable and we assigned an object to it. So, the "userOne" will be stored in stack and the object we will be stored in heap memory.
// 2) We declared another variable "userTwo" and assigned it value same as "userOne". So, "userTwo" will be stored in stack and since the value of "userOne" and "userTwo" is same so, the reference of the object stored in heap will be passed to it as it's value.
/**********REMEMBER: "userOne" and "userTwo" are different variables but pointing to same thing. */ 
// 3) In next line we are changing the value of email for "userTwo", ideally the change should not reflect to "userOne" but since both of them are pointing to same object so any change in object will reflect to both.

console.log(userOne)
console.log(userTwo)