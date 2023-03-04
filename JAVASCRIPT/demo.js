// class Abc{

//     name;

//     constructor(name){
//         this.name = name;
//     }

//     great(){
//         console.log(this.name);
//     }
// }

// Abc.prototype.val = "sd";
// console.log(Abc.prototype);

// class Abcd extends Abc {

//     f ;

//     constructor(help) {
//         super("ando")
//         this.f = help;
//     }

//     defd(){
//         console.log(this.f);
//     }

// }

// Abcd.prototype.n = "hello";
// console.log(Abcd.prototype);

// const b  = new Abcd('dsacd');

// b.defd();
// console.log(b)

// function Build ( name , val ){

//     this.coust = name;
//     this.v = val;

//     this.vaa = function(name){
//         console.log(this.coust);
//     }


// }

// Build.prototype.app = "hello"

// Build.prototype.ap = function df(){
//     console.log("hi");
// }

// console.log(Build.prototype);

function a(){
    return new Promise ((resolve , reject ) => {
        resolve("From A");
    })
}

function b(){
    return new Promise((resolve , reject) => {
        resolve("From B");
    })
}

function c(){
    return new Promise((resolve , reject) => {
        resolve("From C");
    })
}

function d(){
    return new Promise((resolve , reject) => {
        reject("From D");
    })
}

a().then((data) => {
    console.log(data);
    b
}).then(c).then(d).catch((d) => {
    console.log(d)
})

async function e(){
    try{
        await a();
        await b();
        await c();
        await d();
    }catch(err){
      console.log(err);
    }

    
}

e().then(() => {
    console.log('successfull')
}).catch((d) => {
    console.log(d)
});