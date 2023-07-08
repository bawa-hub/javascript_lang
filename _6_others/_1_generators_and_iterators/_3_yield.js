// The yield keyword allows you to pause and resume a generator function (function*)
// [variable_name] = yield [expression];

// A) Returning a value

function* foo() {
  yield 1;
  yield 2;
  yield 3;
}
let f = foo();
console.log(f.next());
// { value: 1, done: false }

// B) Returning undefined

function* bar() {
  yield;
}

let b = bar();
console.log(b.next());
// { value: undefined, done: false }

// C) Passing a value to the next() method

function* generate() {
  let result = yield;
  console.log(`result is ${result}`);
}

let g = generate();
console.log(g.next());

console.log(g.next(1000));
// { value: undefined, done: false }
// result is 1000
// { value: undefined, done: true }

// D) Using yield in an array

function* baz() {
  let arr = [yield, yield];
  console.log(arr);
}
var z = baz();
console.log(z.next());
console.log(z.next(1));
console.log(z.next(2));
// { value: undefined, done: false }
// { value: undefined, done: false }
// [ 1, 2 ]
// { value: undefined, done: true }

// E) Using yield to return an array

function* yieldArray() {
  yield 1;
  yield [20, 30, 40];
}

let y = yieldArray();

console.log(y.next());
console.log(y.next());
console.log(y.next());
// { value: 1, done: false }
// { value: [ 20, 30, 40 ], done: false }
// { value: undefined, done: true }

// F) Using the yield to return individual elements of an array

function* yieldArrayElements() {
  yield 1;
  yield* [20, 30, 40];
}

let a = yieldArrayElements();

console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 20, done: false }
console.log(a.next()); // { value: 30, done: false }
console.log(a.next()); // { value: 40, done: false }
// yield* [20, 30, 40];
