//To check whether node is been installed in the system or not we will type "node -v" this will give us the version of node as an output 

//If after following the above instuction we dont get any output then we need to create an enviroment variable by the name of node and put the path of node over there 

//To determine location of nodejs we will search it on taskbar frist then select option to veiw in folder from there we will fecth its location from the above bar 

// Or we could also determine its path from download --> properties and then location  

//Advanced system variables --> enviroment variable --> System variable --> path --> new --> C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Node.js -->paste -->ok  

//Javacript could run in two enviroment one is browser enviroment Chrome v8 engine and another is node enviroment   

// In Browser enviroment the js engine provide us console , dom , local storage , location , storage , fetch 

// cd ll sf

// we could write javascript in a HTML files with the following three method One method is by mentioning a script tag in the body Another method is by mentioning the script tag in the head and yet another method is by linking an external file JS file in both the body and head tag 

// We prefer to write the script the script tag in the body instead of mentioning it in the head as html should render first then js should load 

//concatenation of string x

let fristStr = "Hello 1";
let secondStr = "World 1";


console.log(fristStr + secondStr);

// String destruring
console.log(...fristStr, secondStr);
console.log(fristStr, secondStr);
console.log(fristStr + " " + secondStr);

const v = fristStr.concat(secondStr);
console.log(v);

// Template litral / string litral 

let fullName = `I awant to become ${fristStr} ${secondStr} `;
console.log(fullName);

const l = 50;

const ans = l % 2;
// reminder 

const ans1 = l / 2;
// answer is 25

console.log(`Ampersent Sign answer is ${ans}`);
console.log(`Ampersent Sign answer is ${ans1}`);

//  String plus number is a string 
const aa = "My answer is " + 112;
console.log(aa);
console.log(typeof (aa));

//  Ternary Operator  
let f = 7;
const result = f > 7 ? "hello" : "hi";
const resultt = f > 7 ? "hello" : null;
const resulttt = f > 7 && "hello";
console.log(resulttt);
console.log(resultt);
console.log(result);

// Switch Case :  

const fruit = "apple";

switch (fruit) {
    case 'mango': console.log("Mango"); break;
    case 'apple': console.log('Apple'); break;
    default: console.log("default");
}

const Myname = 'siddhant';
console.log(typeof (Myname));
console.log(typeof Myname);

// string + number = string 

console.log(2 == '2');//  == - no type checking
console.log(2 === '2');//type checking in case of "==="

// Object ko compare based on address karte hai so asnwer is false as both of them are diffrent object
console.log({} === {});

// Type conversion
console.log(typeof (String(23)));

//  empty string (No space as well )and 0 is a false 
console.log(typeof (Boolean(32)));
console.log(typeof (Number('32')));

//  This return a boolean 
let email = 'siddhant';

// This returns true or false 
console.log(email.includes("d"));

// let a; //Initalization

a = 75; // declartion , default type of this type is var 
console.log(a);

for (let i = 0; i <= 15; i++) {
    console.log(`hello ${i}`);
    console.log('hello', i);
    console.log('hello' + i);
    console.log('hello '.concat(i));
}

let j = 1;
while (j < 15) {
    console.log(`hi${j}`);
    j++;
}

do {
    console.log('Inside Do');
    j++;
} while (j < 30) {
    console.log(`hi${j}`)
    j++;
}

if ('a' == 'a') {

} else if ('a' == 'a') {

} else if ('a' == 'a') {

} else {

}

// Break , continue only work when they are directly or indirectly inside of a loops 

for (let b = 1; b < 89; b++) {
    if (1 == 2) {
        console.log(b)
        break;
    } else {
        console.log(b)
        continue;
    }
}

console.log(Math.round(Math.random() * 100));
// Math.floor also does the same job
// Node Js dont understand document or dom only the js engine understand it 

console.log(new Date());

const currentTime = new Date();
console.log(currentTime);

const exact = new Date().getTime();
console.log(exact);

const exact1 = new Date().getDate();
console.log(exact1);

console.log(new Date().getTime());

//Node has given us an enviroment through which we are able to run javascript code in our system itself

//Before node this was not possible as we were able to run javascript on the browser side only

//Therefore node has provided us with this run time enviroment to run js on our systems also

// The nodejs runtime enviroment does not understang the DOM manipulation when running the file only in the system itself instead of rendering it on the browser

//Printing in javascript

console.log("Hello World");

//variables in javascript

// There are three variables in  which are javascript var , let ,const .
//Javascript is a dyancmically typed language that is we dont to define type while declaring a variable unlike type script 

var a = "hello a";

var a = "hello A";

// var b = "hello";
console.log(a);

//This let variable has value which is subject to each iteration in a for loop or a while loop (Blocked Scope)

