function privateCounter(){

    let count = 1;

    function add(){
        ++count;
    }

    function sub(){
        count--;
    }

    return {
        add , sub , count
    }
}

const a = privateCounter();
a.add();
console.log(a.count);