// Object.values() -- method to access the own enumerable properties of an object.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
const profile = Object.values(person);
console.log(profile);

// Object.entries() -- method that accepts an object and returns own enumerable string-keyed property [key, value] pairs of the object.
const ssn = Symbol("ssn");
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  [ssn]: "123-345-789",
};
const kv = Object.entries(person1);
// console.log(kv);ssn is not a string-key property of the person object, so it is not included in the result.

// Object.assign() -- copies all enumerable and own properties from the source objects to the target object.
// It returns the target object.

//  clone an object
let widget = {
  color: "red",
};
let clonedWidget = Object.assign({}, widget);
console.log(clonedWidget);
// Object.assign() only carries a shallow clone, not a deep clone.

// merge objects
let box = {
  height: 10,
  width: 20,
  color: "Blue",
};
let style = {
  color: "Red",
  borderStyle: "solid",
};
let styleBox = Object.assign({}, box, style);
console.log(styleBox);
// If the source objects have the same property, the property of the later object overwrites the earlier one:

// Object.is() -- to check if two values are the same.
// The Object.is() behaves like the === operator with two differences:
//     -0 and +0
//     NaN
let amount = +0,
  volume = -0;
console.log(volume === amount);
console.log(Object.is(amount, volume));
// https://www.javascripttutorial.net/es6/javascript-object-is/ for reference
