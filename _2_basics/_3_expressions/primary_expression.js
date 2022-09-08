// function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.
// In most cases, the value of this is determined by how a function is called (runtime binding).
// It can't be set by assignment during execution, and it may be different each time the function is called.
// ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and
// ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};
console.log(test.func());
// expected output: 42

//   function keyword can be used to define a function inside an expression.
// You can also define functions using the Function constructor and a function declaration.
const getRectArea = function (width, height) {
  return width * height;
};
console.log(getRectArea(3, 4));
// expected output: 12

// class expression is one way to define a class in ECMAScript 2015. Similar to function expressions,
// class expressions can be named or unnamed. If named, the name of the class is local to the class body only.
// JavaScript classes use prototype-based inheritance.
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};
console.log(new Rectangle(5, 8).area());
// expected output: 40

// function* keyword can be used to define a generator function inside an expression
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};
let str = "";
for (const val of foo()) {
  str = str + val;
}
console.log(str);
// expected output: "abc"

// yield keyword is used to pause and resume a generator function (function* or legacy generator function
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}
const iterator = foo(0);
console.log(iterator.next().value);
// expected output: 0
console.log(iterator.next().value);
// expected output: 1

// yield* expression is used to delegate to another generator or iterable object.
function* func1() {
  yield 42;
}
function* func2() {
  yield* func1();
}
const iterator = func2();
console.log(iterator.next().value);
// expected output: 42

// async function keyword can be used to define async functions inside expressions.
// You can also define async functions using an async function statement.
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
const add = async function (x) {
  // async function expression assigned to a variable
  let a = await resolveAfter2Seconds(20);
  let b = await resolveAfter2Seconds(30);
  return x + a + b;
};
add(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});
(async function (x) {
  // async function expression used as an IIFE
  let p_a = resolveAfter2Seconds(20);
  let p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});

// await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

//  JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
let fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
const object1 = { a: "foo", b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"
const a = "foo";
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };
console.log(object2.b);
// expected output: 42
const object3 = { a, b, c };
console.log(object3.a);
// expected output: "foo"

// The RegExp object is used for matching text with a pattern
let re = /ab+c/i; // literal notation
let re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
let re = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument (Starting with ECMAScript 6)

// grouping operator ( ) controls the precedence of evaluation in expressions.
console.log(1 + 2 * 3); // 1 + 6
// expected output: 7
console.log(1 + 2 * 3); // 1 + 6
// expected output: 7
console.log((1 + 2) * 3); // 3 * 3
// expected output: 9
console.log(1 * 3 + 2 * 3); // 3 + 6
// expected output: 9
