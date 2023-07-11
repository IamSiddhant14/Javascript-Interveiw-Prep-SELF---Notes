// Normal function calling

// function register(){
//   console.log("Register End ");
// }

// function sendMail(){
//     console.log("email End ");
// }

// function login(){
//     console.log("login End ");
// }

// function getUserData(){
//     console.log("getUserData End "); 
// }

// function displayUserData(){
//     console.log("displayUserData End ");
// }


// register();
// sendMail();
// login();
// getUserData();
// displayUserData();


// Function Callback chaining (Might result in call back hell)

// function register(send){
//   console.log("Register End ");
//   send(login);
// }

// function  sendMail(lo){
//     console.log("email End ");
//     lo(getUserData);
// }

// function login(getUser){
//     console.log("login End ");
//     getUser(displayUserData);
// }

// function getUserData(display){
//     console.log("getUserData End ");
//     display();
// }

// function displayUserData(){
//     console.log("displayUserData End ");
// }


// register(sendMail);


// Promises

function register(){
  return new Promise((resolve , reject) => {
      resolve("Register End ");
  })
}

function sendMail(){
    return new Promise((resolve , reject) =>{
        resolve("Email End ");
    })
}

function login(){
    return new Promise((resolve , reject) => {
        resolve("login End "); 
    })
}

function getUserData(){
    return new Promise((resolve , reject) => {
        resolve("getUserData End ");
    })
}

function displayUserData(){
        return new Promise((resolve , reject) => {
            reject("displayUserData End err");
        })
}

//  This will also result in piramide dome structure because of which we use return keyword instead 

// register().then((res) => {
//     console.log(res);
//     sendMail().then((res) => {
//         console.log(res);
//         login().then((res) => {
//             console.log(res);
//             getUserData().then((res) => {
//                 console.log(res);
//                 displayUserData().then((res) => {
//                     console.log(res);
//                 }).catch((err) => {
//                     console.log(err);
//                 })
//             })
//         })
//     })
// })


// const sub = new Promise((resolve , reject) => {
//    resolve("Done with it ")
// });

// const sub1 = Promise.resolve("Hello")
// const sub2 = Promise.reject("Hello")


// register().then(sendMail).then(login).then(getUserData).then(displayUserData).catch((err)=>{
//     console.log("We fucked up", err)
// })

register().then((res) => {
    console.log(res);
    return sendMail()
})
.then((res) => {
    console.log(res);
    return login();
})
.then((res) => {
    console.log(res);
    return getUserData();
})
.then((res) => {
    console.log(res);
    return displayUserData();
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})




// fetch('https://fakestoreapi.com/products/1').then((data) =>{
//     return data.json() ;
// }).then((val) => console.log(val)).catch((err) => console.log(err));


// async function result(){
      
//     const data = await fetch('https://fakestoreapi.com/products/1');
//     const val = await data.json();
//     console.log(val);
  
// }

// result().then().catch((err) => {
//     console.log(err);
// });

// Async Await 

// function register(){
//   return new Promise((resolve , reject) => {
//       resolve("Register End ");
//   })
// }

// function sendMail(){
//     return new Promise((resolve , reject) =>{
//         resolve("email End ");
//     })
// }

// function login(){
//     return new Promise((resolve , reject) =>{
//         resolve("login End ");
//     })
// }

// function getUserData(){
//     return new Promise((resolve , reject) =>{
//         resolve("getUserData End ");
//         reject("getUserData End ");
//     })
// }

// function displayUserData(){
//     return new Promise((resolve , reject) =>{
//         resolve("displayUserData End ");
//     })
// }

// async function b (){

//     try{

//         await register();
//         await sendMail();
//         await login();
//         await getUserData();
//         await displayUserData();

//     }catch(err){

//         console.log("Error",err);

//     }
   
// }//This async funtion also returns a promise 

// b().then(()=>{
//     console.log("Its Over");
// }).catch((err) =>{
//  console.log(err);
// });

// If false promise is not returned in then the catch statemnt then in that case it will result in getting int the next then statement

// Promise combinator :-
// 1.> 

// If anyone of the promise fail this is going to fail
//  Initialized , 
// Promise.all([

//     register(),
//     sendMail(),
//     login()
//    list of all the statements returning a promise\

// ]).then((res) => {
//     console.log(res)
// }).catch((err) =>{
//  console.log(err)
// })

// If gives us that first promise that will be rejected or resolved first

// 2.> Promise.race([
//    list of all the statements returning a promise
// ]).then((res) =>{
    // console.log(res)
// }).catch((err) =>{
//  console.log(err)
// })

//  Gives the exact status of each promise unlike all 

// 3.> Promise.allsettled([
//    list of all the statements returning a promise
// ]).then((res) =>{
    // console.log(res)
// }).catch((err) =>{
//  console.log(err)
// })

// It will give the fullfilled and ignore the rejected promises

// 4.>
 Promise.any([
//    list of all the statements returning a promise
]).then((res) =>{
    console.log(res)
}).catch((err) =>{
 console.log(err)
})

const s = new Promise((resolve , reject) => {
    resolve("Hi");
});

const ss = new Promise((resolve , reject) => {
    reject("no");
});

ss.then((res) => console.log(res)).catch((err) => console.log(err));
 
const short = Promise.resolve(" Done with the promise ");

short.then((res) => {
    console.log(res);
})

const hort2 = Promise.reject("Done with reject ");
hort2.then((res) => console.log(res)).catch((res) => console.log(res , "adefrghfaSADGS"))

// ************************************************************** //

const second = new Promise((resolve , reject ) => { resolve('from second')});

const first = new Promise((resolve , reject ) => {
    return resolve(second )
}).then((res) => {
    return res;
}).then((res) => console.log(res) );


// ************************************************************** //

function pr1(){
    new Promise((resolve , reject ) => {
        resolve('pr1');
    })
}
function pr2(){
    new Promise((resolve , reject ) => {
        resolve('pr2');
    })
}
function pr3 (){
    new Promise((resolve , reject ) => {
        resolve('pr3');
    })
}
const listOfPromise = [ pr1() , pr2() , pr3() ];

function resolveRecursive(listOfPromise){
 
    if(listOfPromise.length == 0 ){
        return;
    }

    const pr = listOfPromise.shift();
    pr.then((res) => console.log(res)).catch((res) => console.log(res));
 
    resolveRecursive(listOfPromise);

}

resolveRecursive(listOfPromise);

// The sync code which is present inside the async code is been executed first , independt of the order in which they are present 

//  If reject is not passes by promise it will go inside the resolve part 

//  If a string or anything thing else except a reject is there then it will go inside the " then " block 

// 'throw defeat' reffers to error as it have the 'throw 'keyword  in it and it will go inside the catch block 

//  Promises have three stages - pending , fullfilled , rejected and settled 

// When 'throw' keyword is there then only error is there 

try{

}catch(err){

}finally{

}


