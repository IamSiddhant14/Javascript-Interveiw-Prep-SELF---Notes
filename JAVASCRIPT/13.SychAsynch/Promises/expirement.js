const fs = require('fs');

let f1p = fs.promises.readFile('f1.txt');

f1p.then( cb1 ).then( cb2 ).then( cb3).then( cb4).catch(function(){
   console.log('Canada')
});

function cb1 (data){
   console.log("hello 1"+ data );
   let f2p = fs.promises.readFile('f1.txt');
   return f2p ;
}


function cb2 (data){
   console.log("hello 2"+ data );
   let f3p = fs.promises.readFile('f1.txt');
   return f3p ;
}


function cb3 (data){
   console.log("hello"+ data );
   let f4p = fs.promises.readFile('f1.txt');
   return f4p ;
}


function cb4 (data){
   console.log("hello"+ data );
}
