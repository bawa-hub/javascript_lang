// addition operator (+) produces the sum of numeric operands or string concatenation
console.log(2 + 2);
// expected result: 4
console.log(2 + true);
// expected result: 3
console.log("hello " + "everyone");
// expected result: "hello everyone"
console.log(2001 + ": A Space Odyssey");
// expected result: "2001: A Space Odyssey"

//  subtraction operator (-) subtracts the two operands, producing their difference
console.log(5 - 3);
// expected output: 2
console.log(3.5 - 5);
// expected output: -1.5
console.log(5 - "hello");
// expected output: NaN
console.log(5 - true);
// expected output: 4

//  division operator (/) produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor
console.log(12 / 2);
// expected output: 6
console.log(3 / 2);
// expected output: 1.5
console.log(6 / "3");
// expected output: 2
console.log(2 / 0);
// expected output: Infinity

// multiplication operator (*) produces the product of the operands
console.log(3 * 4);
// expected output: 12
console.log(-3 * 4);
// expected output: -12
console.log("3" * 2);
// expected output: 6
console.log("foo" * 2);
// expected output: NaN

// remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
console.log(12 % 5);
// expected output: 2
console.log(-12 % 5);
// expected output: -2
console.log(4 % 2);
// expected output: 0
console.log(-4 % 2);
// expected output: -0

// exponentiation operator (**) returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow, except it also accepts BigInts as operands.
console.log(3 ** 4);
// expected output: 81
console.log(10 ** -2);
// expected output: 0.01
console.log(2 ** (3 ** 2));
// expected output: 512
console.log((2 ** 3) ** 2);
// expected output: 64
