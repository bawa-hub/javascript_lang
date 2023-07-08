// left shift operator (<<) shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.
const a = 5; // 00000000000000000000000000000101
const b = 2; // 00000000000000000000000000000010
console.log(a << b); // 00000000000000000000000000010100
// expected output: 20

// right shift operator (>>) shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name "sign-propagating".
const a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; // -00000000000000000000000000000101
console.log(a >> b); //  00000000000000000000000000000001
// expected output: 1
console.log(c >> b); // -00000000000000000000000000000010
// expected output: -2

// unsigned right shift operator (>>>) (zero-fill right shift) shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes 0, so the result is always non-negative. Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.
const a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; // -00000000000000000000000000000101
console.log(a >>> b); //  00000000000000000000000000000001
// expected output: 1
console.log(c >>> b); //  00111111111111111111111111111110
// expected output: 1073741822
