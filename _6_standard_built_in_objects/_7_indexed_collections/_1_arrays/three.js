// filter() method creates a new array with all elements that pass the test implemented by the provided function
const people = [
  {
    name: "James",
    age: 31,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "Paul",
    age: 65,
  },
  {
    name: "Ringo",
    age: 49,
  },
  {
    name: "George",
    age: 34,
  },
];
const youngPeople = people.filter((person) => person.age < 40);
// console.log(youngPeople);
// [ { name: 'James', age: 31 }, { name: 'George', age: 34 } ]

// find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
// expected output: 12

// findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true

//   some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true

// forEach() method executes a provided function once for each array element.
const array2 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array3 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array3.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array3.reduce(reducer, 5));
// expected output: 15

// reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
const array = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(array);
// expected output: Array [4, 5, 2, 3, 0, 1]

// Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]
