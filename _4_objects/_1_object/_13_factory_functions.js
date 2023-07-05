// A factory function is a function that returns a new object
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}
let john = createPerson("John", "Doe"),
  jane = createPerson("Jane", "Doe");

console.log(john.getFullName());
console.log(jane.getFullName());

// When you create an object, that object requires a space in the memory.
// If you have a thousand person objects, you need one thousand spaces in the memory to store these objects.
// These person objects, however, have the same getFullName() method

// Object.create() method
// Object.create() method creates a new object using an existing object as the prototype of the new object
// Object.create(proto, [propertiesObject]);
const behavior = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

function createPerson1(firstName, lastName) {
  let person = Object.create(behavior);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

let john1 = createPerson("John", "Doe"),
  jane1 = createPerson("Jane", "Doe");

console.log(john1.getFullName());
console.log(jane1.getFullName());
