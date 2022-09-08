//  for statement creates a loop that consists of three optional expressions,
// enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.
let str = "";
for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);
// expected output: "012345678"

// while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
let n = 0;
while (n < 3) {
  n++;
}
console.log(n);
// expected output: 3

// for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once
let result = "";
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);
// expected result: "12345"

// for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
const array1 = ["a", "b", "c"];
for (const element of array1) {
  console.log(element);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

// for await...of statement creates a loop iterating over async iterable objects as well as on sync iterables, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined async/sync iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. This statement can only be used inside an async function.
const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};
(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
})();
// 0
// 1
// 2
