

function c (a , b){

    this.a = a;
    this.b = b;

    this.c = function(){
      console.log(this.a , this.b );
    }
}

c.prototype.d ='f';
c.prototype.s = function(){
    console.log('f');
}

const d = new c('f' , 'h');
const j = new c('v' , 'k');

console.log(d.__proto__ == c.prototype)