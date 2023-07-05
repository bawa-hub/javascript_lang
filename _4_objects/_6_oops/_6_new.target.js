// new.target detects whether a function or constructor was called using the new operator.

// new.target in functions
function Person(name) {
  if (!new.target) {
    throw "must use new operator with Person";
  }
  this.name = name;
}

// JavaScript new.target in constructors
class Person {
  constructor(name) {
    this.name = name;
    console.log(new.target.name);
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

let john = new Person("John Doe"); // Person
let lily = new Employee("Lily Bush", "Programmer"); // Employee
