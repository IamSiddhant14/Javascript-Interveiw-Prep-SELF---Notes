// Every element in the array should follow the condition in order return true , if any one of the element of the array dont folow the conditon then it would result in false

const transactions = [1000, 3000, 4000, -2000, 898, 3800,4500];


let anyDeposit = transactions.every(function(n){//Return Boolean
       return n>0
})

console.log(anyDeposit);

// Output
// False