const memo = (cb) => {

    let cache = {};

    return function(...args){
        var n = args[0];
        if( n in cache){
            return cache[n];
        }else{
            var result = cb(n);
            cache[n] = result ;
            return result;
        }

    }

}
 

const memo1 = (cb) =>{

    let res = {};

    return function(...args){
        let n = args[0];

        if( n in obj ){
            return obj[n];
        }else{
            let ans = cb(n);
            res[n] = ans;
            return ans;
        }
    }
}