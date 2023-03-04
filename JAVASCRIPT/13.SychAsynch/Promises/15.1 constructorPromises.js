let promise = new Promise(function(resolve , reject){

    let a = 2;
    let b = 2;

    if( a == b){
       resolve('Yes they are equal');
    }else{
       reject('No the values are not equal');
    }
})

promise

.then(function(data){

    console.log('EQUAL', data);

}).catch(function(data){

    console.log('NOT EQUAL',data);

})

// promise.catch(function(){
//     console.log('Not equal');
// })