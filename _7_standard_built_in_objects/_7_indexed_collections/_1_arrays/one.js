// Array.isArray() method determines whether the passed value is an Array.
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false

// Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
Array.of(7); // [7]
Array(7); // array of 7 empty slots
Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]

// pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

// push() method adds one or more elements to the end of an array and returns the new length of the array
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push("chickens", "cats", "dogs");
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

// reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// expected output: "array1:" Array ["three", "two", "one"]

// sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
