
function sum(a){
    return function(b){
      return b ? sum(a+b) : a;
    }
}

const aa = sum(1)(2)(3)(4)();
console.log(aa);