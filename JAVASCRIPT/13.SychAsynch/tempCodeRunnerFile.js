fetch('https://fakestoreapi.com/products/1').then((res) => {
    console.log(res);
    return res.json();
}).then((res) => console.log(res));