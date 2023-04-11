// We could see debouncing happening when it comes to resize , search bar , scroll event etc.

// Debounce happens when the diffrence bewteen the two key strokes/ event is more than the mentioned timing , it is method to limit the calling of a function for optimiztion 

let count = 0;

function getData() {
    console.log("Fetching Data" + count++);
}

function doSomeMagic(cb, delay) {

    let time;

    return function () {
        if (time) clearTimeout(time);
        time = setTimeout(() => {
            cb();
        }, delay);
    }
}

const BetterFunction = doSomeMagic(getData, 300);
