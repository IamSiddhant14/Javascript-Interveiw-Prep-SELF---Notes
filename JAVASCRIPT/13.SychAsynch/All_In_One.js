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


// Function Callback chaining(Might result in call back hell)

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
            resolve("Yo yo");
        })
}

// register().then(sendMail).then(login).then(getUserData).then(displayUserData).catch(()=>{
//     console.log("We fucked up")
// })


register().then(
    sendMail
 ).then((d) => {
    console.log(d);// only one statement valid at a time
    login
 }).then(getUserData).then(displayUserData).catch(()=>{
    console.log("We fucked up")
})



fetch('https://fakestoreapi.com/products/1').then((data) =>{
    return data.json() ;
}).then((val) => console.log(val)).catch((err) => console.log(err));


async function result(){
      
    const data = await fetch('https://fakestoreapi.com/products/1');
    const val = await data.json();
    console.log(val);
  
}

result().then().catch((err) => {
    console.log(err);
});

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

// 1.> Promise.all([
//    list of all the statements returning a promise
// ]).then((res) =>{
    // console.log(res)
// }).catch((err) =>{
//  console.log(err)
// })


// If anyone of the promise fail this is going to fail

// 2.> Promise.race([
//    list of all the statements returning a promise
// ]).then((res) =>{
    // console.log(res)
// }).catch((err) =>{
//  console.log(err)
// })

// If any one of the promise is resolve/ rejected it will give us that


// 3.> Promise.allsettled([
//    list of all the statements returning a promise
// ]).then((res) =>{
    // console.log(res)
// }).catch((err) =>{
//  console.log(err)
// })

// It will give the fullfilled and the rejected promises

// 4.> Promise.any([
//    list of all the statements returning a promise
// ]).then((res) =>{
    // console.log(res)
// }).catch((err) =>{
//  console.log(err)
// })

// It will give the first successfull promise , if all fail then fail
