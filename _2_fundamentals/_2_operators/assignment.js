// simple assignment operator (=) is used to assign a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables
let x = 2;
const y = 3;
console.log(x);
// expected output: 2
console.log((x = y + 1)); // 3 + 1
// expected output: 4
console.log((x = x * y)); // 4 * 3
// expected output: 12

// multiplication assignment operator (*=) multiplies a variable by the value of the right operand and assigns the result to the variable.
let a = 2;
console.log((a *= 3));
// expected output: 6
console.log((a *= "hello"));
// expected output: NaN

//  exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.
let a = 3;
console.log((a **= 2));
// expected output: 9
console.log((a **= 0));
// expected output: 1
console.log((a **= "hello"));
// expected output: NaN

// division assignment operator (/=) divides a variable by the value of the right operand and assigns the result to the variable.
let a = 3;
console.log((a /= 2));
// expected output: 1.5
console.log((a /= 0));
// expected output: Infinity
console.log((a /= "hello"));
// expected output: NaN

// division assignment operator (/=) divides a variable by the value of the right operand and assigns the result to the variable.
let a = 3;
console.log((a /= 2));
// expected output: 1.5
console.log((a /= 0));
// expected output: Infinity
console.log((a /= "hello"));
// expected output: NaN

// remainder assignment operator (%=) divides a variable by the value of the right operand and assigns the remainder to the variable.
let a = 3;
console.log((a %= 2));
// expected output: 1
console.log((a %= 0));
// expected output: NaN
console.log((a %= "hello"));
// expected output: NaN

// addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.
let a = 2;
let b = "hello";
console.log((a += 3)); // addition
// expected output: 5
console.log((b += " world")); // concatenation
// expected output: "hello world"

// subtraction assignment operator (-=) subtracts the value of the right operand from a variable and assigns the result to the variable.
let a = 2;
console.log((a -= 3));
// expected output: -1
console.log((a -= "Hello"));
// expected output: NaN

// left shift assignment operator (<<=) moves the specified amount of bits to the left and assigns the result to the variable.
let a = 5; // 00000000000000000000000000000101
a <<= 2; // 00000000000000000000000000010100
console.log(a);
// expected output: 20

// right shift assignment operator (>>=) moves the specified amount of bits to the right and assigns the result to the variable.
let a = 5; //  00000000000000000000000000000101
a >>= 2; //  00000000000000000000000000000001
console.log(a);
// expected output: 1
let b = -5; // -00000000000000000000000000000101
b >>= 2; // -00000000000000000000000000000010
console.log(b);
// expected output: -2

// unsigned right shift assignment operator (>>>=) moves the specified amount of bits to the right and assigns the result to the variable.
let a = 5; //  00000000000000000000000000000101
a >>>= 2; //  00000000000000000000000000000001
console.log(a);
// expected output: 1
let b = -5; // -00000000000000000000000000000101
b >>>= 2; //  00111111111111111111111111111110
console.log(b);
// expected output: 1073741822

//  bitwise AND assignment operator (&=) uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011
console.log(a); // 00000000000000000000000000000001
// expected output: 1

// bitwise XOR assignment operator (^=) uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable.
let a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011
console.log(a); // 00000000000000000000000000000110
// expected output: 6

// bitwise OR assignment operator (|=) uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable.
let a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011
console.log(a); // 00000000000000000000000000000111
// expected output: 7

// logical AND assignment (x &&= y) operator only assigns if x is truthy.
let a = 1;
let b = 0;
a &&= 2;
console.log(a);
// expected output: 2
b &&= 2;
console.log(b);
// expected output: 0

//  logical OR assignment (x ||= y) operator only assigns if x is falsy.
const a = { duration: 50, title: "" };
a.duration ||= 10;
console.log(a.duration);
// expected output: 50
a.title ||= "title is empty.";
console.log(a.title);
// expected output: "title is empty"

//  logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).
const a = { duration: 50 };
a.duration ??= 10;
console.log(a.duration);
// expected output: 50
a.speed ??= 25;
console.log(a.speed);
// expected output: 25

// spread and rest operator
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// expected output: Array [30,40,50]

// https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
