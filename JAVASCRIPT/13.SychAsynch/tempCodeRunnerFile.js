function a() {
    return new Promise((resolve, reject) => {
        resolve('a');
    })
}
function b() {
    return new Promise((resolve, reject) => {
        resolve('b');
    });

}
function c() {
    return new Promise((resolve, reject) => {
        resolve('c');
    });
}
function d() {
    return new Promise((resolve, reject) => {
        resolve('d');
    });
}


// a().then((e) => {
//     console.log(e);
//     b().then((e) =>{
//         console.log(e) ;
//         c().then((e) => {
//             console.log(e);
//             d().then((e)=> {
//                 console.log(e)
//             })
//         })
//     })
// });

// a().then((e) => {
//     console.log(e);
//     return b();
// })
// .then((e) => {
//     console.log(e);
//     return c();
// })
// .then((e) =>{
//     console.log(e);
//     return d();
// })
// .then((e)=>{
//     console.log(e)
// });

a().then(b).then(c).then(d).catch((err) => {
    console.log(err);
});

function e(){
    return new Promise((resolve , reject) => {
        resolve('Hi')
    })
}

function f(){
    return new Promise((resolve , reject ) => {
        resolve('hii')
    })
}

