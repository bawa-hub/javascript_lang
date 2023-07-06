// a function bundled together with its lexical scope is called closure
function x() {
  let a = 1;
  function y() {
    console.log(a);
  }
  a = 2;
  // it return not only funciton but a closure (function and reference to its lexical variables)
  return y;
}
let z = x();
console.log(z); // [Function: y]
z(); // 2 , because a refers to not value but referenct to that variable

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
// magic of this is closure.
// In other words, the hi() function is a closure.

// A closure is a function that preserves the outer scope in its inner scope.

// nested closure
function z() {
  var b = 100;
  function x() {
    let a = 1;
    function y() {
      console.log(a);
    }
    a = 2;
    y();
  }
  x();
}

// more practical example
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

// common uses of closures
// Module design pattern
// currying
// functions like once
// memoize
// maintaing state in async world
// setTimouts
// Iterators
// and many more ...
