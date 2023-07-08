// Object.seal() method seals an object, preventing new properties from being added to it and
// marking all existing properties as non-configurable.
// Values of present properties can still be changed as long as they are writable.
const object1 = {
  property1: 42,
};
Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33
delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33

// Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

// toString() method returns a string representing the object.
function Dog(name) {
  this.name = name;
}
const dog1 = new Dog("Gabby");
Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};
console.log(dog1.toString());
// expected output: "Gabby"

// valueOf() method returns the primitive value of the specified object.
function MyNumberType(n) {
  this.number = n;
}
MyNumberType.prototype.valueOf = function () {
  return this.number;
};
const object1 = new MyNumberType(4);
console.log(object1 + 3);
// expected output: 7

// Object.values() method returns an array of a given object's own enumerable property values,
// in the same order as that provided by a for...in loop.
// (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
