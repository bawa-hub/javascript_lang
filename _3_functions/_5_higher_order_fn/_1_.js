// functions that take one or more functions as arguments, or return a function as their result.

/*************************************** Without using HOF *****************/

const radius = [1, 2, 3];

// function to calculate area of the circle
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

// function to calculate diameter of the circle
const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));
console.log(calculateDiameter(radius));

/************************************** using HOF *****************/
// logic to clculate area [CALLBACK FUNCTION]
const area = function (radius) {
  return Math.PI * radius * radius;
};

// logic to calculate diameter [CALLBACK FUNCTION]
const diameter = function (radius) {
  return 2 * radius;
};

// [CALLBACK FUNCTION]
const circumeference = function (radius) {
  return 2 * Math.PI * radius;
};

// a reusable function to calculate area, diameter, etc [HIGHER ORDER FUNCTION]
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumeference));

// How to Use Higher Order Functions

// You can use higher order functions in a variety of ways.
// When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.
// When working with objects, you can use the Object.entries() function to create a new array from an object.
// When working with functions, you can use the compose() function to create complex functions from simpler ones.

/*************************** Similarity with map function */

// it is a polyfill
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
console.log(radius.map(area));
