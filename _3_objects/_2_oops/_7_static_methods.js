// static methods are bound to a class, not the instances of that class

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static createAnonymous(gender) {
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
  }
}

let anonymous = Person.createAnonymous("male");

// call the static method from an instance of the class, you’ll get an error
let person = new Person("James Doe");
let anonymous = person.createAnonymous("male");
// TypeError: person.createAnonymous is not a function

// Calling a static method from the class constructor or an instance method
// className.staticMethodName();
// or
// this.constructor.staticMethodName();
