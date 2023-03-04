// // There exist two code execustion modes in javascript one is the strict mode and another one is the non-strict mode , in strict mode as the the name sugget its very strict with respect to the syantx unlike in the case of an non strict mode. To enable strict mode we simply write -  "use strict"; 

// // default behaviour is non-strict mode

// // ************ Node -> non Strict Mode 

// console.log(this) // global area  // Empty Object

// // ********************************************************

// // inside a function

// function f(){
//        console.log(this)  

// // THIS WILL RESULT IN AN GLOBAL OBJECT( Global obj != Window Object as both have diffrent poles apart property in node we have global object and not window object)
// }

// f()

// // ********************************************************


// // inside a function inside an  Object

// let obj ={
//    name : 'rahul',

//    f:function(){
//          console.log(this) 
//    }
// }

// obj.f() //It will return (obj) object itself.


// // ********************************************************


// let obj2 ={
//     name :'Rahul',
//     f : function(){
//            function g(){
//                   console.log(this)
//            }
//            g()
//     }
    
// }

// obj2.f() //THIS WILL RESULT IN AN GLOBAL OBJECT


// //Sumarry -

// //Context : node + non strict ->

// // global area -> empty Object

// // function - > global Object

// // obj -> function - object Itself

// // obj - function - function -  global Object


let obj = {

       d(){
           console.log(this);
       },
   
       c: function (){
           console.log('c');
       },
   
       e : function abc(){
           console.log('e');
       },

       f: () =>{
           console.log(this)
       },

   }
   
   for( let key in obj ){
       // console.log( key , obj[key] );
       obj[key]();
   }