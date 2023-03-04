
// Find returns the FRIST element of an array that satisfy the condition its similar to "filter "but it only returns the frist element and thats the catch in it

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


const firstWithdrwal = transactions.find(function(n){//Returns the frist value only
       return n < 0
})

console.log(firstWithdrwal)

// Output
// -898