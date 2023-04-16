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


function getans ( ope ){
    return function(a){
        return function(b){
            if( ope == '+') return a+b;
            if( ope == '-') return a-b;
        }
    }
}
 

console.log(getans('+')(2)(3));

function a (b){
    return function(c){
        console.log('here')
        if(c) return a(b+c) ;
        return b;
    }
}


a(3)(4)(5)(6)(7)(8)(9)();