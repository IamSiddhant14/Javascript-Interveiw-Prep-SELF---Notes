// Javascript is an synchrounous and single threaded language
//Execustion context is an enviroment  where our code evaluted/executed
//EVERYTHING IN JAVASCRIPT HAPPENS INSIDE AN EXECUSTION CONTEXT WHEN WE RUN A JAVASCRIPT PROGRAM IN OUR MACHINE AN EXECUSTION CONTEXT IS BEEN CREATED 
//The default place where our entire code resites is called an global execustion context

//****************************************************   WATCH THIS VEDIO : https://www.youtube.com/watch?v=iLWTnMzWtj4     ******************************************************* */


// var a = 2;
// var b = 3;


// function add(m,n){
//     var sum = m+n
//     return sum 
// }

// var sum1 = add(1 , 2)
// var sum2 = add(a , b)

// console.log(sum1)
// console.log(sum2)

var n = 2;
function square(n){
    let square = n*n
    return square
}

let square1 = square(n)//Function calling is also know as Function invocation 
let square2 = square(6)

console.log(square1)
console.log(square2)

// In phase-one (MEMORY ALLOCATION) :

// Memory is been created then been alocated for all the variables and the function,where variables will be having intial value as undefined eg- n : undefined,And in the case of function the entire function body is allocated  square : { let square = n*n;return square }

// In phase-two (CODE EXECUSITION) :

// For variables ,now there values are been provided to the them which was having undefined as there value before and for function invocation NOW FORMATION OF A NEW EXECUSTION CONTEXT FOR THAT PARTICULAR FUNCTION INVOCATION where the variables present inside that function gets memory allocated frist and intially there value is undefined and after the completion the CODE EXECUTION takes place where now to the variables ge there original value is been assigned to it

// Return statement states to return the control of the function from the place where the function was been invoked
