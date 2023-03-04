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
    classs : '7sem'

}; 

//Dynamic property

let color = "Green";
let obj5 = {//Creating an empty object

    [color] : 'siddhant',
    classs : '7sem'

}; 

const obj2 ={// Itself then after that outer enviroment 
    schlorNo : "564",
    __proto__:obj
}

console.log( obj2.name);


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

const { fristname:fname , lastname:lname , friend , placedatgoodpbc, age, placedatsbc , address:{country} , address:{city:town}}  = cap; //Destruring( names need to match in object destreing ) , renaming and nested destruring is also been done.

const newObj = { ...cap };// creating the new object with the help of a spread operator, they both now points to diffrent object

console.log(newObj);

console.log(address);
console.log(lastname);

// if in case the name of the variable is invaild or in case we are accessing the prop of the object dynamically then we are suppose to ue only square bracket notation only and dot notation will give a error in this case

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

for( let key in cap){//Here cap is the name of the object
    console.log(key ,' -->', cap[key]);// Here "ele "is the key while iterating over an object
}
 
// Objects having key value starting from "-" or any numbet is consider invalid to acces that key in an object we
// need to use the squre bracket notation and dot notation wont work here

// Arrays , Functions , Promises , objects are all objects

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

// const obj2 = JSON.parse(JSON.stringify(obj)) // This will create a copy of this object such that all the parents and children are also been dublicated

// In browser local storage we will always store data in form of String

localStorage.setItem(JSON.stringify(cap)); 