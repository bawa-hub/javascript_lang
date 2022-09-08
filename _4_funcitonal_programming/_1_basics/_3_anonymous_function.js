// An anonymous function is a function without a name.
// An anonymous function is often not accessible after its initial creation.
let show = function () {
  console.log("Anonymous function");
};
show();

// Using anonymous functions as arguments of other functions
setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

// Immediately invoked function execution

// If you want to create a function and execute it immediately after declaration,
// you can use the anonymous function like this
(function () {
  console.log("IIFE");
})();

let person = {
  firstName: "John",
  lastName: "Doe",
};

(function () {
  console.log(`${person.firstName} ${person.lastName}`);
})(person);
