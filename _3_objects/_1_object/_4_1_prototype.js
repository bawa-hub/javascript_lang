// In JavaScript, objects can inherit features from one another via prototypes.
// Every object has its own property called prototype

// Because a prototype itself is also another object, the prototype has its own prototype
// This creates a something called prototype chain
// The prototype chain ends when a prototype has null for its own prototype.

// When you access a property of an object, if the object has that property, it’ll return the property value
// if you access a property that doesn’t exist in an object, the JavaScript engine will search in the prototype of the object.
// If the JavaScript engine cannot find the property in the object’s prototype,
// it’ll search in the prototype’s prototype until either it finds the property or reaches the end of the prototype chain

// By default, the JavaScript provides the Object() function:
console.log(Object);
// [Function: Object]
// Please note that the Object() is a function
console.log(typeof Object); // 'function'

// It also provides an anonymous object that can be referenced via the prototype property of the Object function
console.log(Object.prototype);
console.log(typeof Object.prototype); // 'object'

// Object.prototype object has many methods and properties such as toString() and valueOf().
// Note when a function is a value of a property of an object, it’s called a method.
// So methods basically are properties of an object.

// Object.prototype also has an important property called constructor that references the Object() function
console.log(Object.prototype.constructor === Object); // true

// Example
// Constructor function
function Person(name) {
  this.name = name;
}
// Person() function has a property called prototype that references an anonymous object.
// And the anonymous object has the constructor property that references the Person() function.
// thus it make a cycle
console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor);
// JavaScript links the Person.prototype object to the Object.prototype object via the [[Prototype]],
// which is known as a prototype linkage.
// see  https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-prototype.svg

// Defining methods in the javascript prototype object
Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + "!";
};

let p1 = new Person("John");
// Internally, the JavaScript engine creates a new object named p1 and
// links the p1 object to the Person.prototype object via the prototype linkage:
// The link between p1, Person.prototype, and Object.protoype is called a prototype chain.
// see image https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-object.svg

// Getting prototype linkage

// Shadowing

// https://www.javascripttutorial.net/javascript-prototype/ for more detailed information with picture
