"use strict"; // ---> Enforces strict mode, ensuring modern JavaScript standards and preventing unsafe actions.


// **************************************** Constants and Variables *********************************************

const accountId = 144553; 
// ---> Declares a constant `accountId` and assigns it the value 144553. Constants cannot be reassigned.

let accountEmail = "sanjay@google.com"; 
// ---> Declares a variable `accountEmail` with initial value "sanjay@google.com".

let accountPassword = "12345"; 
// ---> Declares a variable `accountPassword` and assigns it the string value "12345".

let accountCity = "jalore"; 
// ---> Declares a variable `accountCity` and assigns it the string value "jalore".

let accountState; 
// ---> Declares a variable `accountState` without an initial value, so it is undefined.

accountEmail = "sk@hr.com"; 
// ---> Reassigns the value of `accountEmail` to "sk@hr.com".

accountPassword = "21212121"; 
// ---> Reassigns the value of `accountPassword` to "21212121".

accountCity = "Bengaluru"; 
// ---> Reassigns the value of `accountCity` to "Bengaluru".

console.log(accountId); 
// ---> Logs the value of `accountId` (144553) to the console.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 
// ---> Logs the values of `accountId`, `accountEmail`, `accountPassword`, `accountCity`, and `accountState` (undefined) in a tabular format.


/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.log(3 + 3); 
// ---> Logs the result of 3 + 3 (which is 6).

console.log("sanjay "); 
// ---> Logs the string "sanjay" to the console.


  
// ***************************************************** Data Types **************************************************

let name = "sanjay"; 
// ---> Declares a variable `name` and assigns it the string "sanjay".

let age = 18; 
// ---> Declares a variable `age` and assigns it the number 18.

let isLoggedIn = false; 
// ---> Declares a variable `isLoggedIn` and assigns it the boolean value `false`.

let state; 
// ---> Declares a variable `state` which is undefined.

console.log(typeof undefined); 
// ---> Logs the type of `undefined`, output: "undefined".

console.log(typeof null); 
// ---> Logs the type of `null`, output: "object" (a JavaScript quirk).


  
// ******************************************************* Type Conversion ************************************************************

let score = "sanjay"; 
// ---> Declares a variable `score` and assigns it the string "sanjay".

let valueInNumber = Number(score); 
// ---> Converts the string "sanjay" to a number using `Number()`. Since "sanjay" is not a number, the result will be `NaN` (Not a Number).

let booleanIsLoggedIn = Boolean(isLoggedIn); 
// ---> Converts the value of `isLoggedIn` (false) to a boolean using `Boolean()`, which remains `false`.

let someNumber = 33; 
// ---> Declares a variable `someNumber` and assigns it the number 33.

let stringNumber = String(someNumber); 
// ---> Converts the number 33 to the string "33" using `String()`.


  
// ******************************************************** Operations *****************************************************

let value = 3;
let negValue = -value; 
// ---> Negates the value of `value` (which is 3), resulting in -3.

let str1 = "hello"; 
// ---> Declares a variable `str1` and assigns it the string "hello".

let str2 = " sanjay"; 
// ---> Declares a variable `str2` and assigns it the string " sanjay".

let str3 = str1 + str2; 
// ---> Concatenates `str1` ("hello") and `str2` (" sanjay"), resulting in "hello sanjay".

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; 
// ---> Assigns the result of 2 + 2 (which is 4) to `num1`, `num2`, and `num3`.

let gameCounter = 100;
++gameCounter; 
// ---> Increments `gameCounter` by 1, changing it from 100 to 101.

console.log(gameCounter); 
// ---> Logs the updated `gameCounter` value (101) to the console.


  
// ***************************************************** Comparisons *****************************************************

console.log(null > 0); 
// ---> Compares null with 0, output: false.

console.log(null == 0); 
// ---> Compares null with 0 using loose equality, output: false.

console.log(null >= 0); 
// ---> Compares null with 0 using greater than or equal operator, output: true.

console.log(undefined == 0); 
// ---> Compares undefined with 0 using loose equality, output: false.

console.log(undefined > 0); 
// ---> Compares undefined with 0, output: false.

console.log(undefined < 0); 
// ---> Compares undefined with 0, output: false.

console.log("2" === 2); 
// ---> Compares the string "2" with the number 2 using strict equality, output: false.

