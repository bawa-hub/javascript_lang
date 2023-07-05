var person = {
  firstName: "John",
  lastName: "Doe",
  ssn: "299-24-2351",
};
for (var prop in person) {
  console.log(prop + ":" + person[prop]);
}

// for...in loop & inheritance
// When you loop over properties of an object that inherits from another object,
// the for...in statement goes up in the prototype chain and enumerates over inherited properties
var decoration = {
  color: "red",
};
var circle = Object.create(decoration);
circle.radius = 10;
for (const prop in circle) {
  console.log(prop);
}
// If you want to enumerate only the own properties of an object,
// you use the hasOwnProperty() method:
for (const prop in circle) {
  if (circle.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// for...in loop and Array
// It’s good practice to not use the for...in to iterate over an array,
// especially when the order of the array elements is important.
const items = [10, 20, 30];
let total = 0;
for (const item in items) {
  total += items[item];
}
console.log(total);

// However, someone may set a property of the built-in Array type in their libraries as follows
Array.prototype.foo = 100;
for (var prop in items) {
  total += items[prop];
}
console.log(total);
