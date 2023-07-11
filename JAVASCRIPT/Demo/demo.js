// function a( ){

//     return new Promise((resolve , reject ) => {
//         resolve('Inside A')
//     })
// }


// function b(){

//     return new Promise((resolve , reject ) => {
//         resolve('Inside B')
//     })
// }

// function c(){
//     return new Promise((resolve , reject ) => {
//         resolve("Inside c");
//         // reject('Bye From c and Rejected');
//     })
// }


// a().then(b).then(c).catch((err) => {
//     console.log('Err');
// })

// a().then((res) => {
//     console.log(res);
//     b().then((res) => {
//        console.log(res);
//        c().then((res) => {
//         console.log(res);
//        }).catch((err) => {
//         console.log(err);
//        })
//     })
// })


// a().then((res) => {
//     console.log(res);
//     return b();
// }).then((res) => {
//     console.log(res);
//     return c();
// }).then((res) => {
//     console.log(res);
// })


// async function k( ){

//     try{
//         const g = await a();
//         console.log(g)
//         const h = await b();
//         console.log(h)
//         const j = await c();
//         console.log(j)
//     }catch(err){
//       console.log(err);
//     }

// }

// k().then(() => {
//     console.log('SuccessFull')
// }).catch((err) => {
//     console.log(err)
// })


// const e = Promise.resolve('From E');
// e.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// });

// const f = Promise.reject('From F');
// f.then((res) => {
//     console.log(res+'daf');
// }).catch((err) => {
//     console.log(err);
// })


// const l = Promise.resolve('LLLLL');
// const z = Promise.reject('ZZZZZ');

// l.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log('err');
// })

// z.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


// Promise.all([ a() , b() , c() ]).then((res) => {
//     console.log('resolve');
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.race([ a() , b() , c() ]).then((res) => {
//     console.log(res);
// }).then((err) => {
//     console.log(err);
// })

// Promise.allSettled([ a() , b() , c() ]).then((res) => {
//     console.log(res);
// }).then((err) => {
//     console.log(err);
// })


// Promise.any([ a() , b() , c() ]).then((res) => {
//     console.log(res);
// }).then((err) => {
//     console.log(err);
// });

// const e = new Promise((resolve , reject ) => {
//     resolve("From e");
// })


// const f = new Promise((resolve, reject ) => {
//     reject("Reject f");
// })


// const g = Promise.resolve("From g");

// const h= Promise.reject("Reject h");




function a(val){

    return new Promise((resolve , reject ) => {
        resolve("From a"+val);
    })
}

function b(val){

    return new Promise((resolve , reject ) => {
        resolve(`From b ${val}`)
    })
}

function c(val){

    return new Promise((resolve , reject ) => {
        // resolve(`From c ${val}`);
        reject('rejected from c', val )
    })
}

function d(val){
    return new Promise((resolve , reject ) => {
        // resolve(" Rejected from D " , val);
        reject(" Rejected from D " , val);
    })
}

// a('aa').then((con) => {
//     console.log(con);
//     b('bb').then((con) => {
//         console.log(con);
//         c('cc').then((con) => {
//             console.log(con);
//             d('dd').then((con) => {
//                 console.log(con);
//             }).catch((v) => {
//                 console.log(`We fucked up ${v}`)
//             })
//         })
//     })
// })

// a('aa').then((val) => {
//     console.log(val);
//     return b('bb');
// }).then((val) => {
//     console.log(val);
//     return c('cc');
// }).then((val) => {
//     console.log(val);
//     return d('dd');
// }).then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log(err , 'err');
// })


async function calllll(){

    try{

        const k = await a('aa');
        console.log(k);

        const l = await b('bb');
        console.log(l);

        const z = await c('cc');
        console.log(z);

        const x = await d('dd');
        console.log(x)

    }catch(err){

        console.log( err , 'err' );

    }
   
}

calllll().then(() => {
    console.log('All good')
}).catch((err) => {
    console.log('err',err );
})


// Promise.all([ a('aa') , b('bb') , c('cc') ]).then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err);
// })

// Promise.race([ a('aa') , b('bb') , c('cc') ]).then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err);
// })

// Promise.allSettled([ a('aa') , b('bb') , c('cc') ]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err);
// })

// Promise.any([ a('aa') , b('bb') , c('cc') ]).then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err);
// })