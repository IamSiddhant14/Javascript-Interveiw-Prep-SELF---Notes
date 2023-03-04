//This will work exactly as Reduce the only thing is that it iterate over the array from right to left

let arr = [2 , 3, 4, 5, 6]


let sumFromRight = arr.reduceRight(function(acc , value){
      console.log( " --> " + value)
      let upadtedSum = acc+value
      return upadtedSum
} , 0)


console.log(sumFromRight)