// Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
const prototype1 = {};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true

// hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
const object1 = {};
object1.property1 = 42;
console.log(object1.hasOwnProperty("property1"));
// expected output: true
console.log(object1.hasOwnProperty("toString"));
// expected output: false
console.log(object1.hasOwnProperty("hasOwnProperty"));
// expected output: false

// Object.is() method determines whether two values are the same value
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false
// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true
Object.is(0n, -0n); // true
// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN);
// Polyfill
if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        // This checks for cases 1 and 2 above.
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        // This checks for case 3.
        return x !== x && y !== y;
      }
    },
  });
}

// Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).
const object1 = {};
console.log(Object.isExtensible(object1));
// expected output: true
Object.preventExtensions(object1);
console.log(Object.isExtensible(object1));
// expected output: false
