// in operator returns true if the specified property is in the specified object or its prototype chain
const car = { make: "Honda", model: "Accord", year: 1998 };
console.log("make" in car);
// expected output: true
delete car.make;
if ("make" in car === false) {
  car.make = "Suzuki";
}
console.log(car.make);
// expected output: "Suzuki"

// instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car);
// expected output: true
console.log(auto instanceof Object);
// expected output: true

// less than operator (<) returns true if the left operand is less than the right operand, and false otherwise.
console.log(5 < 3);
// expected output: false
console.log(3 < 3);
// expected output: false
// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n < 5);
// expected output: true
console.log("aa" < "ab");
// expected output: true

// greater than operator (>) returns true if the left operand is greater than the right operand, and false otherwise.
console.log(5 > 3);
// expected output: true
console.log(3 > 3);
// expected output: false
// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n > 5);
// expected output: false
console.log("ab" > "aa");
// expected output: true

// less than or equal operator (<=) returns true if the left operand is less than or equal to the right operand, and false otherwise.
console.log(5 <= 3);
// expected output: false
console.log(3 <= 3);
// expected output: true
// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n <= 5);
// expected output: true
console.log("aa" <= "ab");
// expected output: true

// greater than or equal operator (>=) returns true if the left operand is greater than or equal to the right operand, and false otherwise.
console.log(5 >= 3);
// expected output: true
console.log(3 >= 3);
// expected output: true
// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n >= 5);
// expected output: false
console.log("ab" >= "aa");
// expected output: true
