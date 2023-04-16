//Window object carries all the bowser methods

//********************************************************

console.log(this) // It will result in window object

//********************************************************

function f(){
       console.log(this)
}

f() //It will result in window object window Object

// 


//********************************************************

let obj = {
    f: function(){
           console.log(this)
    }
}

obj.f() //This will result in object itself 


let obj1 = {
       f: function(){
              function g(){
                     console.log(this)
              }
              g()
       }
}

obj1.f() //This will result window object

//This keyword mai look up nahi hota hai voh bus variables mai he hota hai 

//To fix the value of this we will always wrap it inside of a function
// For settimeout "this" behaves diffrently as it is been passed there as a callback function and there "this" keyword behave as a global scope to abovide this we will always wrap it inside of a function

//Sumarry -

//Context : Browser + non strict ->

// global area -> Window Object

// function - > Window Object

// obj -> function - object Itself

// obj - function - function -  Window Object

// When' this' keyword is present inside a normale function it will referce the outer object but when this "this" keyword is present inside a arrow function then it will point to the parent function 

const val = { 
    ref : this ,
    name : 'sidd'
}

console.log(val.ref.name)
// Here val.ref is window object
// Here  is undefined 


const us = {
       name: 'sidd',
       rollNo: '0827ci191054',
       abc(){
         console.log(this)
       },
       f : obc = () =>{
           console.log(this)
       }
       ,
       ref: this,
       newOj: {
           name: '738',
           re: this,
           n: {
               r: this,
               o: {
                   reff: this,
                   g : {
                       name : 'op',
                       ro : this 
                   }
               }
           }
       }
   }
   
   us.abc()
   us.f();
   console.log(us.ref)
   console.log(us.newOj.re);
   console.log(us.newOj.n.r);
   console.log(us.newOj.n.o.reff);
   console.log(us.newOj.n.o.g.ro)
   console.log(us.newOj.n.o.g.ro.name)
    