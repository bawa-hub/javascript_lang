// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well).
// The order of the array returned by Object.entries() is the same as that provided by a for...in loop.
// If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.
const object1 = {
  a: "somestring",
  b: 42,
};
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// expected output:
// "a: somestring"
// "b: 42"

// Object.freeze() method freezes an object. A frozen object can no longer be changed;
// freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
const obj = {
  prop: 42,
};
Object.freeze(obj);
obj.prop = 33;
// Throws an error in strict mode
console.log(obj.prop);
// expected output: 42

// Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(entries);
console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

// Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration
const object1 = {
  property1: 42,
};
const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");
console.log(descriptor1.configurable);
// expected output: true
console.log(descriptor1.value);
// expected output: 42

// Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object
const object1 = {
  property1: 42,
};
const descriptors1 = Object.getOwnPropertyDescriptors(object1);
console.log(descriptors1.property1.writable);
// expected output: true
console.log(descriptors1.property1.value);
// expected output: 42

// Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

// Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object
const object1 = {};
const a = Symbol("a");
const b = Symbol.for("b");
object1[a] = "localSymbol";
object1[b] = "globalSymbol";
const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols.length);
// expected output: 2
