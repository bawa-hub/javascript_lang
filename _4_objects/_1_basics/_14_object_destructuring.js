// let { property1: variable1, property2: variable2 } = object;
// identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.
let person = {
  firstName: "John",
  lastName: "Doe",
};
let { firstName: fname, lastName: lname } = person;
console.log(fname, lname);
// If the variables have the same names as the properties of the object
// let { firstName, lastName } = person;
// OR, concisely
({ firstName, lastName } = person);
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// Setting default values
let person1 = {
  fName: "John",
  lName: "Doe",
  currentAge: 28,
};
let { fName, lName, middleName = "", currentAge: age = 18 } = person1;
console.log(middleName); // ''
console.log(age); // 28

// Destructuring a null object
function getPerson() {
  return null;
}
let { fname1, lname1 } = getPerson() || {};
console.log(fname1, lname1);

// Nested object destructuring
let employee = {
  id: 1001,
  name: {
    first_name: "John",
    last_name: "Doe",
  },
};
let {
  name: { first_name, last_name },
  name,
} = employee;
console.log(first_name); // John
console.log(last_name); // Doe
console.log(name);

// Destructuring function arguments
// let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
// let person2 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// display(person);
let display = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`);
let person2 = {
  firstName: "John",
  lastName: "Doe",
};
display(person);
