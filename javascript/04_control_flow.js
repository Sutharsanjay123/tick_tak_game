//****************************************************** if Statements *******************************************

const isUserloggedIn = true;  // Boolean indicating if the user is logged in
const temperature = 41; // Temperature value for conditional checks

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// ---> The above block is commented out but would check if the temperature is exactly 40 and log accordingly

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==
// These operators are used for comparison in conditions

// const score = 200;

// if (score > 100) {
//     let power = "fly"; // Local variable within the scope of the if condition
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // ---> This would throw an error because 'power' is scoped to the if block

// The next part checks different balance thresholds
const balance = 1000;

if (balance > 500) console.log("test"),console.log("test2"); // The comma operator allows multiple expressions
// ---> test
// ---> test2

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }
// ---> The above code checks balance in ranges, logging different messages based on conditions


//****************************************************** Logical AND & OR *******************************************

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // ---> This won't execute since 2 == 3 is false
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // ---> This will execute since loggedInFromEmail is true
}
// ---> User logged in


//****************************************************** switch Statement *******************************************

const month = "march"; // The current month value

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march"); // ---> Will log 'march' because month === "march"
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match"); // ---> This would execute if none of the cases match
}


//****************************************************** Falsy and Truthy Values *******************************************

const userEmail = [];

if (userEmail) {
    console.log("Got user email"); // ---> This won't execute because userEmail is an empty array, which is truthy
} else {
    console.log("Don't have user email");
}
// ---> Don't have user email (userEmail is truthy but it's not logged in the first condition)

// Checking if array is empty
// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values: "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty"); // ---> Would execute because userEmail is an empty array
}
// ---> Array is empty

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // ---> Checks if an object is empty by counting its properties
}
// ---> Object is empty


//****************************************************** Nullish Coalescing Operator (??) *******************************************

let val1;
// The nullish coalescing operator (??) returns the right-hand operand if the left-hand operand is null or undefined
// val1 = 5 ?? 10; // val1 will be 5 because 5 is neither null nor undefined
// val1 = null ?? 10; // val1 will be 10 because the left side is null
// val1 = undefined ?? 15; // val1 will be 15 because the left side is undefined
val1 = null ?? 10 ?? 20; // val1 will be 10 because null is replaced by 10

console.log(val1); // ---> Logs 10


//******************************************************** Ternary Operator *******************************************

const iceTeaPrice = 100; // Price of ice tea

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// ---> more than 80 (since the iceTeaPrice is greater than 80)
// The ternary operator is a shorthand for if-else, where the condition is evaluated and one of the two expressions is executed based on the result
