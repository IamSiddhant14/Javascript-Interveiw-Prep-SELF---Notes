setTimeout(()=>{
    console.log(`
                 H
                  e
                   l
                    l
                     o 
                      
                        W
                         o
                          r
                           l
                            d
                            `);
}, 3000);

function greeting(name , role){
    console.log(`${name} -- ${role}`);
}

setTimeout(greeting , 2000 , 'Siddhant' , 54)

function cool( he , she ){
    console.log( `${he} <--> ${she}`);
}

setTimeout(cool , 2000 , 'one' , 'two' );