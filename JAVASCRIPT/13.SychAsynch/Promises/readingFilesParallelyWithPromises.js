const fs = require('fs');

let f1p = fs.promises.readFile("f1.txt");

let f2p = fs.promises.readFile("f2.txt"); 

let f3p = fs.promises.readFile("f3.txt"); 


function cb(data){
  console.log( "File Data -- >" + data);
}


f1p.then(function(data){
  console.log(" "+data)
    cb(data);
    // cb;
})

f2p.then(cb);//In case of passing an callback function no need pass the parameters , but while declaring the function there it-self then we need to pass in the parameters , in fact we never pass parameter in case call back function

f3p.then(cb);


//*********************************************************/

