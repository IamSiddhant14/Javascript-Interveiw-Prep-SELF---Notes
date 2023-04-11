function  Car ( color , model ){

    // This function will return an object when used as a constructor 

    // This is property 
    this.color = color ;
    this.model = model ;

    //  THis is Method 
    this.login = function(){
        console.log('Login');
    }

}

//  THis is Method 
Car.prototype.startEngine = function(){
    console.log('Started ');
};

// This is property 
Car.prototype.companey = "Honda"
// This function will return an object when used as a constructor 

// Below is the instance of that class

let instance1 = new Car('black' , 2023 );
let instance2 = new Car('blue' , 2020 );
instance2.startEngine();
console.log(instance2.companey)

console.log(instance2.__proto__);
console.log(instance2.__proto__.isPrototypeOf(instance1));

console.log(Car.prototype);
console.log(instance1 , instance2 );

instance2.__proto__ == Car.prototype ;

const arr = [1, 2, 3, 4 ];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
