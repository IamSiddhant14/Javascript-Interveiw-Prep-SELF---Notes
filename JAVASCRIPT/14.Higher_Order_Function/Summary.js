// Higher order function are thoughs functions which operates on other function

// In simple words, A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

//Return keyword is very important in higher order functions

let arr = [1, 2, 3, 4, 5, 6];

//Map :-
// map returns a new array , without modifing the original array also 

let newArr = arr.map((ele, index, arr) => {
    return ((ele * index));
    //    return ((ele*index) + arr);
})

console.log(newArr);

let newArr2 = arr.map((curr, index, arr) => {
    return ((curr * index + 3));
})

console.log(newArr2);

// The major diffrence bewteen map and forEach is , in case of map we get an new array itself also we can do chaing in map while in case of forEach chaining is not possiblef

//filtre :-

let newArr3 = arr.filter((ele, index, arr) => {

    if (ele % 2 == 0) {
        return true;
    }

});

console.log(newArr3);

//reduce :-

const val = arr.reduce((acc, curr) => {// accumator , current value
    return acc + curr;
}, 0)// Inital value

console.log(val);

const val2 = arr.reduce((acc, curr) => {
    return acc + curr;
    
}, 0);// Initale value


// Polyfill of map 

Array.prototype.mymap = function( this , cb ){ 
    
    let temp = [];
    for( let i = 0; i<this.length ; i++ ){
       temp.push(cb(this[i]));
    }

    return temp;

}

// Polyfill of filtre

Array.prototype.myfiltre = function( this , cb ){

    let temp = [];
    for( let i =0; i<this.length ; i++ ){
        if( cb(this[i]) ){
            temp.push(this[i]);
        }
    }

    return temp; 
}

//Polyfill of reduce 

Array.prototype.reduce = function( this , cb , ini ){

    let inii = ini;
    for( let i = 0; i<this.length ; i++){
        inii += this[i];
    }

    return inii;

}

