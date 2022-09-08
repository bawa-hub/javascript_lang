// Property accessors provide access to an object's properties by using the dot notation or the bracket notation
const person1 = {};
person1["firstname"] = "Mario";
person1["lastname"] = "Rossi";
console.log(person1.firstname);
// expected output: "Mario"
const person2 = {
  firstname: "John",
  lastname: "Doe",
};
console.log(person2["lastname"]);
// expected output: "Doe"

// new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const car1 = new Car("Eagle", "Talon TSi", 1993);
console.log(car1.make);
// expected output: "Eagle"

// new.target pseudo-property lets you detect whether a function or constructor was called using the new operator. In constructors and functions invoked using the new operator, new.target returns a reference to the constructor or function. In normal function calls, new.target is undefined.
function Foo() {
  if (!new.target) {
    throw "Foo() must be called with new";
  }
}
try {
  Foo();
} catch (e) {
  console.log(e);
  // expected output: "Foo() must be called with new"
}

// import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL.
import.meta;

// super keyword is used to access and call functions on an object's parent.
// The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals.
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);

// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output: 6
console.log(sum.apply(null, numbers));
// expected output: 6
