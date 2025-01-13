// ********************************* Arrays and Array Methods ***************************************

const myArr = [0, 1, 2, 3, 4, 5]; 
// ---> Creates an array `myArr` with the elements 0 through 5.

const myHeors = ["shaktiman", "naagraj"]; 
// ---> Creates an array `myHeors` with superhero names.

const myArr2 = new Array(1, 2, 3, 4); 
// ---> Creates an array `myArr2` using the `new Array()` constructor with the elements 1 through 4.

// console.log(myArr[1]); 
// ---> Logs the element at index 1 of `myArr` which is 1 (commented for testing).

// ******************************* Array Operations - push, pop, unshift, shift **************************************

// myArr.push(6); 
// ---> Adds the element 6 to the end of `myArr`.

myArr.push(7); 
// ---> Adds the element 7 to the end of `myArr`.

myArr.pop(); 
// ---> Removes the last element (7) from `myArr`.

myArr.unshift(9); 
// ---> Adds the element 9 to the beginning of `myArr`.

myArr.shift(); 
// ---> Removes the first element (9) from `myArr`.

console.log(myArr.includes(9)); 
// ---> Logs `false`, as 9 was removed from the array using `shift()`.

console.log(myArr.indexOf(3)); 
// ---> Logs the index of 3 in `myArr`, output: 2.

const newArr = myArr.join(); 
// ---> Converts `myArr` into a string and joins the elements with commas.

console.log(myArr); 
// ---> Logs the current state of `myArr`.

console.log(newArr); 
// ---> Logs the string version of `myArr` (e.g., "0,1,2,3,4").

// ****************************************** Slice and Splice Methods ***************************************

console.log("A ", myArr); 
// ---> Logs the array `myArr`.

const myn1 = myArr.slice(1, 3); 
// ---> Extracts a portion of the array from index 1 to 3 (excluding index 3).

console.log(myn1); 
// ---> Logs the sliced array, output: [1, 2].

console.log("B ", myArr); 
// ---> Logs the original array `myArr`, it remains unchanged due to `slice()`.

const myn2 = myArr.splice(1, 3); 
// ---> Removes 3 elements starting from index 1 and modifies the original array.

console.log("C ", myArr); 
// ---> Logs the modified `myArr`, output will be the original array after removal of the elements.

console.log(myn2); 
// ---> Logs the array of removed elements, output: [1, 2, 3].

// ******** Concatenation and Spread Operator *****

const marvel_heros = ["thor", "Ironman", "spiderman"]; 
// ---> Creates an array `marvel_heros` with three superhero names.

const dc_heros = ["superman", "flash", "batman"]; 
// ---> Creates an array `dc_heros` with three superhero names.

const all_new_heros = [...marvel_heros, ...dc_heros]; 
// ---> Merges `marvel_heros` and `dc_heros` arrays using the spread operator.

console.log(all_new_heros); 
// ---> Logs the merged array of heroes from Marvel and DC.

// ***************************************************** Flatten Array *****************************************************

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; 
// ---> Creates a nested array `another_array`.

const real_another_array = another_array.flat(Infinity); 
// ---> Flattens `another_array` completely using `.flat(Infinity)`.

console.log(real_another_array); 
// ---> Logs the flattened array: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5].

// ***************************************************** Array Methods **********************************************************

console.log(Array.isArray("sanjay")); 
// ---> Checks if the string "sanjay" is an array, output: false.

console.log(Array.from("sanjay")); 
// ---> Converts the string "sanjay" into an array of characters: ["s", "a", "n", "j", "a", "y"].

console.log(Array.from({name: "sanjay"})); 
// ---> Converts an object into an array, output: [{name: "sanjay"}] (interesting behavior).

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); 
// ---> Creates an array with the values of `score1`, `score2`, and `score3`: [100, 200, 300].

// ***************************************************** Object Literals and Symbol *****************************************************

const mySym = Symbol("key1"); 
// ---> Creates a symbol `mySym` with a description "key1".

const JsUser = {
    name: "sanjay",
    "full name": "sanjay Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "sanjay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}; 
// ---> Creates an object `JsUser` with various properties, including a symbol as a key.

JsUser.email = "sanjay@chatgpt.com"; 
// ---> Changes the email property of `JsUser` to "sanjay@chatgpt.com".

JsUser.greeting = function() { 
    console.log("Hello JS user"); 
}; 
// ---> Adds a `greeting()` method to `JsUser`.

JsUser.greetingTwo = function() { 
    console.log(`Hello JS user, ${this.name}`); 
}; 
// ---> Adds a `greetingTwo()` method to `JsUser` that uses `this.name`.

console.log(JsUser.greeting()); 
// ---> Logs "Hello JS user" by calling `greeting()`.

console.log(JsUser.greetingTwo()); 
// ---> Logs "Hello JS user, sanjay" by calling `greetingTwo()`.

// ***************************************************** Creating New Objects *****************************************************

const tinderUser = {}; 
// ---> Creates an empty object `tinderUser`.

tinderUser.id = "123abc"; 
// ---> Adds an `id` property to `tinderUser`.

tinderUser.name = "Sammy"; 
// ---> Adds a `name` property to `tinderUser`.

tinderUser.isLoggedIn = false; 
// ---> Adds an `isLoggedIn` property to `tinderUser`.

console.log(tinderUser); 
// ---> Logs the `tinderUser` object.

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sanjay",
            lastname: "choudhary",
        },
    },
}; 
// ---> Creates a `regularUser` object with nested objects for the user's full name.

console.log(regularUser.fullname.userfullname.firstname); 
// ---> Logs "sanjay" by accessing the nested `firstname` property.

// ***************************************************** Object Merging *************************************

const obj1 = {1: "a", 2: "b"}; 
// ---> Creates an object `obj1`.

const obj2 = {3: "a", 4: "b"}; 
// ---> Creates an object `obj2`.

const obj3 = {...obj1, ...obj2}; 
// ---> Merges `obj1` and `obj2` into a new object `obj3` using the spread operator.

console.log(obj3); 
// ---> Logs the merged object: {1: "a", 2: "b", 3: "a", 4: "b"}.

// ***************************************************** Accessing Object Properties *************************************

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 2,
        email: "i@gmail.com",
    },
    {
        id: 3,
        email: "j@gmail.com",
    },
]; 
// ---> Creates an array of user objects.

console.log(users[1].email); 
// ---> Logs the email of the second user: "i@gmail.com".

console.log(Object.keys(tinderUser)); 
// ---> Logs the keys of the `tinderUser` object: ["id", "name", "isLoggedIn"].

console.log(Object.values(tinderUser)); 
// ---> Logs the values of the `tinderUser` object: ["123abc", "Sammy", false].

console.log(Object.entries(tinderUser)); 
// ---> Logs the entries (key-value pairs) of the `tinderUser` object.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
// ---> Checks if `tinderUser` has the property `isLoggedIn`, output: true.

// **************************************** Object Destructuring *************************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sanjay",
};

const {courseInstructor: instructor} = course; 
// ---> Destructures `courseInstructor` from the `course` object and renames it as `instructor`.

console.log(instructor); 
// ---> Logs the `instructor` value: "sanjay".

// **************************************** JSON Structure *************************************

// Example of JSON structure:
// {
//     "name": "sanjay",
//     "coursename": "js in hindi",
//     "price": "free"
// }



// **************************************** Array of Objects *************************************

[
    {},
    {},
    {}
]