// let a = 1;
//let a = 4; //This is not allowed for let

let b;
b = "hello b";

console.log(b);

//const Here in this we store const data
//not allowed
// const c = 2;
// c = 3;
// const d;
// d= 4; //We need to define the value at the time of declare it.

const c = "hello c";
console.log(c);

// && - and
// || - Or
// a == b
// a != b
// a++
// a--
// a+= 2
// a-=2
// a<b
// a<=b
// a>= b

console.log(Math);

//  To genrate number bw 1-100;

const ran = Math.random();
console.log(ran)
console.log(Math.round(ran * 100));

// There is a diffrence bewteen 
// .innerText
// .innerHTML

const d = document.querySelectorAll('.abc');
console.log(d);

// const f = d.children; Yeah nodelist return karta hai isko array may convert Array.from() say karte hai 

console.log(Array.from('foo')); 

// Expected output: Array ["f", "o", "o"] 
console.log(Array.from([1, 2, 3], (x) => x + x)); 
// Expected output: Array [2, 4, 6] 

//  kyuki forEach he kam kare ga :
//  forEach mai kuch bhi return hai nota hai agar explisitly bhi kare tho

d.forEach((ele) => {

});

// New type of loop for iteration in Object 

let arr1 = ['si', 'dd', 'ha', 'nt'];
let arr2 = ['sh', 'ar', 'ma'];

const me = arr1.concat(arr2);
console.log(me);

let menu = [...arr1, ...arr2];
console.log(menu);

for (let ele of menu) {
    console.log(ele);
}

let arr3 = ['si', 'dd', 'ha', 'nt'];

for (let ele of arr3) {
    console.log(ele);
}

for (let ele in arr3) {
    console.log(ele, arr3[ele]);
}

d.style.backgroundColor = 'blue';
d.classList.add('newClass');

// Every thing in the local storage is present in the form of string and nothing else 

localStorage.setItem('hi', 'siddhant');
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
localStorage.removeItem('hi');

// Before setting in local storage 
JSON.stringify(); 

// {
//     a : 1 ,
//     b : 'abc'
// } 

// TO

// {
//     "a" : 1 ,
//     "b" : "abc"
// } 



// After extracting from local storage 
JSON.parse();

// {
//     "a" : 1 ,
//     "b" : "abc"
// } 

// TO


// {
//     a : 1 ,
//     b : 'abc'
// } 


XMLHttpRequest();

// Syantx error - const a;
// Type error  const a = 10 ;
// a = 30 
// Reference error - variable not avaliable for access

// Call stack is present inside the js engine , and js engine is present inide the browser

//  webAPI which is present in the browser contains various things like 
//  console
//  DOM API
//  local Storage
//  location
//  setTimeout
//  fetch

// Promises and the mutation observer goes into the MicroTask queue 
// while the other goes into the call back queue 

// Example of sync code 
const start = new Date().getTime();
let end = start;

console.log('start');

while (end < start + 10000) {
    end = new Date().getTime();
}

console.log('end');

if (response.status !== 200) {
    throw new Error("Mkbhd");
}


let one = 1;
let two = 2;

[one, two] = [two, one]

console.log(one);
console.log(two);

//  This will conatin only unique value 
const sett = new Set([1, 2, 3, 4, 1, 2, 3, 1]);
console.log(sett);

console.time();
console.timeEnd();

// We can search key in Object
// No, keys in JavaScript objects are not always strings. In JavaScript, object keys can be either strings or symbols. where symbol are nothing but immutable key's

let res = {
    a: 'frrf',
    v: 'qefdq'
};

if ('v' in res) {
    console.log(res.v);
}

throw Error("you ran into an error");

// new Error('hi')  THis is not an error 

// 'throw defeat' reffers to error as it have the 'throw 'keyword  in it and it will go inside the catch block 

// When 'throw' keyword is there then only error is there 

// e.target refers to the entire tag now we can take out e.target.value , e,target.tagName , e.target.href , e.target.style , e.target.className from it

// Lodash libary in javascript have many prebuild usefull functions so keep a look on it

try {

} catch (err) {

} finally {

}


// The major diffrence b/w map and forEach is that in map chaining is possible but not in forEach also in forEach we could not return anyting from it which is possible in Map , forEach modifies the original array while in the case Map a all togethar new Array is been returned

// null is been assigned to a variable while for undefined it comes when its not been allocated to any value 

var a = null;
console.log(typeof a);

var a;
console.log(a);
console.log(b) // not defined

typeof (null) // Object
typeof (undefined) // undefined

// global scope , function scope , block scope 

function learing() {

    // function learing(...args){

    // console.log(args) output : [ 1, 2, 4 ]

    // arguments is a dedicated keyword

    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // console.log(argum[1]); This will not work 

}

learing(1, 2, 4)
