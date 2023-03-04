// Reduce- 
// Reduces all the elments in an array into a single value.

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]

let evenNoArr = arr.filter(function(n){

    // Since here all values are not being returned because of which we are using "filter" higher order function instead of "map" higher order function, because in case of "map" we are supposed to return all the values 

    if( n % 2 == 0){
        return true;
    }

    // return  (n % 2 == 0) == true ;

})

console.log(evenNoArr);

//Output
// [ 2, 4, 6, 8, 12 ]

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const ans = transactions.filter(function(n){
    if( n >= 0){
        return true;
    }

})

console.log(ans);

//Output
// [ 1000, 3000, 4000, 2000, 3800 ]

