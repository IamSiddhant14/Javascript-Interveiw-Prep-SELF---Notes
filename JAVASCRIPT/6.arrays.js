//Array
// DEEP INSIDE ARRAYS ARE NOTHING BUT AN  OBJECT 

//Arrays are ordered collection organised in a continous block of memory where values of diffrent data  es is been stored 

let arr = []; //array are initalized with square brackets
//hetrogenous arrays are present in javascript

let arr1 = [1,"yes",3,true,5];

//destruring of array
const [ num1 , boolean1 , num2 , boolean2 , num3 ] = arr1;
console.log(num1);
console.log(num2);
console.log(num3);

console.log(arr1);

// spread // This is pass by value 
let arr2 = [...arr1];// This will create a new copy of array

//Arrays methods
let cars = [1,2,3];

// The below statement is pass by reference .
const ca = cars ;

// Accessing element
console.log(cars[1]);

cars[1] = 1;//replace

console.log(cars);
//Replace an Element In A Array

//Adding an element in an array
cars[3]="4";
console.log(cars);

//Here the middle element will be "Empty"
cars[7]="7";
console.log(cars);

// OUTPUT:
// 1,1,2,3,4,empty,empty,7

//Arrays length

console.log(cars.length);

//Array manupulation method

//pop()- takes element from the end of the array

 
let remainigcars = cars.pop();
console.log(remainigcars); // poped element
console.log(cars); // remaining elements

//push - addes the element to the end of array
 
cars.push('5');
console.log(cars);

//Shift - removes the element from the starting of the array

let shiftedElement = cars.shift();
console.log(shiftedElement);
console.log(cars);

//UnShift - Addeds the element to the starting of the array

cars.unshift(0);
console.log(cars);

// let cars = [1,2,3];
for( let ele in cars){
    //Here cars is the name of the array
    console.log(ele,cars[ele]) // Here "ele" is the index from zero when iterating over the array
}


console.log(cars);
let cars = [1,2,3];
cars.forEach(function(ele, index){
    console.log(ele,"OP", index)
});


// for( let key in cap){//Here cap is the name of the object
//     console.log(key , cap[key]);// Here "ele "is the key while iterating over an object
// }

//MultiDimensional Array

let dish = [" apple" , "bannna" , 'stra'];
console.log(dish.join(","));

let matrix = [
    [1.2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[0][1]); // OUTPUT - 2
console.log(matrix[2][1]); // OUTPUT - 8

const arr11 = ["Cecilie", "Lone"];
const arr21 = ["Emil", "Tobias", "Linus"];

const children = arr11.concat(arr21);
console.log( ...arr11 , ...arr21 );
console.log( arr11 , arr21 );

console.log(children);
console.log(Array(10).fill(`hi`));

arr11.reverse();
console.log(arr11);

arr1.slice(1,6);
arr1.splice(1 ,1 , 1 );



arr.flat();
arr.flat(2);
arr.flat(3);

// It by default sort strings

arr.sort(sorting);

function sorting (){

    if( a<b){
        return -1;
    }

    if( a >b ){
        return 1;
    }

    return 0 ;
}