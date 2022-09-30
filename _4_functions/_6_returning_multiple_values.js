// JavaScript functions can return a single value.
// To return multiple values from a function, you can pack the return values as elements of an array or as properties of an object.

// Returning multiple values from a function using an array
function getNames() {
  // get names from the database or API
  let firstName = "John",
    lastName = "Doe";
  // return as an array
  return [firstName, lastName];
}
let names = getNames();
const fname = names[0];
const lname = names[1];
// or using destructuring assignment
// const [fname, lname] = getNames();
console.log(fname, lname);

// Returning multiple values from an function using an object
function getNames1() {
  // get names from the database or API
  let firstName = "John",
    lastName = "Doe";

  // return values
  return {
    firstName,
    lastName,
  };
}
let names1 = getNames1();
let firstName = names1.firstName,
  lastName = names1.lastName;
// or using object destructuring
// let {firstName, lastName} = getNames1();
console.log(firstName + " " + lastName);
