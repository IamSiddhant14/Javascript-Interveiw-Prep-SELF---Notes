const us = {
    name: 'sidd',
    rollNo: '0827ci191054',
    abc(){
      console.log(this)
    },
    f : obc = () =>{
        console.log(this)
    }
    ,
    ref: this,
    newOj: {
        name: '738',
        re: this,
        n: {
            r: this,
            o: {
                reff: this,
                g : {
                    name : 'op',
                    ro : this 
                }
            }
        }
    }
}

us.abc()
us.f();
console.log(us.ref)
console.log(us.newOj.re);
console.log(us.newOj.n.r);
console.log(us.newOj.n.o.reff);
console.log(us.newOj.n.o.g.ro)
console.log(us.newOj.n.o.g.ro.name)
