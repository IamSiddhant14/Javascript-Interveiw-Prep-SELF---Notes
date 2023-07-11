 function add(a, b) {
    return a + b;
}



function add(a) {
    return function (b) {
        return a + b;
    }
}

add(3)(7);

function evalute(ope) {
    return function (a) {
        return function (b) {
            if (ope == 'sum') {
                return a + b;
            }
        }
    }
}




evalute(sum)(3)(4);
//Infinte currying

function infi(a){
    return function (b){
        if( b) return infi(a+b);
        return a ;
    }
}

const ans = infi(2)(3)(4)(5)();
console.log( ans );

//partial Application

function ad(a) {
    return function (d, e) {
        return a + d + e;
    }
}


function eval(v) {
    return function(a){
        return function (b) {

            if (v == 'sum') return a+b;
            if (v == 'mul') return a*b;
            if (v == 'div') return a/b;
        }
    }
}


// Polyfill


function sum(a){
   return function(b){
     return function(c){
        return function(d){
            console.log( a , b , c , d  );
        }
    }
   }
}

function sum(a){
    return function( b , c , d ){
        console.log(a , b, c, d, );
    }
}

