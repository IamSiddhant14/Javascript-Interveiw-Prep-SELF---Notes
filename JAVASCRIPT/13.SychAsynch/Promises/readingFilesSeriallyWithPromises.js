// const fs = require('fs');

// let f1p = fs.promises.readFile('./f1.txt');

// f1p.then(cb);

// function cb(data){

//     console.log('File data ->' + data);
//     let f2p = fs.promises.readFile('./f2.txt');

//     f2p.then(cb2);
// }

// function cb2 (data){

//     console.log("File data -->"+ data);
//     let f3p = fs.promises.readFile('./f2.txt');

//     f3p.then(cb3);
     

// }

// function cb3 (data){

//     console.log("File data -->"+ data); 
// }



const fs = require('fs');

let f1p = fs.promises.readFile('./f1.txt');

function cb1(data){

    console.log('File data ->' + data);
    let f2p = fs.promises.readFile('./f2.txt');

    return f2p;
}

function cb2 (data){

    console.log("File data -->"+ data);
    let f3p = fs.promises.readFile('./f3.txt');

    return f3p;
     

}

function cb3 (data){

    console.log("File data -->"+ data); 
    
}

f1p.then(cb1).then(cb2).then(cb3)

function ans ( obj , parent , res = {} ){

    for( let key in obj ){

        let prop = parent ? parent + _ + key : key ;

        if( typeof(key) == 'object'){
             ans( key , prop , res );

        }else{
            res[prop] = obj.key;
        }
    }
}