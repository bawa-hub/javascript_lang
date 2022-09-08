//  String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

// charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);
// expected output: "The character code 113 is equal to q"

// codePointAt() method returns a non-negative integer that is the UTF-16 code point value.
const icons = "☃★♲";
console.log(icons.codePointAt(1));
// expected output: "9733"

// concat() method concatenates the string arguments to the calling string and returns a new string.
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));
// expected output: "Hello World"
console.log(str2.concat(", ", str1));
// expected output: "World, Hello"

// static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="

// static String.fromCodePoint() method returns a string created by using the specified sequence of code points
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// expected output: "☃★♲你"

// toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
const dotted = "İstanbul";
console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// expected output: "i̇stanbul"
console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// expected output: "istanbul"

// toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
const city = "istanbul";
console.log(city.toLocaleUpperCase("en-US"));
// expected output: "ISTANBUL"
console.log(city.toLocaleUpperCase("TR"));
// expected output: "İSTANBUL"

// toLowerCase() method returns the calling string value converted to lower case.
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."

// toString() method returns a string representing the specified object.
const stringObj = new String("foo");
console.log(stringObj);
// expected output: String { "foo" }
console.log(stringObj.toString());
// expected output: "foo"

// toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one)
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
const greeting = "   Hello world!   ";
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trim());
// expected output: "Hello world!";

// trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
const greeting = "   Hello world!   ";
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimEnd());
// expected output: "   Hello world!";

// trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
const greeting = "   Hello world!   ";
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimStart());
// expected output: "Hello world!   ";

// valueOf() method returns the primitive value of a String object.
const stringObj = new String("foo");
console.log(stringObj);
// expected output: String { "foo" }
console.log(stringObj.valueOf());
// expected output: "foo"
