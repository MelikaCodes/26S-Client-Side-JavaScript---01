// ============================================================
// COMP1073 — Study Code Examples
// All 6 Modules | Melika
// ============================================================




// ============================================================
// MODULE 1 — JavaScript Introduction & DOM
// ============================================================

// Select the FIRST matching element
const para = document.querySelector("p");
const btn = document.querySelector("#myButton");

// Select ALL matching elements
const allParas = document.querySelectorAll("p");

// Change text content of an element
para.textContent = "Hello World!";

// Change a style
para.style.backgroundColor = "pink";

// Create a new element and add it to the page
const newBtn = document.createElement("button");
newBtn.textContent = "Click Me";
document.body.append(newBtn);

// Add an event listener — NO () on the function name!
btn.addEventListener("click", handleClick);

// Named function
function handleClick() {
    console.log("Button was clicked!");
}

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);




// ============================================================
// MODULE 2 — Variables, Operators & Strings
// ============================================================

// Declare variables
let name = "Melika";        // can be reassigned
const city = "Barrie";      // cannot be reassigned

// Reassign a let variable
name = "Meli";

// Data types
let myString = "hello";         // string
let myNumber = 42;              // number
let myFloat = 3.14;             // float (still a number)
let myBool = true;              // boolean
let myArray = [1, 2, 3];       // array
let myObject = { name: "Melika", age: 25 }; // object

// Arithmetic operators
let sum = 10 + 5;       // 15
let diff = 10 - 5;      // 5
let product = 10 * 5;   // 50
let quotient = 10 / 5;  // 2
let remainder = 10 % 3; // 1
let power = 2 ** 3;     // 8

// Increment and decrement
let count = 0;
count++;    // count is now 1
count--;    // count is now 0

// Assignment operators
let x = 10;
x += 5;     // x is now 15
x -= 3;     // x is now 12
x *= 2;     // x is now 24
x /= 4;     // x is now 6

// Comparison operators
console.log(5 === 5);       // true  — strict equality (value AND type)
console.log(5 === "5");     // false — different types
console.log(5 !== 3);       // true  — strict non-equality
console.log(10 > 5);        // true
console.log(10 < 5);        // false
console.log(10 >= 10);      // true

// String methods
let greeting = "Hello World";

console.log(greeting.length);              // 11 — no ()
console.log(greeting.toUpperCase());       // "HELLO WORLD"
console.log(greeting.toLowerCase());       // "hello world"
console.log(greeting.replace("World", "Melika")); // "Hello Melika"
console.log(greeting.slice(0, 5));         // "Hello"
console.log(greeting.indexOf("World"));   // 6 — position of substring

// Concatenation — joining strings
let firstName = "Melika";
let lastName = "Codes";
let fullName = firstName + " " + lastName;  // "Melika Codes"

// Template literals — cleaner way using backticks
let message = `Hello, ${firstName}!`;  // "Hello, Melika!"

// Type conversion
let numString = "42";
let realNum = Number(numString);    // string → number: 42
let backToStr = String(realNum);    // number → string: "42"

// Escaping characters
let quote = "Scott says \"JavaScript is awesome!\"";




// ============================================================
// MODULE 3 — Arrays
// ============================================================

// Create an array
let fruits = ["apple", "banana", "mango", "peach"];

// Access items — index starts at 0!
console.log(fruits[0]);     // "apple"
console.log(fruits[1]);     // "banana"
console.log(fruits[3]);     // "peach"

// Change an item
fruits[1] = "blueberry";    // replaces "banana"

// Array length — no ()!
console.log(fruits.length); // 4

// Add and remove items
fruits.push("kiwi");        // add to END — returns new length (5)
fruits.pop();               // remove from END — returns removed item ("kiwi")
fruits.unshift("grape");    // add to FRONT — returns new length
fruits.shift();             // remove from FRONT — returns removed item ("grape")

// The big trick — what they RETURN:
let newLength = fruits.push("cherry");   // returns LENGTH
let removed = fruits.pop();              // returns the ITEM

// Splice — modify middle of array
// splice(startIndex, deleteCount, newItem)
fruits.splice(1, 1, "strawberry");  // at index 1, remove 1, insert "strawberry"

// Convert array to string
let fruitString = fruits.join(", ");    // "apple, strawberry, mango, peach"
let fruitString2 = fruits.toString();   // same but no custom delimiter

// Convert string to array
let cities = "Toronto,Barrie,Ottawa";
let cityArray = cities.split(",");      // ["Toronto", "Barrie", "Ottawa"]

// Multidimensional array — array inside an array
let myMixedArray = ["Scott", 55, true, [1, "hello"]];
console.log(myMixedArray[3][0]);    // 1 — access inner array

// Loop through array with for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Loop through array with forEach — cleaner!
fruits.forEach((fruit) => {
    console.log(fruit);
});

// products.js style — loop and build a table
let products = ["Pizza: 5.99", "Juice: 4.99", "Milk: 6.95"];
let total = 0;

products.forEach((product) => {
    // Split the product string into name and price
    let detail = product.split(":");
    let price = Number(detail[1]);
    // Add price to total
    total += price;
});

console.log("Total: $" + total.toFixed(2));  // rounds to 2 decimal places




// ============================================================
// MODULE 4 — Conditionals & Loops
// ============================================================

// Simple if statement — else is OPTIONAL
let isRaining = true;
if (isRaining) {
    console.log("Bring an umbrella!");
}

// if / else if / else
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
console.log(grade);  // "B"

