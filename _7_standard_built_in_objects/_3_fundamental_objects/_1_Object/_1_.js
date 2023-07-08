// Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(person);
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

// Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});
console.log(object1.property1);
// expected output: 42

// static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
const object1 = {};
Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});
object1.property1 = 77;
// throws an error in strict mode
console.log(object1.property1);
// expected output: 42
