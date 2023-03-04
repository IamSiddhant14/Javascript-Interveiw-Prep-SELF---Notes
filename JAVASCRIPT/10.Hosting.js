// ***********************************************************************
// YT : https://www.youtube.com/watch?v=Fnlnw8uY6jo
//Hoisting refers to phenomena in which we are able to access function/variables even before we have intialized it , but for arrow function we will get undefined unlike the case of a normale function that is in case of an arrow function it will behave like an normale variable only and will result in undefined, 

// Unlike var, let and const variables are not hoisted in the global space instead they are been hosited at some other space and also we could not access that memory space until we have assigned some value to it

// The space bewteen when the variable let is been hoisted and till when it is been assigned some value is called an temporal deadzone so whenever we try to access a variable bewteen it ,then it would result in an reffrence error
// NORMALE CASE FOR VAR


var a = 2

function greet(){
      console.log('Hello') 
}

greet()
console.log(a)

// ***********************************************************************
//NORMALE CASE FOR LET

let a = 2

function greet(){
      console.log('Hello') 
}

greet()
console.log(a)

//*************************************************************************** 
//HOISTING CASE FOR VAR

greet()
console.log(a)

var a = 2

function greet(){
      console.log('Hello') 
}


// ***********************************************************************
//HOISTING CASE FOR LET

// TEMPORAL DEAD ZONE - It is an zone where if you try to access variables defined with let and const before their initialization you wont be able to do it and would result in an reffrence error.

//Unlike var, let and const variables are not hoisted in the global space instead and also we could not access that memory space until we have assigned some value to it

//The space bewteen when the variable let is been hoisted and till when it is been assigned some value is called an temporal deadzone so whenever we try to access a variable bewteen it ,then it would result in an refference error

//This would result in an initalization error as due to hosting we will be assining "let a "as " undefined" and since in" let" or "const" redeclaring the same variable isnt possible Therfore it would result in an error for that matter

//console.log('Hello') 



// ***********************************************************************
//HOISTING CASE FOR CONST
//This would result in an initalization error as due to hosting we will be assining "let a "as " undefined" and since in" let" or "const" redeclaring the same variable isnt possible Therfore it would result in an error for that matter

// greet()
// console.log(a)

// let a = 2

// console.log(a)

// function greet(){
//       console.log('Hello') 
// }
