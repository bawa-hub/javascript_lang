// Function.prototype.apply() method allows you to call a function with a given this value and arguments provided as an array

// syntax
// fn.apply(thisArg, [args]);

// apply() method is similar to the call() method except that it takes the arguments of the function as an array instead of the individual arguments

// 1) Simple JavaScript apply() method example

const person = {
  firstName: "John",
  lastName: "Doe",
};
function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ["Hello", "How are you?"]);
console.log(result); // Hello John. How are you?

// 2) Function borrowing
// apply() method allows an object to borrow the method of another object without duplicating the code
const computer = {
  name: "MacBook",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};
const server = {
  name: "Dell PowerEdge T30",
  isOn: false,
};
let result = computer.turnOn.apply(server);
console.log(result); // The Dell PowerEdge T30 is On
let result = computer.turnOff.apply(server);
console.log(result); // The Dell PowerEdge T30 is Off

// 3) Using the apply() method to append an array to another
let arr = [1, 2, 3];
let numbers = [4, 5, 6];
arr.push.apply(arr, numbers);
console.log(arr);
