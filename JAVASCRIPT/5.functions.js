
// function expects parameters
// The value which we pass during calling a function is called arguments 
// In js we dont need to define the return type
// function increases code re-use-ability

function add(a, b){ //function declartion/parameters
    // console.log(a+b);
    return a+b;
};

let sum = add( 5 ,4); //function invokation/calling/arguments, This function is alredy been called
console.log("The sum is "+sum);
console.log("The sum is ",sum);

//In javascript functions are know as frist class citizens
//That is we can treat functions as variables in javascript

//Named function expression

let syaHi = function op(a){// here this "op "keyword could be used inside function "op"
    console.log(a);
}

syaHi("b");

//Anonynmus function expression

let syaHii = function(a){
    console.log(a);
}

syaHi("b");

//IIFE  ( Immediately invoked function expression ) Auto calling

//As soon as this line is been executed / runned this function get invoed or get called

let ad = (function(a,b){

    console.log(a+b);

})(10, 20);

let obj = {
    // a : 'name',
    // h : 4,

    e : function abc(){
        console.log('e');
    },

    c: function (){
        console.log('c');
    },

    f: () => {
        console.log(this)
    } ,  

    i: abcd = () => {
        console.log(this)
    } ,  

    d(){
        console.log(this);
    }
}

for( let key in obj ){
    console.log( key + '->' + obj[key]() ); 
}

console.log( 2 == '2');
console.log( 2 === '2');//type checking in case of "==="

//Various type of function

//function declartion / function defination,statement:-

function abc (num){
    return num*num;
  }

  //function Expression(Anonamus) :-
  var abcd = function(){
      console.log("abc");
  }

   //function Expression(named) :-
  var abcde = function name(){
      console.log("abc");
  }

  abcd();


  // In javascript every function is a first class function

  //IIFE

  (function a(b){
    console.log(b);
  })(3);

  //Param vs arguments
  function f (d){//params
      console.log(d);
  }

  f(4);//argument

  // function passes inside another function is an callback function

  //Arrow function

  const g = (m) => {
      return (m*m);// when returning one statemnt in an arrow function we will not require return statement
  }

  console.log(g(5));

function demo(a , b){
    console.log("Hello from demo" , a , b );
    return function (){
        console.log("hello from inside of demo");
    }
}


const holder = demo( 4 , 5 );
// Here this function is been called upfront and the given variable is just storing the value of the returned function which need to be called

// holder();
holder();

var len = 4 ;

function newq() {

    var len = 5;
    console.log(arguments[0]);

    arguments[0]();
}

function cb(){
    console.log(this.len);
}

newq(cb);

// whenever a new function is being created in JavaScript by default it adds a property called prototype in it.

// Prototype is nothing but an empty object added on a function

// 