/*********** Function statement aka Function Declaration  **************/
a();
function a() {
  //
}

/*********** Function Expression **************/
b();
// this will give typeError
var b = function () {
  //
};

// difference between function statement and function expression is hoisting,
// function b is treated just like another variable

/*********** Anonymous Function **************/
// functions without a name
// it is used in a place, where function used as a value
var c = function () {
  //
};

/*********** Named Function Expression **************/
var c = function xyz() {
  //
};
// note: you cannot call xyz as this is not in global scope, it can be called in local scope like:
var c = function xyz() {
  console.log(xyz);
};

/*********** Difference between parameter and argument **************/
var d = function (param) {
  console.log(param);
};
d("hi"); // hi is argument

/******************* First Class Functions/Citizens **************/

// functions in JavaScript are first-class citizens,
// which means you can store functions in variables,
// pass them to other functions as arguments,
// and return them from other functions as values.

// Storing functions in variables
function add(a, b) {
  return a + b;
}
let sum = add;
// let result = add(10, 20);
// Or execute it like this:
let result = sum(10, 20);
console.log(result);

// Passing a function to another function
// Because functions are values, you can pass a function as an argument into another function
function average(a, b, fn) {
  return fn(a, b) / 2;
}
result = average(10, 20, sum);
console.log(result);

// Returning functions from functions
// Since functions are values, you can return a function from another function.
function compareBy(propName) {
  return function (a, b) {
    // a, b are objects
    let x = a[propName],
      y = b[propName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
let products = [
  { name: "iPhone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];
console.log("Products sorted by name:");
products.sort(compareBy("name"));
console.table(products);
// sort products by price
console.log("Products sorted by price:");
products.sort(compareBy("price"));
console.table(products);

/***
 *
 * Note that a[propertyName] returns the value of the propertyName of the a object.
 * It’s equivalent to a.propertyName.
 * However, if the propertyName contains a space like 'Discount Price',
 * you need to use the square bracket notation to access it.
 */

//  More JavaScript Functions are First-Class Citizens example
function cmToIn(length) {
  return length / 2.54;
}
function inToCm(length) {
  return length * 2.54;
}
function convert(fn, length) {
  return fn(length);
}
let inches = convert(cmToIn, 10);
console.log(inches);
let cm = convert(inToCm, 10);
console.log(cm);
