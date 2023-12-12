//Closures 

// INNER FUNCTION PRESERVES THE SCOPE CHAIN(Lexical enviroment = local scope + outer scope) OF THE OUTER FUNCTION EVEN WHEN THE OUTER FUNCTION IS BEEN POPPED OF THE EXECUSTON STACK 

//local scope + reference to the lexical scope of parent  
//local scope + outer function scope + global scope   

// The chain of lexical enviroments(Lexical enviroment parent) is what know as a scope chain 

// ADV of closure :-
// currying
// once /
// memorize
// data hiding
// encapsulation 
// Module partten
// privatecounter 
// time Saver 

//  DISADV of closure :
// Make system bulky overconsumption of memory 
//   

const name = "sharma";

function my() {

    const name = "siddhant";
    function b() {
        console.log(name);
    }

    return b;


// Create Base:-

// function a(out){
//    return function inoo( inward ) {
//     return inward+out;
//    }
// }


const f = my();
f();


function counter() {

    var _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function retrieve() {
        return 'The counter is currently at: ' + _counter;
    }

    return {
        add,
        retrieve
    }
}

// error if we try to access the private variable like below// _counter;// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve();// => The counter is currently at: 14


//Module parttens 

const a = (function () {

    function privateMethod() {
        console.log("From private method which is invoked from public methos ")
    }

    return {

        publicMethod: function () {
            console.log('Form public method');
            privateMethod();
        }

    }

})();

const b = (
    function () {

        function pri() {
            console.log('Inside private')
        }

        return {
            publicMethod: function () {
                pri()
            }
        }

    }
)()

b.publicMethod();

a.publicMethod();
// a.privateMethod();

// Execute just Once :-

let veiw;
function once() {

    let count = 0;

    return function () {
        if (count > 0) {
            console.log("Already pressed " + veiw);
        } else {
            veiw = " siddhant sharma";
            count++;
        }
    }
}


const d = once();
d();
d();
d();
d();
d();
d();
d();
d();

const n = function createBase(a) {
    return function (b) {
        return a + b;
    }
}

const g = n(4);
console.log(g(9));


// ********************* //


function getAns() {

    let a = [];

    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }

    return function g(val) {
        return a[val];
    }

}

const v = getAns();

console.log(v(8));
console.log(v(800));
console.log(v(8000));
console.log(v(80000));



// Module parteen 
function mp() {

    function privatee() {
        console.log('Inside privatee ');
    }

    return {
        publicMethod: function () {
            console.log('hi');
            privatee();
        }
    }
}

const aa = mp();
aa.publicMethod();


//  Once

function on() {

    let count = 0;
    return function () {

        if (count == 0) {
            count++;
            console.log('Done once');
        } else {
            console.log('Executed once')
        }
    }
}

const bb = on();
bb();
bb();
bb();
bb();
bb();

// Currying

function a(b) {
    return function (c) {
        return function (d) {
            return function (e) {
                console.log(b + c + d + e);
            }
        }
    }
}

a(1)(2)(3)(4);


// Add Base 

function addBase(val) {

    return function (a) {
        console.log(val + a);
    }

}


const func = addBase(6);
func(5)

//  count


function t() {

    let arr = [];
    console.time();
    for (let i = 0; i < 100000; i++) {
        arr[i] = i + 34
    }
    console.timeEnd();

    return function (v) {
        return arr[v]
    }
}

const ne = t();
console.log(ne(8))

// private counter 

function calc() {

    let am = 0;

    function add(val) {
        am += val
        console.log(am);
    }

    function sub(val) {
        am -= val;
        console.log(am);
    }

    return {
        add,
        sub
    }
}

const va = calc();

va.add(3)
va.add(9)
va.sub(4)
va.sub(3)




// currying , once ,  modulepartten , privatecounter , time Saver , abstraction 

let calc = {

    read() {
        this.a = +prompt(" a = ", 0);
        this.b = +prompt(" b = ", 0);
    },

    add() {
        console.log(this.a + this.b);
    },

    mult() {
        console.log(this.a * this.b);
    }

}

calc.read();
calc.add();
calc.mult();

// currying , once, private counter , abstraction , memoixation , cal , time 


// currying , module partten , cal , abstraction , time

function f(){
    return function (a){
        return function (b){
            return function (c){
                console.log(a, b, c )
            }
        }
    }
}

f()(2)(3)(4);

// MP

const g = (

     function ab(){
       console.log("here")
     }

     return {
        f : function(){
            ab()
        }
     }
)()


// currying , once , memo , module partten , private counter 

function privateCounter(){

    let count = 1;

    function add(){
        ++count;
    }

    function sub(){
        count--;
    }

    return {
        add , sub , count
    }
}

const a = privateCounter();
a.add();
console.log(a.count);