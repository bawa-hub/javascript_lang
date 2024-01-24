// When you execute a piece of JavaScript code, the JavaScript engine creates the global execution context.
// The global execution context has two phases: creation and execution.
// During the creation phase, the JavaScript allocated memory to variables and function variables
// assign undefined to variables and code to function variables;
// note: variable with arrow function and anonymous function are assigned to undefined not code
// This feature is known as hoisting in JavaScript.

// Variable hoisting
console.log(counter); // undefined
var counter = 1;
console.log(counter); // undefined
counter = 1;

// The let keyword
console.log(counter);
let counter = 1;
// "ReferenceError: Cannot access 'counter' before initialization

// The error message explains that the counter variable is already in the heap memory. 
// However, it hasn’t been initialized.
// Behind the scenes, the JavaScript engine hoists the variable declarations that use the let keyword. 
// However, it doesn’t initialize the let variables.

// Function Hoisting
// Like variables, the JavaScript engine also hoists the function declarations.
let x = 20,
  y = 10;

let result = add(x, y);
console.log(result);

function add(a, b) {
  return a + b;
}

// https://www.javascripttutorial.net/javascript-hoisting/ for more
