function placeOrder(drink){

   return new Promise(function(resolve , reject){

    if( drink === 'coffee'){
        resolve("Order for Coffee");
    } else {
        reject( "Order cannot be placed");
    }


   });

}


function processOrder(order){
    return new Promise (function(resolve){

        console.log("Order is being processed");
        resolve(`${order} Serverd`);

    })
}


// placeOrder("coffee")
//   .then(function(demand){
//       console.log(demand);

//       let orderIsProccesed = processOrder(demand);
//       return orderIsProccesed;

//   })

//   .then(function(orderServed){
//       console.log(orderServed);

//   }).catch(function(err){
//       console.log(err);

//   });



//   Async Await Solution :

// wrapping it in fuction is neccassary

async function servverOrder(){

    try {

        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);
    
        let processOrder = await processOrder(orderPlaced);
        console.log(processOrder);
        
    } catch (error) {

        console.log(error);
    }

}
