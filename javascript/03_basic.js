"use strict"; // Ensures cleaner, stricter JavaScript code

// **************************************** Function Examples *************************************

function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("y");
}

// Uncomment to call the function
// sayMyName();
// ---> s
// ---> a
// ---> n
// ---> j
// ---> a
// ---> y

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// Uncomment to log result
// console.log("Result: ", result);
// ---> Result: 8

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Uncomment to test loginUserMessage
// console.log(loginUserMessage("sanjay"));
// ---> sanjay just logged in

// console.log(loginUserMessage());
// ---> sam just logged in (because default parameter is used)

// **************************************** Rest Parameters *************************************

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// Uncomment to test calculateCartPrice
// console.log(calculateCartPrice(200, 400, 500, 2000));
// ---> [500, 2000] (rest parameters capture all remaining arguments after the first two)

// **************************************** Working with Objects *************************************

const user = {
    username: "sanjay",
    price: 199,
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "sam",
    price: 399,
});
// ---> Username is sam and price is 399

// **************************************** Working with Arrays *************************************

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
// ---> 400 (returns the second value in the array)

// **************************************** Scope Demonstration *************************************

let a = 300;
if (true) {
    let a = 10; // Block scope
    const b = 20; // Block scope
    console.log("INNER: ", a);
}
// ---> INNER: 10 (the value of 'a' inside the block is 10)
// console.log(a); // ---> 300 (the value of 'a' outside the block is still 300)
// console.log(b); // ---> ReferenceError: b is not defined (because 'b' is block-scoped)

// **************************************** Nested Functions and Closures *************************************

function one() {
    const username = "sanjay";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    two();
}

one();
// ---> sanjay (inner function 'two' can access 'username' from the outer function 'one' due to closure)

// **************************************** Function Hoisting *************************************

console.log(addOne(5)); // Works due to hoisting

function addOne(num) {
    return num + 1;
}
// ---> 6 (function declarations are hoisted, so 'addOne' is available even before the call)

// Uncommenting the following lines will cause an error:
// addTwo(5);
// const addTwo = function(num) {
//     return num + 2;
// };
// ---> Error: Cannot access 'addTwo' before initialization (function expressions are not hoisted)

// **************************************** Arrow Function Examples *************************************

const addTwo = (num1, num2) => ({ username: "sanjay" });

console.log(addTwo(3, 4));
// ---> { username: "sanjay" } (arrow functions return an object with the specified value)

// **************************************** Object Methods and `this` Keyword *************************************

const user2 = {
    username: "sanjay",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    },
};

user2.welcomeMessage();
// ---> sanjay, welcome to the website
// ---> { username: 'sanjay', price: 999, welcomeMessage: [Function: welcomeMessage] }

user2.username = "sam";
user2.welcomeMessage();
// ---> sam, welcome to the website
// ---> { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

// **************************************** `this` with Arrow Functions *************************************

const chai = () => {
    let username = "sanjay";
    console.log(this); // Arrow functions don't bind `this`, so it refers to the global object (window in browsers)
};

chai();
// ---> this refers to the global object (in browsers, it is 'window', in Node.js, it would be 'global')

// **************************************** Immediately Invoked Function Expressions (IIFE) ****************************

(function chai() {
    console.log(`DB CONNECTED`);
})();
// ---> DB CONNECTED (immediately invoked function that runs as soon as it's defined)

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("sanjay");
// ---> DB CONNECTED TWO sanjay (immediately invoked function that accepts a parameter)
