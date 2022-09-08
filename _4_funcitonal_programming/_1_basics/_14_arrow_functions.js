const add = (x, y) => x + y;
console.log(typeof add); // function
console.log(add instanceof Function); // true

// An arrow function doesn’t have the arguments object.
// an arrow function doesn’t have the new.target keyword.

// arrow functions don’t have the prototype property:
function dump(message) {
  console.log(message);
}
let dump1 = (message) => console.log(message);
console.log(dump.hasOwnProperty("prototype")); // true
console.log(dump1.hasOwnProperty("prototype")); // false
