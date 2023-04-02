// avaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
const Employee = {
  firstname: "John",
  lastname: "Doe",
};
console.log(Employee.firstname);
// expected output: "John"
delete Employee.firstname;
console.log(Employee.firstname);
// expected output: undefined

// void operator evaluates the given expression and then returns undefined.
void (function test() {
  console.log("boo!");
  // expected output: "boo!"
})();
try {
  test();
} catch (e) {
  console.log(e);
  // expected output: ReferenceError: test is not defined
}

// typeof operator returns a string indicating the type of the unevaluated operand.
console.log(typeof 42);
// expected output: "number"
console.log(typeof "blubber");
// expected output: "string"
console.log(typeof true);
// expected output: "boolean"
console.log(typeof undeclaredVariable);
// expected output: "undefined"

// unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
const x = 1;
const y = -1;
console.log(+x);
// expected output: 1
console.log(+y);
// expected output: -1
console.log(+"");
// expected output: 0
console.log(+true);
// expected output: 1
console.log(+false);
// expected output: 0
console.log(+"hello");
// expected output: NaN

// unary negation operator (-) precedes its operand and negates it.
const x = 4;
const y = -x;
console.log(y);
// expected output: -4
const a = "4";
const b = -a;
console.log(b);
// expected output: -4

// bitwise NOT operator (~) inverts the bits of its operand. Like other bitwise operators, it converts the operand to a 32-bit signed integer
const a = 5; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101
console.log(~a); // 11111111111111111111111111111010
// expected output: -6
console.log(~b); // 00000000000000000000000000000010
// expected output: 2
// logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true
const a = 3;
const b = -2;
console.log(!(a > 0 || b > 0));
// expected output: false
