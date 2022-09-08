/***
 * lambda or arrow functions --
 * shorter syntax for a function expression
 * does not have its own this, arguments, super, or new.target.
 */

/***
 * first class function
 *
 * In Javascript, functions are first class objects
 * First-class functions means when functions in that language are treated like any other variable
 *
 * a function can be passed as an argument to other functions,
 * can be returned by another function and
 * can be assigned as a value to a variable
 */

const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);

/***
 * first order function
 *
 * that doesn’t accept another function as an argument
 * and doesn’t return a function as its return value
 */

const firstOrder = () => console.log("I am a first order function!");

/***
 * higher order function
 *
 * that accepts another function as an argument
 * or returns a function as a return value or both
 */

const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

/***
 * unary function
 *
 * that accepts exactly one argument
 */

const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value

/***
 * currying function
 *
 * Currying is the process of taking a function with multiple arguments
 * and turning it into a sequence of functions each with only a single argument
 * By applying currying, a n-ary function turns it into a unary function.
 * Curried functions are great to improve code reusability and functional composition
 */

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

/***
 * pure function
 *
 * Pure function is a function where the return value is only determined by its arguments without any side effects
 * If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.
 *
 */

//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]