const repoCount = 50; 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// ---> Uses template literals to create a string: "Hello my name is sanjay and my repo count is 50".

// ***************************************************** String Manipulations **********************************************************

const gameName = new String('sanjay-harji-com'); 
// ---> Creates a new string object `gameName` with the value 'sanjay-harji-com'.

console.log(gameName.charAt(2)); 
// ---> Logs the character at index 2 of `gameName`, output: "n".

console.log(gameName.indexOf('t')); 
// ---> Logs the index of the character 't' in `gameName`, output: -1 (since 't' is not found).

const newString = gameName.substring(0, 4);
console.log(newString); 
// ---> Logs the substring from index 0 to index 4, output: "sanj".

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); 
// ---> Logs the slice from index -8 to 4, output: "harj".

const newStringOne = "   sanjay    ";
console.log(newStringOne); 
// ---> Logs the string with extra spaces: "   sanjay    ".

console.log(newStringOne.trim()); 
// ---> Logs the string after trimming the spaces: "sanjay".

const url = "https://sanjay.com/sanjay%20chohan";
console.log(url.replace('%20', '-')); 
// ---> Replaces "%20" with "-" in the `url`, output: "https://sanjay.com/sanjay-chohan".

console.log(url.includes('sundar')); 
// ---> Checks if the `url` includes the substring 'sundar', output: false.

console.log(gameName.split('-')); 
// ---> Splits `gameName` by the hyphen '-' and logs the result: ["sanjay", "harji", "com"].

  
// ***************************************************** Numbers and Math Operations **************************************

const balance = new Number(100); 
// ---> Creates a new Number object `balance` with value 100.

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4)); 
// ---> Logs the number rounded to 4 significant digits, output: "123.9".

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); 
// ---> Logs the number formatted according to the 'en-IN' locale (Indian formatting): "10,00,000".

console.log(Math.random()); 
// ---> Logs a random number between 0 and 1.

console.log((Math.random() * 10) + 1); 
// ---> Logs a random number between 1 and 11.

console.log(Math.floor(Math.random() * 10) + 1); 
// ---> Logs a random integer between 1 and 10.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// ---> Logs a random integer between 10 and 20.


  
// ***************************************************** Dates *****************************************************

let myDate = new Date(); 
// ---> Creates a new Date object `myDate` with the current date and time.

let myCreatedDate = new Date("01-14-2023"); 
// ---> Creates a new Date object for January 14, 2023.

let myTimeStamp = Date.now(); 
// ---> Logs the current timestamp (milliseconds since Jan 1, 1970).

let newDate = new Date();
console.log(newDate); 
// ---> Logs the current date and time.

console.log(newDate.getMonth() + 1); 
// ---> Logs the current month (1-12), output: Month + 1.

console.log(newDate.getDay()); 
// ---> Logs the current day of the week (0-6), output: Day (e.g., 0 for Sunday).

newDate.toLocaleString('default', { weekday: "long" }); 
// ---> Logs the full name of the current day of the week (e.g., "Monday").


  
// ***************************************************** Primitive Data Types *****************************************

const scoreValue = 100.3; 
// ---> Declares a variable `scoreValue` with a floating point number.

const outsideTemp = null; 
// ---> Declares a variable `outsideTemp` and assigns it `null`.

let userEmail; 
// ---> Declares a variable `userEmail` without an initial value, so it is `undefined`.

const id = Symbol('123'); 
// ---> Creates a unique symbol `id`.

const anotherId = Symbol('123'); 
// ---> Creates another unique symbol `anotherId`.

console.log(id === anotherId); 
// ---> Compares `id` and `anotherId`, output: false (symbols are unique even if they have the same description).

  
// ***************************************************** Reference Data Types ***********************************************

const heros = ["shaktiman", "naagraj", "doga"]; 
// ---> Declares an array `heros` with three elements.

let myObj = { 
    name: "sanjay", 
    age: 22, 
}; 
// ---> Declares an object `myObj` with properties `name` and `age`.

const myFunction = function() { 
    console.log("Hello world"); 
};
// ---> Declares a function `myFunction` that logs "Hello world" when called.

console.log(typeof anotherId); 
// ---> Logs the type of `anotherId`, output: "symbol".
