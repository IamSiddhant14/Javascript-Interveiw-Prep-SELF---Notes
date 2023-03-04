// ************ Node -> Strict Mode (REACT)
'use strict'

console.log(this) // global area  // Empty Object

// ********************************************************

function f(){
       console.log(this)
}

f() // Undefined

// ********************************************************

let obj = {
       name : 'Rahul',

       f: function(){
              console.log(this)
       }
}

obj.f()  // object (obj) itself

// ********************************************************

let obj2 = {
       name :'Mrinal',

       f: function f(){
              function g(){
                     console.log(this)
              }

              g();
       }
}


obj2.f()  //This will result in undefined


//Sumarry -

//Context : node + strict ->

// global area -> empty Object

// function - > Undefined

// obj -> function - object Itself

// obj - function - function -  Undefined