// const memo = (cb) => {

//     let cache = {};

//     return function(...args){
//         var n = args[0];
//         if( n in cache){
//             return cache[n];
//         }else{
//             var result = cb(n);
//             cache[n] = result ;
//             return result;
//         }

//     }

// }

let memo = (cb) => {

    let res = {};
    return function(...args){

        let v = args[0];
        if(v in res ){
           return res.v;
        }else{
           res.v = cb(v);
           return res.v;
        }
    }
}


function memo( ){


    let res = {} ;

    return function(){

        let v = arguments[0];

        if( v in res ){
            return res.v ;
        }else{
            let a = cb(v);
            res.v = a ;
            return a;
        }
    }
}
