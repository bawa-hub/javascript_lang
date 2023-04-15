// an object is an unordered collection of key-value pairs
// key of a property can be a string and the value of a property can be any valid JavaScript value e.g., a string, a number, an array, and even a function.
// When a function is a property of of an object, it’s often called a method

/*******There are many ways to create objects in javascript as below*********/

// Object constructor:
// The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.
var object = new Object();

// Object's create method:
// The create method of Object creates a new object by passing the prototype object as a parameter
var object = Object.create(null);

// Object literal syntax:
// The object literal syntax is equivalent to create method when it passes null as parameter
var object = {};

// Function constructor:
// Create any function and apply the new operator to create object instances,
function Person(name) {
  var object = {};
  object.name = name;
  object.age = 21;
  return object;
}
var object = new Person("Sudheer");

// Function constructor with prototype:
// This is similar to function constructor but it uses prototype for their properties and methods,
function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();

// ES6 Class syntax:
// ES6 introduces class feature to create the objects
class Person1 {
  constructor(name) {
    this.name = name;
  }
}
var object = new Person1("Sudheer");

// Singleton pattern:
// A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
var object = new (function () {
  this.name = "Sudheer";
})();
console.log(object);

///////////////////////////////////////////operations////////////////////////////////
let animal = {
  firstName: "John",
  lastName: "Doe",
};

// Accessing properties
// The dot notation (.)
console.log(animal.firstName);
// Array-like notation ( [])
console.log(animal["firstName"] + " " + animal["lastName"]);

// When a property name contains spaces, you need to place it inside quote
let address = {
  "building no": 3960,
  street: "North 1st street",
  state: "CA",
  country: "USA",
};
console.log(address["building no"]);
// console.log(address."building no"); // SyntaxError: Unexpected string

// Reading from a property that does not exist will result in an undefined
console.log(address.district); // undefined

// Modifying the value of a property
animal.firstName = "buildo";
console.log(animal);

// Adding a new property to an object
animal.weight = 10;
console.log(animal);

// Deleting a property of an object
delete animal.weight;
console.log(animal);

// Checking if a property exists
console.log("firstName" in animal);
console.log("id" in animal);

// Iterating over properties of an object using for...in loop
for (const key in animal) {
  console.log(key);
}

// Methods

// type 1
animal.greet = function () {
  console.log("Hello animal");
};
console.log(animal.greet());

// type 2
function speak() {
  console.log("animal speak");
}
animal.speak = speak;
console.log(animal.speak());

// Method shorthand
let boy = {
  firstName: "John",
  lastName: "Doe",
  // greet: function () {
  //   console.log("Hello, World!");
  // },
  // es6 consise method syntax
  greet() {
    console.log("Hello, World!");
  },
};
console.log(boy.greet());

// The this value
let girl = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(girl.getFullName());
