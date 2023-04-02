// bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011
console.log(a & b); // 00000000000000000000000000000001
// expected output: 1

// bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011
console.log(a | b); // 00000000000000000000000000000111
// expected output: 7

// bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011
console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6
