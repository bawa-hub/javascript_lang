function a() {
  console.log("a");
}
console.log(a.prototype);
// in browser console

// Object { … }
// constructor: function a()
// arguments: null
// caller: null
// length: 0
// name: "a" ​​
// prototype: Object { … }​​
// <prototype>: function ()
// apply: function apply()
// arguments: null​​​
// bind: function bind() ​​​
// call: function call()​​​
// caller: null
// constructor: function Function()
// length: 0
// name: "" ​​​
// toString: function toString()
// Symbol(Symbol.hasInstance): function Symbol.hasInstance()
// <get arguments()>: function arguments()​​​
// <set arguments()>: function arguments()
// <get caller()>: function caller()​​​
// <set caller()>: function caller()
// <prototype>: Object { … }​
// <prototype>: Object { … }

// In JavaScript, a function is an instance of the Function type
function add(x, y) {
  return x + y;
}

console.log(add instanceof Function); // true

// Function.prototype syntax
// functionName.call(thisArg, arg1, arg2, ...);

// By default, the this inside the function is set to the global object i.e., window in the web browsers and global in Node.js.
// in the strict mode, the this inside the function is set to undefined instead of the global object.
// In an event, this refers to the element that received the event
// Methods like call(), apply(), and bind() can refer this to any object

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
