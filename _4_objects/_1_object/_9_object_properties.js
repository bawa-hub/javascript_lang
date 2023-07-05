"use strict";
// JavaScript specifies characteristics of properties of objects via internal attributes surrounded by the two pair of square brackets e.g., [[Enumerable]]
// There are two types of object properties: data properties and accessor properties.

// 1) Data properties

// data property contains a single location for a data value.
// A data property has four attributes:
// [[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
//  [[Enumerable]] – indicates that if a property will be returned in the for...in loop.
//  [[Writable]] – specifies that the value of a property can be changed.
//  [[Value]] – contains the actual value of a property.

// By default, the [[Configurable]] , [[Enumerable]], and [[Writable]] attributes set to true for all properties defined directly on an object
//  default value of the [[Value]] attribute is undefined.
let person = {};
person.age = 25;
person.ssn = "012-38-9119";
console.log(person.age); // 25
delete person.age;
console.log(person.age); // undefined
// Since the default value of the [[Configurable]] attribute is set to true, you can remove it via the delete operator:
for (let prop in person) {
  console.log(prop);
}
// enumerable attribute of all the properties defined on an object is true. It means that you can iterate over all properties using the for...in loop

// To change any attribute of a property, you use the Object.defineProperty() method.
// Object.defineProperty() method accepts three arguments:
//     An object.
//     A property name of the object.
//     A property descriptor object that has four properties: configurable, enumerable, writable, and value.
// If you use the Object.defineProperty() method to define a property of the object,
// the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.
let person1 = {};
Object.defineProperty(person1, "ssn", {
  configurable: false,
  value: "012-38-9119",
});
console.log(person1);
delete person1.ssn; // TypeError: Cannot delete property 'ssn' of #<Object>
console.log(person1);

// makes the ssn property of person object non-enumerable by setting the enumerable attribute to false.
Object.defineProperty(person, "ssn", {
  enumerable: false,
});
for (let prop in person) {
  console.log(prop);
}

// 2) Accessor properties

// Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.
// But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]]
// When you read data from an accessor property, the [[Get]] function is called automatically to return a value. The default return value of the [[Get]] function is undefined.
// If you assign a value to an accessor property, the [[Set]] function is called automatically.
let animal = {
  firstName: "John",
  lastName: "Doe",
};
Object.defineProperty(animal, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (value) {
    let parts = value.split(" ");
    if (parts.length == 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw "Invalid name format";
    }
  },
});
console.log(animal.fullName);

// Define multiple properties: Object.defineProperties()
var product = {};
Object.defineProperties(product, {
  name: {
    value: "Smartphone",
  },
  price: {
    value: 799,
  },
  tax: {
    value: 0.1,
  },
  netPrice: {
    get: function () {
      return this.price * (1 + this.tax);
    },
  },
});
console.log(
  "The net price of a " +
    product.name +
    " is " +
    product.netPrice.toFixed(2) +
    " USD"
);
// output
// The net price of a Smartphone is 878.90 USD

// JavaScript object property descriptor
// Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property.
// The Object.getOwnPropertyDescriptor() method takes two arguments:
//      An object
//      A property of the object
// returns a descriptor object that describes a property.
// the descriptor object has four properties: configurable, enumerable, writable, and value
let boy = {
  firstName: "John",
  lastName: "Doe",
};
let descriptor = Object.getOwnPropertyDescriptor(boy, "firstName");
console.log(descriptor);
// output
// { value: 'John',
//   writable: true,
//   enumerable: true,
//   configurable: true }
