let Person = class {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
};
let person = new Person("John Doe");
console.log(typeof Person); // function

// Similar to function expressions, class expressions are not hoisted

// JavaScript classes are first-class citizens.
// It means that you can pass a class into a function, return it from a function, and assign it to a variable

function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi() {
      console.log("Hi");
    }
  }
);

greeting.sayHi(); // 'Hi'

// Singleton
// Singleton is a design pattern that limits the instantiation of a class to a single instance.
// It ensures that only one instance of a class can be created throughout the system.
let app = new (class {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`Starting the ${this.name}...`);
  }
})("Awesome App");

app.start(); // Starting the Awesome App...
