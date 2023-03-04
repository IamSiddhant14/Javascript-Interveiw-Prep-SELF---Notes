class Person{

    name;// property 

    constructor(name){//constrctor function
        this.name = name;// Here this refer to the class
    }

    great(){ //Method , this is by default present in the prototype in class 
        console.log(" Good Morning " + this.name );
    }

}

// class GreatPerson extends Person{
    
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

// p2.great();

// console.log(p2.name);

// second way of creating a class using a function

function BankAccount( customerName , balance = 0)  {
   
    this.name = customerName;//property
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function(amount){//method
    //      this.balance += amount ;
    // }

    this.withdraw = function(amount){

      if( amount > this.balance  ){
          console.log("insufficient funds");
          return;
      }

      this.balance -= amount ; 

    }

}

BankAccount.prototype.deposit = function(amount){//method
     this.balance += amount ;
}

BankAccount.prototype.test = "Test is been scheduled for tommorow"
// All the object created from this class will have the access to the prototype of the class

console.log( BankAccount.prototype )

const a = new BankAccount('SIdd' , 0 );


a.deposit(3000);
console.log(a);
console.log( BankAccount.balance);  

const b = new BankAccount( 'Pra' , 5678);