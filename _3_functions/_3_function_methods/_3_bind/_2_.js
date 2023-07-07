// Function Borrowing

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log(fullName()); // Hege Nilsen

// Preserving this
// Sometimes the bind() method has to be used to prevent losing this.
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    console.log(this.firstName + " " + this.lastName);
  },
};

person.display();

// When a function is used as a callback, "this" is lost.
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    console.log(this.firstName + " " + this.lastName);
  },
};

setTimeout(person.display, 3000);

// The bind() method solves this problem.
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    console.log(this.firstName + " " + this.lastName);
  },
};

let display = person.display.bind(person);
setTimeout(display, 3000);
