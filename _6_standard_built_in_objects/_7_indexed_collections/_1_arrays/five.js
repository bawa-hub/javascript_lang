// at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);
// expected output: "Using an index of 2 the item returned is 8"
index = -2;
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// expected output: 1
// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4
console.log(beasts.indexOf("giraffe"));
// expected output: -1

// lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));
// expected output: 3
console.log(animals.lastIndexOf("Tiger"));
// expected output: 1

// entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]

// keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

// values() method returns a new Array Iterator object that contains the values for each index in the array
const array1 = ["a", "b", "c"];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"
