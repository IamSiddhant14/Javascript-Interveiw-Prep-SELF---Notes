// function expects parameters 
// The value which we pass during calling a function is called arguments 
// In js we dont need to define the return type
// function increases code re-use-ability

// function declartion/function statement

function add(a, b) { //parameters
    // console.log(a+b);
    return a + b;
};

//function invokation/calling/arguments, This function is alredy been called
let sum = add(5, 4); 

console.log("The sum is " + sum);
console.log("The sum is ", sum);
console.log(`The sum is  ${sum}`);

//In javascript functions are know as frist class citizens
//That is we can treat functions as variables in javascript

//Named function expression`

let syaHi = function op(a) {// here this "op "keyword could be used only inside function "op"
    console.log(a);
}

syaHi("b");
 
//Anonynmus function expression

let syaHii = function (a) {
    console.log(a);
}

syaHi("b");

// Anonynmus function are offen been passed in as a callback or assigned to a variable as well  

//IIFE  ( Immediately invoked function expression ) Auto calling

//As soon as this line is been executed / runned this function get invoed or get called

let ad = (function (a, b) {

    console.log(a + b);

})(10, 20);

let obj = {

    // a : 'name',

    // h : 4,

    e: function abc() {
        console.log('e');
    },

    c: function () {
        console.log('c');
    },

    // c: (){  This is not possible 
    //     console.log('c');
    // },

    // c: abc(){  This is also not possible 
    //     console.log('c');
    // },

    f: () => {
        console.log(this)
    },

    i: abcd = () => {
        console.log(this)
    },

    abc() {
        console.log(this);
    }
}


let invitation = function (name = "Siddhant") {
    console.log(` Hi my name is ${name} `);
}

invitation();
invitation('sharma');

// output:
// Hi my name is Siddhant
// Hi my name is sharma

for (let key in obj) {
    console.log(key + '->' + obj[key]());
}

for (let ele of obj) {
    console.log(ele());
}


//Various type of function

//function declartion / function defination,statement:-

function abc(num) {
    return num * num;
}

//function Expression(Anonamus) :-
var abcd = function () {
    console.log("abc");
}

//function Expression(named) :-
var abcde = function name() {
    console.log("abc");
}

abcd();


// In javascript every function is a first class function

//IIFE

(function a(b) {
    console.log(b);
})(3);

//Param vs arguments
function f(d) {//params
    console.log(d);
}

f(4);//argument

// function passes inside another function is an callback function

//Arrow function
const g = (m) => {
    return (m * m);// when returning one statemnt in an arrow function we will not require return statement
}

console.log(g(5));

function demo(a, b) {
    console.log("Hello from demo", a, b);
    return function () {
        console.log("hello from inside of demo");
    }
}


const holder = demo(4, 5);
// Here this function is been called upfront and the given variable is just storing the value of the returned function which need to be called

// holder();
holder();

var len = 4;

function newq(cb) {
    var len = 5; 
    console.log(arguments[0]);
    console.log(arguments);
    arguments[0]();
}

function cb() {
    console.log('this.len');
}

newq(cb);

// whenever a new function is being created in JavaScript by default it adds a property called prototype in it. 

// Prototype is nothing but an empty object added on a function 

const arr = name => (
    `welcome ${name}`
)

console.log(arr('sidd', 'hi'));
console.log(arr('sidd'));

// welcome sidd

// const arr = name  => `welcome ${name}`

// welcome sdd

// const arr = name  => {
//     `welcome ${name}`
// }
//  undefined

console.log(arr("sdd"));

// A higher order function is a function that takes one or more functions as an arguments, or returns a function as its result 

let lower = function (str) {
    return str.toLowerCase();
}

let heigher = function (str) {
    return str.toUpperCase();
}

const ans = function (fun, st) {
    console.log(fun(st));
}

ans(heigher, 'Siddhant Sharma');

// Another One 

let compli = function (name) {
    return function (val) {
        console.log(`${name} ${val} `);
    }
}

compli('sid')(69);

//  settimeout

const id = setTimeout(callMe, 5000, 'siddhant');
clearTimeout(id);


// When from a single function two invocation takes place then in that case they both are independent of one another and any change in one invocation doesnt effect another 

function abc(name = 'sidd') {
    let count = 1;
    console.log(`sharma${name} ${++count}`)
}

abc('siddhant');
abc();

// But since here both of them are refrencing to the same global variable count hence its fucked up 

let count = 1;
function abcc(name = 'sidd') {
    console.log(`sharma${name} ${++count}`)
}

abcc('siddhant');
abcc();

// After return statement code is not reachable 

//  Diffrene bewteen arrow function and normale function 

//  syantx
//  implicit return keyword
//  this inside of an object 
//  'arguments' keyword which is possible in normale function but not in an arrow function 







