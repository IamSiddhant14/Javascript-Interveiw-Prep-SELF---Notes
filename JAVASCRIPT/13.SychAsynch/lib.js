function updateAccount(product , cb){

    setTimeout(function(){
       console.log(product + "Purchased");
       cb();
       cb();


    },2000);

}

function promiseWalaupdateAccount(product){
     return new Promise (function(resolve){
         setTimeout(function(){
             resolve();
         }, 5000 );
     })
}

module.exports = {
    updateAccount : updateAccount,
    promiseWalaupdateAccount : promiseWalaupdateAccount
}
