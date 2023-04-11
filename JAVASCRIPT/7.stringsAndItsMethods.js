// *********************************************** STRING *******************************************************

//STRING METHODS 

// 1.> length
// 2.> extracting - slice , substring
// 3.> toupper , tolower 
// 4.> replace
// 5.> concat
// 6.> trim

//  String are immutable in nature 

console.log( "a" , "b" );
// output : a b

//A string is a group of characters
let str = "pepcoders";
console.log(str);

//STRING METHOD

//To determine length
// .length
console.log(str.length);

// Extracting the part of string - .slice , .splice

let slicedStr = str.slice(3, 7);//here 7 is not been included therfore last index is excluded

console.log(slicedStr);

let subString = str.substr( 3, 5);// here 3 is the starting index and 5 is the number of elements we to trvel from 3
console.log(subString); 

//replace method for string 
let sayHello = "Hello mukesh";
let saybye = sayHello.replace('Hello', 'bye');//The word you need to replace and which word would you replace it with

console.log(saybye);

//To upper case or lower case
let text1 = "hello world" ;
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
console.log(text1);
console.log(text2);
console.log(text3);

let concatenatedstr = fristStr.concat(secondStr);//Hello 1World 1
concatenatedstr = fristStr.concat(" bhai ",secondStr);//Hello 1 bhai World 1

console.log(concatenatedstr);

//Trim method 
//Trim method trims the extra spaces if present this does not eleminate the space which is present bewtween the words

let text = "      hello 2 world 2        ";
console.log(text);

let trimmedText = text.trim();
console.log(trimmedText);


const Myname = 'Siddhant';
console.log(Myname[0]);

console.log( Myname.indexOf('n'));
console.log( Myname.lastIndexOf('n'));

let arrColors = "Brown blue black ";
//  Sting -> Array 
console.log(arrColors.split('blue'));
console.log(arrColors.split(' '));

console.log( typeOf(Myname) );

// string + number = string 

//  == - no type checking
//  === -  Type checking as well 

const st = "22";
console.log(Number(st));

const nu = 56;
console.log(String(nu));

const age = 32;
console.log(Boolean(age)); 
// 0 and empty string is a false 

let email = 'siddhant';
console.log( email.includes("d"));

