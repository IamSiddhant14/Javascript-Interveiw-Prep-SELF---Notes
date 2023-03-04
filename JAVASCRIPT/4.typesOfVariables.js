//There are two type of data type in javascript :

// var was present from the birth of javascript while the let and const where introduced in ES6 version of javascript

// 1.> primitive - Number ,String , boolean ---------- stack per he store hota hai or reference variable bhi stack per he banta hai

// 2.> Reference - Array ,Objects ,Function ---------- heap per store hota hai and stack per reference variable banta hai 
//   YT : https://www.youtube.com/watch?v=lW_erSjyMeM

// We will be dealing with two type of enviroment for now one is the browser and the another one is node js

// variable
// loops
// if else
// let var const

//There is nothing like char in javascript there are only string 

//javascript is an synchrounus and a single threaded language

// JavaScript is single threaded and has a synchronous execution model.
// Single threaded means that one command is being executed at a time.
// Synchronous means one at a time i.e. one line of code is being executed at time in order the code appears.
// So in JavaScript one thing is happening at a time

// When we are trying to access an variable which is not been defined yet then it would result in an reference error / not defined ( thats means its not been defined in the memory )

//variable declartion with let var and const

// var a ; // frist the variable is been initalzed with undefined
// console.log(a); 
// a=20;
// console.log(a); b

// a ="20";
// console.log(a);
// // a="Hello"; dynamic behaviour of javascript
// console.log(a);
// a= true;
// console.log(a);
// // assigning value to "a" as null
// a= null;
// console.log(a);

// //javascript is an dyanimically typed language that is dont need to specifie the type of variable as such
// // semicolon is not compulsory in javascript
// // Javascript is a single threaded language not multithreaded 
// //javascript is a sychronus language by default.  Although the callback function might appear to execute asychrousely but in actualle they are also been executed sys

// //let and const :-

// //frist problem of var : redeclartion
// //That is 
// var a = 2;
// console.log(a);
// var a = "string";
// console.log(a);


// // But in case of "let" keyword we could not redeclare the same variable where was this was allowed in var
// //but here re-defining / reasigning is allowed , same as that in var keyword javascript

// //redeclaring(not allowed) will result in an syantax error and redefing/reassigning (allowed) this two are two diffrent things

// let b = 2;
// console.log(b);

// //This will result in an error
// // let b = "hello";
// // console.log(b);

// // This is possible in case of let and var 
// b=4; //redefiningF
// console.log(b);

// //Whether the number is prime or not
// let flag = true;
// let num = 13;

// let a;

// a= 10;//Although this is possible 

// The var keyword is not block scoped but it is function scoped that is we cannot access a var keyword outside a function when it is been declared inside of a function


// for( let i =2 ; i*i < num ; i++){//In loop we should not use "var" keyword instead we should use "let "as its value is saved for a particular iteration
//     //"let" has block scope that is it have exsitance within the block only unlike "var " which has function scope
//     if( num % i == 0){
//         flag = false;
//         break;
//     }
// }

// if( flag == true){
//     console.log(num +"is prime");
// }else{
//     console.log(num + "is not prime")
// }

//problem -2 with var :

if(10 % 2 == 0){
    var c = 277777777777777;
    console.log(c);
}

console.log(c); //no error , only the let and const variables are block scoped and the var type variable isnt block scoped but it is function scoped 


//Here error as let has its existance within the block only that is block scope


if( 10%2 ==0 ){
// Here this k doesnt exist after this block
    let k = 1;
    console.log(k+"This one ");
}
   
// console.log(k); 
// This 'let' variable will result in an error but in case of 'var' this wont result in refrence error

// I hereby plege to use "let" and "const" only and not "var" because of the following problems (Will get the refrens later to this sentence)

//Const

const d = 10;
// d = 2;
// const e ;
// here "e" is value as undefined and now since it is of type const we couldnt re-define it to lets say" e=8" 
// means now we could neither reasign nor redeclared the variable
// whereas the reasigning  thing is possible in "let" 
// And the reasigning and the redeclarion thing is possible in "var"



//concatenation in javascript
console.log("I am from outside "+d);
console.log("I am from outside ",d);

console.log("2",d);
console.log("2 "+d);


//var is function scoped and let/const are both function and blocked scope unlike var which is only function scoped, try the below example

var a = 10;
function u(){
    var a = 30;
    console.log(a);
}

u();
console.log(a);

// output: 30 , 10

// Intersting Case :-
// The below given case is possible as we know that both the let are been declared in two diffrent scopes

let a = 10;
function u(){
    let a = 30;
    console.log(a);
}


// var a = 10;
if(true){
    var a = 399;
    console.log(a);
}
// u();
console.log(a);


var a = 10;
if(true){
    var a = 30;
    console.log(a);
}

console.log(a);

// output: 30 , 30


// ***************************************************** VERY IMPORTANT CONCEPT BELOW *************************************************

// var fruit = "a";

// {
//     var fruit;
//     console.log( fruit);
// }

// OUT - a

// let fruit = "a";

// {
//     let fruit;
//     console.log( fruit);
// }

// OUT - undefined

// var fruit = "a";

// function b(){
//     var fruit;
//     console.log( fruit);
// }

// b();

// OUT - undefined

// let fruit = "a";

// function b(){
//     let fruit;
//     console.log( fruit);
// }

// b();

// OUT - undefined

{
    let a;
    console.log(a);
    a = 10;
}

// undefined

// {

//     console.log(a);
//     let a = 10;
// }

// error

function abc(){
    var a = 3;
    console.log(a);
}

abc();
// console.log(a);

// Above commented statement would not work as" var" is function scoped and not blocked scope while let and const are both block and function scoped


{
 var b = 4;
 console.log(b);
}

console.log(b);

// let to var is not possible but var to let is possible , 2 -> 1 is not possible while 1 -> 2 is possible . This is called varable shadowing 

// we could not access let and const before initalization as they are present in a temporal deadzone so one could not access it before declaring its value 


let a = 2;
console.log(a);

{
    // console.log(a);// Will fail due to temporal dead zone
    let a = 3;
    console.log(a);
}

const j = 1;
console.log(j);

{
    const j = 1;
    console.log(j);

    //We are able to do this as both the "const j" variables are in diffrent scope one is in global scope while other is in block scope
}

{
    let v = 3;
    console.log(v);
}

v= 2;
console.log(v);