//Objects - They exist in key value pair 
//key && value collectively is know as property
//keys are by default string if written in double quotes or not in object 

const objj = new Object();
objj.a = "hello";
console.log(objj);


// const b = new obj({
//    c: "hi";
// })

// const c = {

// }

// when object is been forcefully converted into a string it will result in object 

let obj = {//Creating an empty object

    name : 'siddhant',
    class : '7sem'

}; 

let ob = {

    name : 'sidd' ,
    "like this vedio" : 'yes'

}

console.log( ob["like this vedio"]);

//Dynamic property

let color = "Green";
let c = "pink";

let obj5 = {//Creating an empty object

    [color] : c,
    classs : '7sem'

}; 

const obj2 ={// Itself then after that outer enviroment 
    schlorNo : "564",
    __proto__:obj
}


console.log( obj2.name);

const n = 'green';
const s = 'ht';

const objj1 = {

    [n] : 'white',
    [s] : 'yell'
}

const objj2 = {
    name : 'sidd',
    __proto__ : objj1
}

console.log(objj2.name);
console.log(objj2.green);
console.log(objj2.ht);
console.log(objj2.s);



let cap = {

    fristname : 'Siddhant',//string
    lastname : "sharma",//string
    friends : [ 'Siddhant-55', 'no-one', 8], //Array
    placedatgoodpbc : true, //Boolean
    age: 21, //integer
    placedatsbc : true,//Boolean
    address : {  //Object
        country : 'canada', //string
        city : 'Calagry' //string
    },

    rich : function rich(){  //function
        console.log("1.5 cr per year pacakage"); 
    }
    
}


const { fristname:fname , lastname:lname , friend , placedatgoodpbc, age, placedatsbc , address:{country : kk } , address:{city:town}}  = cap; //Destruring( names need to match in object destreing ) , renaming and nested destruring is also been done.

const newObj = { ...cap };// creating the new object with the help of a spread operator, they both now points to diffrent object

console.log(newObj);

console.log(address);
console.log(lastname);

// if in case the name of the variable is invaild or in case we are accessing the prop of the object dynamically then we are suppose to use only square bracket notation only and dot notation will give a error in this case

// Object k inside jo function hote hai usko hum method bolte hai 

// adding prop to object
cap.awesomeLife = true ;

// updating value of object 
cap.placedatsbc =  false ;

//delete a prop
delete cap.placedatsbc ;

//Accessing element

console.log(cap);
console.log(cap.friends[1]);//Dotted notation
console.log(cap.fristname);//Dotted notation
console.log(cap['fristname']);//Dotted notation
console.log(cap['friends']);//Square bracket notation,To be used in loops as dot notation dont work with it
console.log(cap['friends']["0"]);
console.log(cap['friends'][0]);//We could either write 0 in commas or without it as well but it is not true for strings
console.log(cap.address.city);
console.log(cap['address']['city']);//Here single commas is compulsory
cap.rich();//Her "cap.rich" wont run but "cap.rich()" will

//Here everything which is written inside bracket should be in semicolons expect integers
// In for loop or in any other type of loop we only use square bracket notation and not dot notation
//Applying loop on a object (for-in-loop)  :::::

for(key in cap){//Here cap is the name of the object
    console.log(key ,' -->', cap[key]);// Here "ele "is the key while iterating over an object
}

for( let ele of cap ){
    console.log(ele);
}

for( let key in cap){//Here cap is the name of the object
    console.log(key ,' -->', cap[key]);// Here "ele "is the key while iterating over an object
}
 
// Objects having key value starting from "-" or any numbet is consider invalid to acces that key in an object we
// need to use the squre bracket notation and dot notation wont work here

// Arrays , Functions , Promises , objects are all objects


const v = Object.assign( {} , cap ); // Pass by reference
console.log(v);    

if( 'name' in obj ){
    console.log('Yes The name key exist in this objec')
}else{
    console.group(' Key name does not exist in object ');
}

function flatten( obj , parent , res ={} ){

    for( let key in obj ){

        let prop = parent ? parent+_+key : key ;

        if( typeof obj[key] == 'object' ){
            flatten( obj[key] , prop , res )

        }else{
            res[key] = obj[key]

        }
    }
    
}



// when we forcefully try to convert object into string it will get converted into object-object
const ans = String({name : 'sid'});
console.log(ans);

// const obj2 = JSON.parse(JSON.stringify(obj)) // This will create a copy of this object such that all the parents and children are also been dublicated

// In browser local storage we will always store data in form of String

localStorage.setItem(JSON.stringify(cap)); 

let mainPlane = {
    airplane : 'fly India',
    iatacode : 'FI',
    booking : [],
    book : function( flightNum , name ){
        console.log(`${name} Booked flight on ${this.airplane} and ${flightNum}`);
        this.booking.push({ flight : `${this.airplane}` })
    }
};

let childPlane = {
    airplane : 'fly canada',
    type : 'booing',
    booking:[]
}


// mainPlane.book(1234 , 'air canada');
// console.log(mainPlane.booking);

mainPlane.book.call(childPlane, 157 , 'aircanada' );
console.log(childPlane.booking);

function changeAgeAndReference(person) {
    
    // Actual change 
    person.age = 25;

    // reassigning the reffrence to a new object , and just switch refernce old object will remain as it is 
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

function a(){
    console.log('Inside function' , this )
}

const us = {
    name: 'sidd',
    rollNo: '0827ci191054',
    abc(){
      a(); // function inside of another function will result global scope 
    },
    f : obc = () =>{
        console.log(this)
    }
    ,
    ref: this,
    newOj: {
        name: '738',
        re: this,
        n: {
            r: this,
            o: {
                reff: this,
                g : {
                    name : 'op',
                    ro : this ,
                    f:{
                        a : function(){
                            console.log(this);
                        }
                    }
                }
            }
        }
    }
}

// us.abc()
// us.f();

//  All of them are resulting in global object 

// console.log(us.name)
// console.log(us.abc())
console.log(us.ref)
// console.log(us.newOj.re);
// console.log(us.newOj.n.r);
// console.log(us.newOj.n.o.reff);
// console.log(us.newOj.n.o.g.ro)
// console.log(us.newOj.n.o.g.ro.name)
// console.log(us.newOj.n.o.g.f.a())


let cal = {

    read(){
        this.a = prompt(" Entre value of a" , 0 );
        this.b = prompt(" Entre Value of B" , 0 );
    },

    sum(){
        console.log()
    }
}