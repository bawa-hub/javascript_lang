// bind() method returns a new function, when invoked, has its "this" sets to a specific value

// syntax
// fn.bind(thisArg[, arg1[, arg2[, ...]]])

// the bind() method doesn’t immediately execute the function.
// It just returns a new version of the function whose "this" sets to thisArg argument.

// Using JavaScript bind() for function binding
let person = {
  name: "John Doe",
  getName: function () {
    console.log(this.name);
  },
};

setTimeout(person.getName, 1000); // undefined

// The this inside the setTimeout() function is set to the global object in non-strict mode and undefined in the strict mode.
// when the callback person.getName is invoked, the name does not exist in the global object, it is set to undefined

// To fix the issue, you can wrap the call to the person.getName method in an anonymous function
setTimeout(function () {
  person.getName();
}, 1000);

// Or you can use the bind() method:
let f = person.getName.bind(person);
setTimeout(f, 1000);

// Using bind() to borrow methods from a different object
let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};
let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};
let run = runner.run.bind(flyer, 20);
run(); // Flyer runs at 20 mph.

// ability to borrow a method of an object without making a copy of that method and maintain it in two separate places is very powerful in JavaScript
