let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "M" },
    { name: "C", age: 24, gender: "F" },
    { name: "D", age: 44, gender: "F" },
    { name: "E", age: 44, gender: "M" },
    { name: "I", age: 28, gender: "F" },
    { name: "G", age: 36, gender: "M" },
    { name: "H", age: 47, gender: "F" }
]

// let ans = arr.filter(function(v){

//     if(v.gender == "F"){
//         return true;
//     }
//     else{
//         return false;
//     }

// })

// console.log(ans)

// let finaleAns= ans.map(function(v){
//     let val = v.age;
//     return val;
// })

// console.log(finaleAns);


// **************************** OR THE OTHER OPTIMIZED APPROCH COULD BE *********************
 
let ans = arr.filter(function(v){

    if(v.gender == "F"){
        return true;
    }
    // else{
    //     return false;
    // }

}).map(function(v){
    let val = v.age;
    return val;
})

console.log(ans);

// output
// [ 24, 44, 28, 47 ]
