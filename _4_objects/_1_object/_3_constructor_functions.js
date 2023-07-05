// a constructor function is a regular function with the following convention:
// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.

// ES6 introduces the class keyword that allows you to define a custom type.
// And classes are just syntactic sugar over the constructor functions with some enhancements

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Basically, the new operator does the following:
// Create a new empty object and assign it to this.
// Return the this value.

// functionally equivalent to:
function Person(firstName, lastName) {
  // this = {};
  // add properties to this
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
  // return this;
}

let person = new Person("John", "Doe");
// equals to
// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
console.log(person.getFullName());

// problem with the constructor function is that when you create multiple instances of the Person,
// the this.getFullName() is duplicated in every instance.
// This is not memory efficient.
// To resolve this, you can use the prototype so that all instances of a custom type can share the same method.

// Returning from constructor functions
// a constructor function implicitly returns this that set to the newly created object. But if it has a return statement, then here’s the rule:
//     If return is called with an object, the constructor function returns that object instead of this.
//     If return is called with a value other than an object, it’s ignored.

// Calling a constructor function without the new keyword
let person1 = Person("John", "Doe");
console.log(person.firstName);
// TypeError: Cannot read property 'firstName' of undefined

// To prevent a constructor function to be invoked without the new keyword,
// ES6 introduced the new.target property.

// If a constructor function is called with the new keyword, the new.target returns a reference to the function.
// Otherwise, it returns undefined

function Person2(firstName, lastName) {
  console.log(new.target);

  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
let person2 = Person2("John", "Doe");
// undefined
let person3 = new Person("John", "Doe");
// [Function: Person]

function Person3(firstName, lastName) {
  if (!new.target) {
    throw Error("Cannot be called without the new keyword");
  }
  this.firstName = firstName;
  this.lastName = lastName;
}

function Person4(firstName, lastName) {
  if (!new.target) {
    return new Person(firstName, lastName);
  }

  this.firstName = firstName;
  this.lastName = lastName;
}

let person4 = Person4("John", "Doe");

console.log(person4.firstName);
