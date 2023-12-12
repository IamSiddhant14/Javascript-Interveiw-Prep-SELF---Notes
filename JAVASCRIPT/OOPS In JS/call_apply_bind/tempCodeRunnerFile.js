Function.prototype.myCall = function( context={} , ...args ){

    if( typeof(this) !== 'function' ){
        throw new Error();
    }

    context.fn = this ;
    context.fn(...args);

}