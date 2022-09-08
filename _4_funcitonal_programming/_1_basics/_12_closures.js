// closure is a function that references variables in the outer scope from its inner scope.
// The closure preserves the outer scope inside its inner scope
// To understand the closures, you need to know how the lexical scoping works first

// Lexical scoping defines the scope of a variable by the position of that variable declared in the source code
let name = "John";
function greeting() {
  let message = "Hi";
  console.log(message + " " + name);
}
// name is a global variable accessible from anywhere including within the greeting() function
// message is a local variable that is accessible only within the greeting() function

// JavaScript engine uses the scope to manage the variable accessibility.

// According to lexical scoping, the scopes can be nested
// and the inner function can access the variables declared in its outer scope

// example 1
function greeting() {
  let message = "Hi";
  function sayHi() {
    console.log(message);
  }
  sayHi();
}
greeting();
// can access message(inner scope) from outer scope

// example 2
function greeting1() {
  let message = "Hi";
  function sayHi() {
    console.log(message);
  }
  return sayHi;
}
let hi = greeting1();
hi(); // still can access the message variable

// the interesting point here is that,
// normally, a local variable only exists during the execution of the function.

// when the greeting1() function has completed executing,
// the message variable is no longer accessible

// we execute the hi() function that references the sayHi() function,
// the message variable still exists
// magic of this is closure. In other words, the hi() function is a closure.

// A closure is a function that preserves the outer scope in its inner scope.

// more ractical example
function greeting2(message) {
  return function (name) {
    return message + " " + name;
  };
}
let sayHi = greeting2("Hi");
let sayHello = greeting2("Hello");
console.log(sayHi("John")); // Hi John
console.log(sayHello("John")); // Hello John
// sayHi() and sayHello() are closures.
// They share the same function body but store different scopes.

// JavaScript closures in a loop
for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
// output
// after 4 second(s):4
// after 4 second(s):4
// after 4 second(s):4

// reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure.
// It remembers the value of i from the last iteration of the loop, which is 4.
// In addition, all three closures created by the for-loop share the same global scope access the same value of i
// To fix this issue, you need to create a new closure scope in each iteration of the loop.
// There are two popular solutions: IIFE & let keyword

// Using the IIFE solution
// IIFE creates a new scope by declaring a function and immediately execute it.
for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log("after " + index + " second(s):" + index);
    }, index * 1000);
  })(index);
}
// after 1 second(s):1
// after 2 second(s):2
// after 3 second(s):3

// Using let keyword in ES6
// use the let keyword to declare a variable that is block-scoped.
// use the let keyword in the for-loop, it will create a new lexical scope in each iteration.
// In other words, you will have a new index variable in each iteration
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
// after 1 second(s):1
// after 2 second(s):2
// after 3 second(s):3
