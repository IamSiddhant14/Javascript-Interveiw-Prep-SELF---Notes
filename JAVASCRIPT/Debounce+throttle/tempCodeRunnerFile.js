let count = 0;
function cb (){
     console.log("fetching" , count++)
}

function call (cb){
    setTimeout(cb , 300 );
}

call (cb)