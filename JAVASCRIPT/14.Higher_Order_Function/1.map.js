// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

//************************************* MAP *********************************

let arr = [2, 5, 9, 8, 15, 11, 6];

// let ans = arr.map(function(v){ , As this function dont need to called some wherelse therefore it could be an unnamed function as well
//     return v*v;
// });

// let ans = arr.map((v , idx) => { 
//     return v*idx;
// });

//Above one will also work

let ans = arr.map(function square (v){//Here this function is an Call back function
    return v*v;
});

// The major diffrence bewteen "foreach" method and "map" is in "foreach" we perfome operation for each element in the arr while in case of "map" we create an new array and put the modified elements in that array

console.log( ans );
console.log( arr );

//map is itseLf a function
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that inside the callback function
//map returns a new array and dont modifie the original array unlike push and pop operation

let nameArr = ['Siddhant','Prakhar','Niru','bhushan','harshita'];
let nameArr1 = nameArr.map(function(v){ //As this function dont need to called some where else
    return v;//Here return statement is important or else when we will try to print this "newArr1" then it will result in an array where all element would be undefined
});

console.log(nameArr1);


let nameArr2 = ['Vishal Kumar' , 'Vaibahv Rawal' , 'Anmol Taneja'];

let ans1 = nameArr2.map(function(v){
    let a = v.split(" ");//Here a is an array
    let Fristname = a[0];
    let lastname = a[1];
    return Fristname+" opop "+lastname;
});

nameArr2.map((curr , i , arr ) =>{
    console.log(curr);
})

//Output
//[ 'Vishal opop Kumar', 'Vaibahv opop Rawal', 'Anmol opop Taneja' ]

let ans2 = nameArr2.join("&");
//Output
// Vishal Kumar&Vaibahv Rawal&Anmol Taneja

console.log(ans1);
console.log(ans2);

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

let amountInUSD = transactions.map(function(v){
    let val = (v/inrtToUsd).toFixed(2);//Convertor
    // console.log("$ "+val)
    // return ;
    return val;
})

console.log(amountInUSD);

// amountInUSD.map(function(v){
//     console.log("$ "+v)
// })
for( let ele in amountInUSD){
    console.log("$ "+amountInUSD[ele]);
}

//Terniary operation 
// condition ? output1 : output2

Array.prototype.myfun = function(cb){

    let arr = [] ;

    for( let i=0 ; i<this.length ; i++ ){
        arr.push( cb( this , this[i] ) );
    }

}

function cb ( arr , i){
    return i * 2 ;
}


let obj = {
    "hello_dear" : 123
}

console.log(obj.hello_dear)
console.log(obj["hello_dear"])