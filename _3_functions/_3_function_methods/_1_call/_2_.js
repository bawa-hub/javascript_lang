// By default, the this inside the function is set to the global object
var greeting = "Hi";
var messenger = {
  greeting: "Hello",
};
function say(name) {
  console.log(this.greeting + " " + name);
}
say.call(this, "John"); // "Hi John"
say.call(messenger, "John"); // "Hello John"

// Using the JavaScript call() method to chain constructors for an object
function Box(height, width) {
  this.height = height;
  this.width = width;
}
function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}
let widget = new Widget("red", 100, 200);
console.log(widget); // Widget { height: 'red', width: 100, color: 200 }

// Using the JavaScript call() method for function borrowing
const car = {
  name: "car",
  start() {
    console.log("Start the " + this.name);
  },
  speedUp() {
    console.log("Speed up the " + this.name);
  },
  stop() {
    console.log("Stop the " + this.name);
  },
};

const aircraft = {
  name: "aircraft",
  fly() {
    console.log("Fly");
  },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();
//   Start the aircraft
//   Speed up the aircraft
//   Fly

// how the arguments object borrows the filter() method of the Array.prototype via the call() function
function isOdd(number) {
  return number % 2;
}
function getOddNumbers() {
  return Array.prototype.filter.call(arguments, isOdd);
}
let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results);
