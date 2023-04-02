// ES6 introduced a new statement for...of that iterates over an iterable object such as:

//     Built-in Array, String, Map, Set, …
//     Array-like objects such as arguments or NodeList
//     User-defined objects that implement the iterator protocol.

// 1) Iterating over arrays

let scores = [80, 90, 70];

for (let score of scores) {
  score = score + 5;
  console.log(score);
}
// 85
// 95
// 75

// To access the index of the array elements inside the loop, you can use the for...of statement with the entries() method of the array
// array.entries() method returns a pair of [index, element] in each iteration
let colors = ["Red", "Green", "Blue"];

for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index}`);
}
// Red is at index 0
// Green is at index 1
// Blue is at index 2

// 2) In-place object destructuring with for…of

const ratings = [
  { user: "John", score: 3 },
  { user: "Jane", score: 4 },
  { user: "David", score: 5 },
  { user: "Peter", score: 2 },
];

let sum = 0;
for (const { score } of ratings) {
  sum += score;
}

console.log(`Total scores: ${sum}`); // 14
// Total scores: 14

// 3) Iterating over strings

let str = "abc";
for (let c of str) {
  console.log(c);
}
// a
// b
// c

// 4) Iterating over Map objects

let colors = new Map();

colors.set("red", "#ff0000");
colors.set("green", "#00ff00");
colors.set("blue", "#0000ff");

for (let color of colors) {
  console.log(color);
}
// [ 'red', '#ff0000' ]
// [ 'green', '#00ff00' ]
// [ 'blue', '#0000ff' ]

// 5) Iterating over set objects

let nums = new Set([1, 2, 3]);

for (let num of nums) {
  console.log(num);
}

// for...of vs. for...in

// The for...in iterates over all enumerable properties of an object.
// It doesn’t iterate over a collection such as Array, Map or Set.
// Unlike the for...in loop, the for...of iterates a collection, rather than an object.
// In fact, the for...of iterates over elements of any collection that has the [Symbol.iterator] property.

let scores = [10, 20, 30];
scores.message = "Hi";

console.log("for...in:");
for (let score in scores) {
  console.log(score);
}

console.log("for...of:");
for (let score of scores) {
  console.log(score);
}
// for...in:
// 0
// 1
// 2
// message
// for...of:
// 10
// 20
// 30
