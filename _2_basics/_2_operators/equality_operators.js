//  equality operator (==) checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.
console.log(1 == 1);
// expected output: true
console.log("hello" == "hello");
// expected output: true
console.log("1" == 1);
// expected output: true
console.log(0 == false);
// expected output: true

//  inequality operator (!=) checks whether its two operands are not equal, returning a Boolean result. Unlike the strict inequality operator, it attempts to convert and compare operands that are of different types.
console.log(1 != 1);
// expected output: false
console.log("hello" != "hello");
// expected output: false
console.log("1" != 1);
// expected output: false
console.log(0 != false);
// expected output: false

//  strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
console.log(1 === 1);
// expected output: true
console.log("hello" === "hello");
// expected output: true
console.log("1" === 1);
// expected output: false
console.log(0 === false);
// expected output: false

// strict inequality operator (!==) checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.
console.log(1 !== 1);
// expected output: false
console.log("hello" !== "hello");
// expected output: false
console.log("1" !== 1);
// expected output: true
console.log(0 !== false);
// expected output: true
