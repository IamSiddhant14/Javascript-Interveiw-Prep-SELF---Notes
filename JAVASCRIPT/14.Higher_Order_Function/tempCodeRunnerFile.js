Array.prototype.myMap = function(cb){

    let temp = [];

    for( let i = 0 ; i<this.length ; i++ ){
        return temp.push(cb( this[i] , i ) , this )
    }

    return temp  ;

}

const a = arr.myMap( function(f){
   return ++f;
} );

console.log(a)