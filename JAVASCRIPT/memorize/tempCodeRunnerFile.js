function call(j){

    let v = 1 ;

    for( let i=0 ; i<j ; i++ ){
        v = v * i;
    }

    return v ;
}


function memo( cb ){

    let cache = {} ;

    return function (...args){

        let v = args[0];
       
        if( cache[v] ){

           console.log(" I was present in Cache ")
            return cache[v];

        }else{

            console.log(" Pushed into the cache ")
            const ans = cb(v);
            cache[v] = ans ;
            console.log(cache)
            return ans;

        }

    }


}


console.time()

const a =memo(call);
console.log(a(100));
console.log(a(9));
console.log(a(89));
console.log(a(34));

console.timeEnd();
