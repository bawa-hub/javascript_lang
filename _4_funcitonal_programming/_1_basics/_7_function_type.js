// All functions in JavaScript are objects. They are the instances of the Function type.
// Since functions are objects, they have properties and methods like other objects.

// Functions properties
// Each function has two properties: length and prototype.
//     The length property determines the number of named arguments specified in the function declaration.
//     The prototype property references the actual function object.
function swap(x, y) {
  let tmp = x;
  x = y;
  y = tmp;
}
console.log(swap.length); // 2
console.log(swap.prototype); // Object{}

// Typically, a function is invoked like a callable function.
function fn() {
  // ...
}
fn();
//  And function can be called as a constructor to create a new object
let f = new fn();

// ES6 added a new property called target.new that allows you to detect
// whether a function ( fn) is called as a normal function ( fn())
// or as a constructor using the new operator ( new fn()).
// If a function is called normally ( f()), the new.target will be undefined.
// On the other hand, if the function is called using the new keyword,
// the new.target will reference the constructor
function fn1() {
  console.log(new.target);
}
fn1(); // undefined
let f1 = new fn1(); // [Function: fn]

// A function object has three methods: apply(), call() and bind().

// The apply() and call() methods call a function with a given this value and arguments.
// The difference between the apply() and call() is that
// you need to pass the arguments to the apply() method as an array-like object,
// whereas you pass the arguments to the call() function individually
let cat = { type: "Cat", sound: "Meow" };
let dog = { type: "Dog", sound: "Woof" };
let say = function (greeting) {
  console.log(greeting);
  // access current this
  console.log(this.type + " says " + this.sound);
};
say.apply(cat, ["Hi"]);
// Hi
// Cat says Meow
say.apply(dog, ["Hi"]);
// Hi
// Dog says Woof
say.call(cat, "Hi");
// Hi
// Cat says Meow
say.call(dog, "Hi");
// Hi
// Dog says Woof

// The bind() method creates a new function instance
// whose this value is bound to the object that you provide
let car = {
  speed: 5,
  start: function () {
    console.log("Start with " + this.speed + " km/h");
  },
};
let aircraft = {
  speed: 10,
  fly: function () {
    console.log("Flying");
  },
};
// aircraft has no start() method.
// To start an aircraft, you can use the bind() method of the start() method of the car object
let taxiing = car.start.bind(aircraft);
// bind() method returns a new function that is assigned to the taxiing variable
taxiing();
car.start.call(aircraft);
// aircraft object borrows the start() method of the car object via the bind(), call() or apply() method.
// For this reason, the bind(), call(), and apply() methods are also known as borrowing functions
