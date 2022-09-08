// By default, the JavaScript provides the Object() function:
console.log(Object);
// [Function: Object]
// Please note that the Object() is a function
console.log(typeof Object); // 'function'

// It also provides an anonymous object that can be referenced via the prototype property of the Object function
console.log(Object.prototype);

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
// avaScript links the Person.prototype object to the Object.prototype object via the [[Prototype]],
// which is known as a prototype linkage.
// see _4_3_JS-prototype-Person-prototype.svg image or https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-prototype.svg

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
