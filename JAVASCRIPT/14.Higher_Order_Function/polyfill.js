//Map
let arr = [1,2,3,4,5,6];

Array.prototype.mymap = function( arr ){

    let ans = [];

    for( let i=0; i<arr.length ; i++ ){
         ans.push( (function ab() {
            return arr[i]*2;
         })());
    }
    
    return ans;
}

console.log(arr.mymap(arr));

//Reduce

Array.prototype.myReduce = function reduce(total , arr){

    for( let i =0; i<arr.length ; i++ ){
        total += arr[i];
    }

    return total;

}

console.log(arr.myReduce(0 , arr ));