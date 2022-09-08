let person = {
  firstName: "John",
  lastName: "Doe",
};
person.greet = function () {
  console.log("Hello!");
};
person.greet();

// Object method shorthand
let person1 = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
};

// ES6 provides you with the concise method syntax
let person2 = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    console.log("Hello, World!");
  },
};

person.greet();

// The this value
// Inside a method, the this value references the object that invokes the method.
let person3 = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person3.getFullName());
