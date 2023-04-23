// We could see debouncing happening when it comes to resize , search bar , scroll event etc.

// Debounce happens when the diffrence bewteen the two key strokes/ event is more than the mentioned timing , it is method to limit the calling of a function for optimiztion 

// Debounce 
// {

    function callMe() {
        console.log('called');
    }

    let count = 0;
    let callIsMade = 0;

    function doSomeMagic(call, time) {

        let t;

        return function () {
            console.log(count++);

            if (t) clearTimeout(t);
            t = setTimeout(() => {
                console.log(`${callIsMade++} times Api called `);
                call()
            }, time);
        }

    }

    const betterFunction = doSomeMagic(callMe, 800);



// }



// Throttle 




// function callMe() {
//     console.log('called');
// }

// let count = 0;
// let callIsMade = 0;

// function doSomeMagic(call, time) {

//     return function () {
//         console.log(count++);

//         setTimeout(() => {
//             console.log(`${callIsMade++} times Api called `);
//             call()
//         }, time);
//     }

// }

// const betterFunction = doSomeMagic(callMe, 800);