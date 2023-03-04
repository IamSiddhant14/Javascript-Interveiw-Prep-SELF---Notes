//Window object carries all the bowser methods
'use strict'
//********************************************************

console.log(this) // It will result in window object

//********************************************************

function f(){
       console.log(this)
}

f()//Undefined

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

obj1.f() //Undefined



//Sumarry -

//Context : Browser +strict ->

// global area -> Window Object

// function - > Undefined

// obj -> function - object Itself

// obj - function - function -  Undefined