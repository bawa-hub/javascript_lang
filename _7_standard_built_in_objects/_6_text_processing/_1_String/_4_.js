// slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(4, 19));
// expected output: "quick brown fox"
console.log(str.slice(-4));
// expected output: "dog."
console.log(str.slice(-9, -5));
// expected output: "lazy"

// split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]);
// expected output: "fox"
const chars = str.split("");
console.log(chars[8]);
// expected output: "k"
const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat"));
// expected output: true
console.log(str1.startsWith("Sat", 3));
// expected output: false

// substring() method returns the part of the string between the start and end indexes, or to the end of the string.
const str = "Mozilla";
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"
