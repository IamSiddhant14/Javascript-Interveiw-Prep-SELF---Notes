//Closures

// INNER FUNCTION PRESERVES THE SCOPE CHAIN(Lexical enviroment = local scope + outer scope) OF THE OUTER FUNCTION EVEN WHEN THE OUTER FUNCTION IS BEEN POPPED OF THE EXECUSTON STACK

//local scope + reference to the lexical scope of parent
//local scope + outer function scope + global scope

const name = "sharma";

function my() {

    const name = "siddhant";
    function b() {
        console.log(name);
    }

    return b;

}

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
        add ,
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

const a = (function (){

    function privateMethod (){
       console.log( "From private method which is invoked from public methos ")
    }

    return {

        publicMethod : function (){
            console.log('Form public method')
            privateMethod();
        }
    }

})();


a.publicMethod();
// a.privateMethod();

// Execute just Once :-

let veiw ;
function once (){

    let count = 0;

    return function (){
        if( count > 0 ){
            console.log("Already pressed "+ veiw );
        }else{
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

const n = function createBase(a){
    return function(b){
        return a+b ;
    }
}
 
const g = n(4);
console.log(g(9));


// ********************* //


function getAns(){

    let a = [];

    for( let i =0; i<1000000 ; i++ ){
        a[i] = i*i ;
    }

    return function g(val){
        return a[val] ;
    }

}

const v = getAns();

console.log(v(8));
console.log(v(800));
console.log(v(8000));
console.log(v(80000));

