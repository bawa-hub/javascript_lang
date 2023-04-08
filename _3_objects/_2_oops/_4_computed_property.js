// in object literal
let propName = "c";
const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};
console.log(rank.c); // 3

// computed properties for getters and setters of a class
let name = "fullName";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("John", "Doe");
console.log(person.fullName);
// John Doe
