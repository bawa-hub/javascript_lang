
// let keyword is similar to the var keyword, except that these variables are blocked-scope
let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

// When you declare a global variable using the var keyword, you add that variable to the property list of the global object
var a = 10;
console.log(window.a); // 10
// when you use the let keyword to declare a variable, that variable is not attached to the global object as a property
let b = 20;
console.log(window.b); // undefined

// JavaScript let and callback function in a for loop
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 5
// 5
// 5
// 5
// 5
// the variable i is a global variable.
// After the loop, its value is 5. When the callback functions are passed to the setTimeout() function executes,
// they reference the same variable i with the value 5

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// let keyword declares a new variable in each loop iteration

// Redeclaration
// var keyword allows you to redeclare a variable without any issue
var counter = 0;
var counter;
console.log(counter); // 0
// redeclaring a variable using the let keyword will result in an error:
let counter = 0;
let counter;
console.log(counter);
// Uncaught SyntaxError: Identifier 'counter' has already been declared

// JavaScript let variables and hoisting
{
  console.log(counter); //
  let counter = 10;
}
// Uncaught ReferenceError: Cannot access 'counter' before initialization

// you may think that a variable declaration using the let keyword does not hoist, but it does.
// In fact, the JavaScript engine will hoist a variable declared by the let keyword to the top of the block.
// However, the JavaScript engine does not initialize the variable.
// Therefore, when you reference an uninitialized variable, you’ll get a ReferenceError.

// Temporal death zone (TDZ)
// A variable declared by the let keyword has a so-called temporal dead zone (TDZ).
// The TDZ is the time from the start of the block until the variable declaration is processed.
{
  // enter new scope, TDZ starts
  let log = function () {
    console.log(message); // messagedeclared later
  };

  // This is the TDZ and accessing log
  // would cause a ReferenceError

  let message = "Hello"; // TDZ ends
  log(); // called outside TDZ
}

{
  // TDZ starts
  console.log(typeof myVar); // undefined
  console.log(typeof message); // ReferenceError
  let message; // TDZ ends
}

// The temporal death zone prevents you from accidentally referencing a variable before its declaration.

// Differences Between var and let

// #1: Variable scopes

// The var variables belong to the global scope when you define them outside a function
var counter;

// When you declare a variable inside a function using the var keyword, the scope of the variable is local.
function increase() {
  var counter = 10;
}
// cannot access the counter variable here

//  the i variable is a global variable. Therefore, it can be accessed from both inside and after the for loop.
for (var i = 0; i < 5; i++) {
  console.log("Inside the loop:", i);
}
console.log("Outside the loop:", i);
// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// Outside the loop: 5

// the variable i is blocked scope
for (let i = 0; i < 5; i++) {
  console.log("Inside the loop:", i);
}
console.log("Outside the loop:", i);
// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// Uncaught ReferenceError: i is not defined

// #2: Creating global properties

// The global var variables are added to the global object as properties.
// The global object is window on the web browser and global on Node.js:

var counter = 0;
console.log(window.counter); //  0

// let variables are not added to the global object:
let counter = 0;
console.log(window.counter); // undefined

// #3: Redeclaration

// The var keyword allows you to redeclare a variable without any issue:
var counter = 10;
var counter;
console.log(counter); // 10

// if you redeclare a variable with the let keyword, you will get an error:
let counter = 10;
let counter; // error

// #4: The Temporal dead zone

// The let variables have temporal dead zones while the var variables don’t.
// To understand the temporal dead zone, let’s examine the life cycles of both var and let variables, which have two steps: creation and execution.

// The var variables
// In the creation phase, the JavaScript engine assigns storage spaces to var variables and immediately initializes them to undefined
// n the execution phase, the JavaScript engine assigns the var variables the values specified by the assignments if there are ones. Otherwise, the var variables remain undefined.

// The let variables
// In the creation phase, the JavaScript engine assigns storage spaces to the let variables but does not initialize the variables. Referencing uninitialized variables will cause a ReferenceError
// The let variables have the same execution phase as the var variables.

// The temporal dead zone starts from the block until the let variable declaration is processed.
// In other words, it is the location where you cannot access the let variables before they are defined.

// JavaScript const keyword

// const keyword creates a read-only reference to a value.
const CONSTANT_NAME = value;

// const keyword declares blocked-scope variables
// block-scoped variables declared by the const keyword can’t be reassigned.
// variables declared by the let keyword are mutable
// variables created by the const keyword are “immutable”
// you can’t reassign them to different values.
const RATE = 0.1;
RATE = 0.2; // TypeError

// you need to initialize the value to the variable declared by the const keyword.
const RED; // SyntaxError


// JavaScript const and Objects

// The const keyword ensures that the variable it creates is read-only. 
// However, it doesn’t mean that the actual value to which the const variable reference is immutable
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

// you cannot reassign a different value to the person constant like this:
person = { age: 40 }; // TypeError

// If you want the value of the person object to be immutable, you have to freeze it by using the Object.freeze() method
const person = Object.freeze({age: 20});
person.age = 30; // TypeError

// Object.freeze() is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties.
const company = Object.freeze({
  name: 'ABC corp',
  address: {
      street: 'North 1st street',
      city: 'San Jose',
      state: 'CA',
      zipcode: 95134
  }
});
// company.address object is not immutable, you can add a new property to the company.address object as follows:
company.address.country = 'USA'; // OK


// JavaScript const and Arrays

const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]
colors.pop();
colors.pop();
console.log(colors); // []
colors = []; // TypeError
// we cannot reassign the array colors to another array.

// JavaScript const in a for loop

// const will not work in an imperative for loop
for (const i = 0; i < scores.length; i++) { // TypeError
  console.log(scores[i]);
}
// The reason is that the declaration is only evaluated once before the loop body starts.