// In JavaScript, a variable may store two types of values: primitive and reference
// JavaScript provides seven primitive types as
// boolean,number,BigInt,string,undefined,null,symbol

// and a reference type object.
// The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the stack.
// On the other hand, the size of a reference value is dynamic so JavaScript stores the reference value on the heap

// useful links
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/

// To get the current type of the value that the variable stores, you use the typeof operator:
let counter = 120;
console.log(typeof counter); // "number"
counter = false;
console.log(typeof counter); // "boolean"
counter = "Hi";
console.log(typeof counter); // "string"

// undefined type is a primitive type that has only one value undefined
let name;
console.log(typeof name); // undefined
console.log(typeof undeclaredVar); // undefined

// null type is the second primitive data type that also has only one value null
let obj = null;
console.log(typeof obj); // object
console.log(null == undefined); // true
// The typeof null returns object is a known bug in JavaScript.
// A proposal to fix this was proposed but rejected. The reason was the that fix would break a lot of existing sites.

// JavaScript uses the number type to represent both integer and floating-point numbers.
// range of the number type, you use Number.MIN_VALUE and Number.MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// use Infinity and -Infinity to represent the infinite number.
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

// NaN stands for Not a Number. It is a special numeric value that indicates an invalid number.
console.log("a" / 2); // NaN;

// NaN has two special characteristics:
//     Any operation with NaN returns NaN.
//     The NaN does not equal any value, including itself.
console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false

// ef you want to single quote or double quotes in a literal string, you need to use the backslash to escape it
let message = "I'm also a valid string"; // use \ to escape the single quote (')
console.log(message);

// JavaScript strings are immutable.
// This means that it cannot be modified once created.
// However, you can create a new string from an existing string
let str = "Javascript";
str = str + " String";
console.log(str);
// JavaScript engine creates a new string that holds the new string 'JavaScript String'
// and destroys the original strings 'JavaScript' and ' String'.

// single quote or double quotes in a literal string
let message = "I'm also a valid string"; // use \ to escape the single quote (')

let completed = false;
console.log(typeof completed); // boolean

console.log(Boolean("Hi")); // true
console.log(Boolean("")); // false

console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false

console.log(Boolean({ foo: 100 })); // true on non-empty object
console.log(Boolean(null)); // false

// symbol type does not have a literal form.
let s1 = Symbol();
console.log(typeof s1);
// Symbol function creates a new unique value every time you call it.
console.log(Symbol() == Symbol()); // false

// bigint type represents the whole numbers that are larger than 253 – 1.
// To form a bigint literal number, you append the letter n at the end of the number:
let pageView = 9007199254740991n;
console.log(typeof pageView); // 'bigint'

// object
let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};
// To access a object’s property, you can use
//     The dot notation (.)
//     The array-like notation ([]).
console.log(contact.firstName); // John
console.log(contact["phone"]); // '(408)-555-9999'
