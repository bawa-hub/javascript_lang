// localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase
console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// expected output: 0

// match() method retrieves the result of matching a string against a regular expression
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
// expected output: Array ["T", "I"]

// matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";
const array = [...str.matchAll(regexp)];
console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]
console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

// normalize() method returns the Unicode Normalization Form of the string.
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
console.log(`${name1}, ${name2}`);
// expected output: "Amélie, Amélie"
console.log(name1 === name2);
// expected output: false
console.log(name1.length === name2.length);
// expected output: false
const name1NFC = name1.normalize("NFC");
const name2NFC = name2.normalize("NFC");
console.log(`${name1NFC}, ${name2NFC}`);
// expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// expected output: true
console.log(name1NFC.length === name2NFC.length);
// expected output: true

// padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string
const str1 = "Breaded Mushrooms";
console.log(str1.padEnd(25, "."));
// expected output: "Breaded Mushrooms........"
const str2 = "200";
console.log(str2.padEnd(5));
// expected output: "200  "

// padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
const str1 = "5";
console.log(str1.padStart(2, "0"));
// expected output: "05"
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber);
// expected output: "************5581"

// static String.raw() method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. (But it is not identical; see explanations in this issue.) It's used to get the raw string form of template literals, that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not
// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath}`);
// expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

// repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
const chorus = "Because I'm happy. ";
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

// replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
// The original string is left unchanged
const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(p.replace("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

// replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
// The original string is left unchanged.
const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(p.replaceAll("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
// global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(p.replaceAll(regex, "ferret"));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// search() method executes a search for a match between a regular expression and this String object
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
