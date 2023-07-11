class Person {

    name;// property 

    constructor(name) {//constrctor function , 'This' refers to everything inside the constructor 
        this.name = name;// Here this refer to the class
    }

    great() { //Method , this is by default present in the prototype in class 
        console.log(" Good Morning " + this.name);
    }

    get description() {
        return (`This is ${this.name}`);

    }

    set changeColor(color) {
        this.color = color;
    }

}

// Static method are present on the class only and cannot be accessed by its instance 

Person.breakMethod = function () {
    console.log("This is break ");
}

// class GreatPerson extends Person {

//     attitude = 'cool';

//     greet(){
//         console.log("Greets in really good manner");
//     }

// }


// const p1 =new Person("siddhant");
// console.log(p1);

// const p2 = new Person("Prakhar");
// console.log(p2);

// const p3 = new GreatPerson("Shikhar");
// console.log(p3.attitude);

// The getter and setter are been accessed like that of the property only 

p3.description;
p3.changeColor = 'green';

// p2.great();

// console.log(p2.name);

// second way of creating a class using a function

function BankAccount(customerName, balance = 0) {

    this.name = customerName;//property
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function(amount){//method
    //      this.balance += amount ;
    // }

    this.withdraw = function (amount) {

        if (amount > this.balance) {
            console.log("insufficient funds");
            return;
        }

        this.balance -= amount;

    }

}

BankAccount.prototype.deposit = function (amount) {//method
    this.balance += amount;
}

BankAccount.prototype.test = "Test is been scheduled for tommorow"
// All the object created from this class will have the access to the prototype of the class

console.log(BankAccount.prototype)

const a = new BankAccount('SIdd', 0);


a.deposit(3000);
console.log(a);
console.log(BankAccount.balance);

const b = new BankAccount('Pra', 5678);








// *****************************************************************   FUNCTIONAL WAY(ES-5)    ***********************************************************************

function Car(color, model) {

    // This function will return an object when used as a constructor 

    // This is property 
    this.color = color;
    this.model = model;

    //  THis is Method 
    this.login = function () {
        console.log('Login');
    }

}

//  THis is Method 
Car.prototype.startEngine = function () {
    console.log('Started ');
};

// This is property 
Car.prototype.companey = "Honda"
// This function will return an object when used as a construc tor 

// Below is the instance of that class

let instance1 = new Car('black', 2023);
let instance2 = new Car('blue', 2020);
instance2.startEngine();
console.log(instance2.companey)

console.log(instance2.__proto__);
console.log(instance2.__proto__.isPrototypeOf(instance1));

console.log(Car.prototype);
console.log(instance1, instance2);

instance2.__proto__ == Car.prototype;

const arr = [1, 2, 3, 4];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

// EveryThing Starts with a object prototype 

// this in a class refers to the method and property present inside the constructor method 

class ca {
   
    name ;

    constructor( n , t ){
       this.name = n;
       this.t = t;
    }

    meth(){
        console.log('Hi')
    }

    get getting(){
        return `hi ${name}` ;
    }

    set setting(val){
        return this.name = val
    }
}


ca.funcccc = function(){
    console.log('This is a  static function');
}

class caaa extends ca {

    prop ; 

    constructor( a , b, c ){
        super( a , b );
        this.prop = c;
    }

}

const mc = new ca( 4 , 3 );
console.log(mc.name) ;
mc.meth();
console.log(mc.getting);
console.log(mc.setting = 'green' ) ;
console.log(mc.__proto__);
console.log(ca.prototype);

const bc = new caaa( 4 , 5 , 6 );

console.log(bc.prop);
console.log(bc.meth);
console.log(bc.name);
console.log(bc.__proto__);
console.log( ca.prototype == mc.__proto__ );
console.log(caaa.prototype);


