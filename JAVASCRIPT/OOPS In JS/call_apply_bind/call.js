// let obj1 = {

//     name : 'Siddhant',
//     age : 15 ,

//     fun : function(){
//         console.log(this);
//     }
    

// }

// let obj2 = {

//     name : 'Siddhant',
//     age : 15


// }

// obj1.fun.call(obj2);



let obj1 = {

    name : 'Siddhant',
    age : 15 ,

}

let obj2 = {

    name : 'sharma',
    age : 21

}

var fun =  function( a , b ){
    console.log(this);
    console.log(a+b);
}

// fun.call(obj2 , 7 , 3 );
// fun.apply( obj2 , [1 ,3]);

let ans = fun.bind( obj2 , [9 , 4]);
ans();


Function.prototype.myCall = function( context={} , ...args ){

    if( typeof(this) !== 'function' ){
        throw new Error();
    }

    context.fn = this ;
    context.fn(...args);

}

Function.prototype.myCall = function( context={} , ...args ){

    if( typeOf(this) != 'function' ){
        throw new Error ;
    }

    context.fn = this;
    context.fn(...args);
}