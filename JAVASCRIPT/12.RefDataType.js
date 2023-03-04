// let arr = [1 , 3 , 3];

// console.log(arr , typeof(arr))

// let obj = {
//        name : 'Adam',
//        age :23
// }

// console.log(obj , typeof(obj))


// function greet(){
//        console.log('Hello')
// }

// console.log(greet , typeof(greet))

// Output

// [ 1, 3, 3 ] object
// { name: 'Adam', age: 23 } object
// [Function: greet] function


// ACCESS BY VALUE-------------------------------(STACK)

let fp = "sidd"
let dp = fp

fp = "pra"

console.log(fp)
console.log(dp)


// output:(As here this are primitive data type(STRING) where every thing is stored in stack memory unlike non premtive data type)
// pra
// sidd

// ACCESS BY REFFRENCE---------------------------(HEAP)

let firstPerson = {
    name:'Siddhant',
    age : 21
}

let secondPerson = firstPerson

secondPerson.name = 'Prakhar'

console.log(firstPerson)
console.log(secondPerson)

// output
// { name: 'Prakhar', age: 22 }
// { name: 'Prakhar', age: 22 }




