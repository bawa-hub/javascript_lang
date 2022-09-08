// When you execute a piece of JavaScript code, the JavaScript engine creates the global execution context.
// The global execution context has two phases: creation and execution.
// During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code.
// This feature is known as hoisting in JavaScript.

// Variable hoisting
// Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script
console.log(counter); // undefined
var counter = 1;
// the first line of code doesn’t cause an error because the JavaScript engine moves the variable declaration to the top of the script.
// the code looks like the following in the execution phase
var counter;
console.log(counter); // undefined
counter = 1;

// The let keyword
console.log(counter);
let counter = 1;
// "ReferenceError: Cannot access 'counter' before initialization

// Function Hoisting
// Like variables, the JavaScript engine also hoists the function declarations.
// It moves the function declarations to the top of the script.
let x = 20,
  y = 10;

let result = add(x, y);
console.log(result);

function add(a, b) {
  return a + b;
}
//  above code is equivalent to the following:
function add(a, b) {
  return a + b;
}

let x = 20,
  y = 10;

let result = add(x, y);
console.log(result);

// https://www.javascripttutorial.net/javascript-hoisting/ for more
