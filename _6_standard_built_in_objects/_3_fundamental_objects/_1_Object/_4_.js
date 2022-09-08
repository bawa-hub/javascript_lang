// Object.isFrozen() determines if an object is frozen.
const object1 = {
  property1: 42,
};
console.log(Object.isFrozen(object1));
// expected output: false
Object.freeze(object1);
console.log(Object.isFrozen(object1));
// expected output: true

// isPrototypeOf() method checks if an object exists in another object's prototype chain.
function Foo() {}
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
const bar = new Bar();
console.log(Foo.prototype.isPrototypeOf(bar));
// expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));
// expected output: true

// Object.isSealed() method determines if an object is sealed.
const object1 = {
  property1: 42,
};
console.log(Object.isSealed(object1));
// expected output: false
Object.seal(object1);
console.log(Object.isSealed(object1));
// expected output: true

// Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

// Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object
const object1 = {};
Object.preventExtensions(object1);
try {
  Object.defineProperty(object1, "property1", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}

// propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable and is the object's own property
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;
console.log(object1.propertyIsEnumerable("property1"));
// expected output: true
console.log(array1.propertyIsEnumerable(0));
// expected output: true
console.log(array1.propertyIsEnumerable("length"));
// expected output: false
