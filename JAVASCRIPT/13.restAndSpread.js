// In spread operator we could de-compress , while in rest operator we compress the text

// spread could be used any where while in the case of rest operator it should only be used at the end
// https://www.youtube.com/watch?v=gQWOLRKGPsA&ab_channel=Coder%27sGyan


//  Spreding an object inside of an { } is important while spreding the array inside a [] is not important

// [...speed];
// [...restt];
  
function d(...nums){//rest , rest parameter must be the last one , rest is always in the parameter while spread is always in argument
    console.log(nums);
    console.log(nums[0] , nums[1]);
}
  
  let nums = [ 1 ,2 ,3 ,4 ,5 ];
  d(...nums);//spread 

  let nums2 = [ ...nums ];
  nums[3] = 9;
  
  console.log(nums);
  console.log(nums2);


  const obj ={
    one : '1' , 
    two :  '2'
}

const ar = [ 8 , 1 , 3 , 4 , 5 ]

const { one: onee , two } = obj ;

const c = {...obj};
// const c = ...obj;This  is also not possible

const d = [...ar];
// const d = ...ar; This is not possible

console.log(d);
console.log(onee)
console.log(two)
console.log(c)

let calc = {
 
  read( ){
    this.a = prompt("Entre the value of a " , 0 );
    this.b = prompt("Entre the value of b ", 0 );
  }
  ,
  sum(){
    console.log(this.a , this.b );
  }, 

  sub(){
    console.log(this.a - this.b );
  }
}

  let a = [ 1 , 2,3 ,4 ];

  let b = { f : 'f' , g : 'g' , k : 'k '}


  let f= {...b}
  console.log(f);

  let k = [...a];
  console.log(k)