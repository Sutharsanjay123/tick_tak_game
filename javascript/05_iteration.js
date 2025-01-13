//******************************************************** for loop *******************************************

for (let i = 0; i <= 10; i++) {
    const element = i;            // Assign current value of i to element
    if (element == 5) {
        // console.log("5 is best number");   // ---> Would log "5 is best number" when i equals 5
    }
    // console.log(element);                 // ---> Would log the value of element (0 to 10)
}

//******************************************************** Nested for loop *******************************************

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);  // ---> Logs inner and outer loop values
        // console.log(i + '*' + j + ' = ' + i * j);                  // ---> Logs multiplication table
    }
}

//******************************************************** Looping through an array using for loop *******************************************

let myArray1 = ["flash", "batman", "superman"];
// console.log(myArray1.length);                  // ---> Logs the length of the array: 3
for (let index = 0; index < myArray1.length; index++) {
    const element = myArray1[index];             // Access each element of the array by index
    // console.log(element);                      // ---> Logs each element: flash, batman, superman
}

//******************************************************** break and continue *******************************************

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);              // ---> Logs "Detected 5" when index equals 5
        continue;                               // Skips the current iteration when index equals 5
    }
    console.log(`Value of i is ${index}`);      // ---> Logs all values except when index equals 5
}

//******************************************************** while loop *******************************************

let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`); // ---> Logs the value of index (0 to 10) in increments of 2
//     index = index + 2;                         // Increment index by 2
// }

//******************************************************** while loop for iterating through an array *******************************************

let myArray = ['flash', "batman", "superman"];
let arr1 = 0;
while (arr1 < myArray.length) {
    // console.log(`Value is ${myArray[arr1]}`); // ---> Logs each element: flash, batman, superman
    arr1 = arr1 + 1;                           // Increment arr1 to move to the next element
}

//******************************************************** do-while loop *******************************************

let score = 11;
do {
    console.log(`Score is ${score}`);           // ---> Logs "Score is 11"
    score++;                                   // Increment score by 1
} while (score <= 10);                         // ---> Loop does not run again as the condition is false

//******************************************************** for...of loop *******************************************

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);                         // ---> Logs each number: 1, 2, 3, 4, 5
}

//******************************************************** for...of loop for a string *******************************************

const greetings = "Hello world!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);     // ---> Logs each character of the string
}

//******************************************************** Iterating over Map object *******************************************

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// console.log(map);                            // ---> Logs the entire Map object

for (const [key, value] of map) {
    // console.log(key, ':-', value);           // ---> Logs key-value pairs: IN :- India, USA :- United States of America, Fr :- France
}

//******************************************************** Iterating over object properties with for...in *******************************************

const myObject = {
    js:    'javascript',
    cpp:   'C++',
    rb:    "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`); // ---> Logs key and value pairs: e.g., js shortcut is for javascript
}

//******************************************************** forEach method *******************************************

const coding = ["js", "py", "java", "cpp"];
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);             // ---> Logs item, its index, and the array: e.g., js 0 [js, py, java, cpp]
});

//******************************************************** Iterating through an array of objects *******************************************

const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java",       languageFileName: "java" },
    { languageName: "python",     languageFileName: "py" }
];

myCoding.forEach((item) => {
    console.log(item.languageName);            // ---> Logs each language name: javascript, java, python
});

//******************************************************** Using filter to filter elements from an array *******************************************

const books = [
    { title: 'Book One',   genre: 'Fiction',      publish: 1981, edition: 2004 },
    { title: 'Book Two',   genre: 'Non-Fiction',  publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History',      publish: 1999, edition: 2007 },
    { title: 'Book Four',  genre: 'Non-Fiction',  publish: 1989, edition: 2010 }
];

const filteredBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History");
console.log(filteredBooks);                     // ---> Logs books matching the criteria (e.g., Book Three)

//******************************************************** Using map to transform an array *******************************************

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumbers
    .map((num) => num * 10)                     // ---> Multiply each by 10
    .map((num) => num + 1)                      // ---> Add 1 to each
    .filter((num) => num >= 40);                // ---> Filter values >= 40
console.log(newNums);                           // ---> Logs [41, 51, 61, 71, 81, 91, 101]

//******************************************************** Using reduce to calculate the sum of an array *******************************************

const myNums = [1, 2, 3, 4, 5];
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0); // ---> Sums array elements
console.log(myTotal);                           // ---> Logs total: 15

//******************************************************** Using reduce to calculate total price in shopping cart *******************************************

const shoppingCart = [
    { itemName: "js course",         price: 2999 },
    { itemName: "py course",         price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0); // ---> Calculates total price
console.log(priceToPay);                         // ---> Logs total price: 22996
