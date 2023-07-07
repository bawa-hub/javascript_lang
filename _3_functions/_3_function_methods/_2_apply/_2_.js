const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};
console.log(person.fullName.apply(person1)); //"Mary Doe"

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
person.fullName.apply(person1, ["Oslo", "Norway"]);
