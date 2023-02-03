// An anonymous function is a function without a name.
(function () {
  //...
});

/**
 * if you don’t place the anonymous function inside the (), you’ll get a syntax error
 * The () makes the anonymous function an expression that returns a function object.
 * whole assignment of the anonymous function to a variable makes a valid expression,
 * you don’t need to wrap the anonymous function inside the parentheses ()
 */

// An anonymous function is often not accessible after its initial creation.
let show = function () {
  console.log("Anonymous function");
};
show();

// Using anonymous functions as arguments of other functions
setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

// Immediately invoked function execution

// If you want to create a function and execute it immediately after declaration,
// you can use the anonymous function like this
(function () {
  console.log("IIFE");
})();

// with arguments
let person = {
  firstName: "John",
  lastName: "Doe",
};

(function () {
  console.log(`${person.firstName} ${person.lastName}`);
})(person);

// Arrow functions
// ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions:
// let add = function (a, b) {
//   return a + b;
// };
let add = (a, b) => a + b;
