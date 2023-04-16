function a (b){
    return function(c){
        console.log('here')
        if(c) return a(b+c) ;
        return b;
    }
}


a(3)(4)(5)(6)(7)(8)(9)();