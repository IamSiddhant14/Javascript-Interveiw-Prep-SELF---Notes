let arr = [2 ,3 ,4, 5, 6];

let sum = arr.reduce(function (sum , val){//Here this sum value is been passed in the last and val reffer to value for iteration of value in that array 

    let updatedSum = sum+val;
    return updatedSum;


}, 0 );
console.log( sum);

//Output
// 20


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let balance = transactions.filter(function(amount){
       return amount >0
}).reduce(function(sum, amount){//
      return sum+amount//This is returned to the next iteration with updated sum value to sum+amount
 } , 0)//here this 0 is the accumulator 

 console.log(balance);