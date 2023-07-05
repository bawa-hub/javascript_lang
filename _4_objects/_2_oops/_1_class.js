// A JavaScript class is a blueprint for creating objects.
// A class encapsulates data and functions that manipulate data.

// JavaScript classes are syntactic sugar over the prototypal inheritance.
// In other words, ES6 classes are just special functions

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
let john = new Person("John Doe");
let name = john.getName();
console.log(name); // "John Doe"

console.log(typeof Person); // function
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// class declarations are not hoisted like function declarations.
// all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.
// class methods are non-enumerable.
// If you use a constructor/prototype pattern, you have to use the Object.defineProperty() method to make a property non-enumerable

// calling the class constructor without the new operator will result in an error
let john = Person("John Doe");
// Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
