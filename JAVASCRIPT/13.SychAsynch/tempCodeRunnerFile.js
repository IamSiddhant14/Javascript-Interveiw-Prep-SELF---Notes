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


register().then(sendMail).then(login).then(getUserData).then(displayUserData).catch((err)=>{
    console.log("We fucked up", err)
})