// Logical operators
let temp = 22;
let weather = "sunny";

// AND — both conditions must be true
if (weather === "sunny" && temp >= 20) {
    console.log("Great day for a walk!");
}

// OR — at least one condition must be true
if (weather === "rainy" || weather === "windy") {
    console.log("Stay inside!");
}

// NOT — flips true/false
if (weather !== "rainy") {
    console.log("No rain today!");
}

// Ternary operator — one line if/else
// condition ? "value if true" : "value if false"
let msg = temp >= 20 ? "Warm!" : "Cold!";
console.log(msg);  // "Warm!"

// Switch statement
let day = "Monday";
switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}

// for loop — most common
// (initializer ; exit condition ; final expression)
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// for loop through array
let animals = ["cat", "dog", "bird"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// break — exit loop early
for (let i = 0; i < 10; i++) {
    if (i === 5) break;         // stops at 5
    console.log(i);             // 0, 1, 2, 3, 4
}

// continue — skip current iteration
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;      // skips 5
    console.log(i);             // 0, 1, 2, 3, 4, 6, 7, 8, 9
}

// while loop — YOU must increment manually!
let j = 0;
while (j < animals.length) {
    console.log(animals[j]);
    j++;    // MUST write this or infinite loop!
}

// do...while — always runs at least once
let k = 0;
do {
    console.log(animals[k]);
    k++;
} while (k < animals.length);

// forEach loop — cleanest for arrays, no i++ needed
animals.forEach((animal) => {
    console.log(animal);
});




// ============================================================
// MODULE 5 — Functions & Scope
// ============================================================

// Named function
function greet(name) {
    return "Hello, " + name + "!";
}
let result = greet("Melika");   // "Hello, Melika!"
console.log(result);

// Function with no return — return is OPTIONAL
function sayHello(name) {
    console.log("Hi " + name);
    // no return needed
}
sayHello("Scott");

// Function with multiple parameters
function add(a, b) {
    return a + b;
}
console.log(add(3, 7));     // 10

// Anonymous function — stored in a variable
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));    // 20

// Arrow function — shorter syntax
const divide = (a, b) => {
    return a / b;
};
console.log(divide(10, 2));     // 5

// Scope — where variables live
let globalVar = "I am global";  // accessible everywhere

function scopeExample() {
    let localVar = "I am local";    // only inside this function
    console.log(globalVar);         // OK — can access global
    console.log(localVar);          // OK — can access local
}

scopeExample();
console.log(globalVar);     // OK — global is accessible outside
// console.log(localVar);   // ERROR! localVar doesn't exist here

// Calling a function within a function
function mainFunction() {
    let myValue = 42;
    subFunction(myValue);   // pass value as argument
}

function subFunction(value) {
    console.log("Value is: " + value);
}

mainFunction();     // logs "Value is: 42"

// Returning a value and using it
function getBackgroundColor(element) {
    return element.style.backgroundColor;
}
// let color = getBackgroundColor(para);
// para.style.color = color;

// Building a message panel function (from custom.js)
function displayMessage(msgText, msgType) {
    // Create a new paragraph element
    let msgPanel = document.createElement("p");
    // Add the message text
    msgPanel.textContent = msgText;
    // Add a class based on message type
    if (msgType === "error") {
        msgPanel.classList.add("error");
    } else if (msgType === "warning") {
        msgPanel.classList.add("warning");
    } else {
        msgPanel.classList.add("default");
    }
    // Append to body
    document.body.append(msgPanel);
    // Return the background color
    return msgPanel.style.backgroundColor;
}




// ============================================================
// MODULE 6 — Events
// ============================================================

// Basic event listener — NO () on function name!
const myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", handleClick2);

function handleClick2() {
    console.log("clicked!");
}

// Common events
myBtn.addEventListener("click", handleClick2);       // mouse click
myBtn.addEventListener("mouseover", handleClick2);   // mouse hover
myBtn.addEventListener("mouseout", handleClick2);    // mouse leaves
document.addEventListener("keydown", handleClick2);  // keyboard press

// Remove event listener
myBtn.removeEventListener("click", handleClick2);

// Event object — gives info about the event
myBtn.addEventListener("click", (event) => {
    console.log(event);                 // the whole event object
    console.log(event.target);          // the element that was clicked
    console.log(event.target.nodeName); // "BUTTON" — always UPPERCASE!
});

// Arrow function with event object
const h1 = document.querySelector("h1");
h1.addEventListener("click", (event) => {
    event.target.style.color = "blue";  // change color of what was clicked
});

// Prevent default browser behaviour
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
    // Stop form from submitting if email is empty
    if (emailInput.value.trim() === "") {
        event.preventDefault();     // stops the form!
        console.log("Email is required!");
    }
});

// Applying events to multiple elements
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick2);
}

// Event delegation — ONE listener on parent handles ALL children
// Instead of adding listener to each image:
const thumbBar = document.querySelector(".thumb-bar");
const displayedImg = document.querySelector(".displayed-img");

thumbBar.addEventListener("click", (event) => {
    // Check that what was clicked is actually an IMG element
    if (event.target && event.target.nodeName === "IMG") {
        // Change the main image source
        displayedImg.src = event.target.src;
    }
});

// Why use delegation?
// Instead of 5 listeners (one per image) → just 1 listener on parent
// Better performance!

// Random color generator (from events.js)
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
    let rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
}

document.querySelector("button").addEventListener("click", bgChange);


// ============================================================
// END OF STUDY CODE
// Good luck Melika! You've got this! 💪
// ============================================================
