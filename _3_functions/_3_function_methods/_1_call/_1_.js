// In JavaScript all functions are object methods.
// If a function is not a method of a JavaScript object, it is a function of the global object

// Method Reuse: With the call() method, you can write a method that can be used on different objects

// call() can be used to invoke (call) a method with an owner object as an argument (parameter).
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1)); // John Doe
console.log(person.fullName.call(person2)); // Mary Doe

// call() Method with Arguments
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person.fullName.call(person1, "Oslo", "Norway")); // John Doe,Oslo,Norway
