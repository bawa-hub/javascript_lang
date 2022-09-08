// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(""));
// expected output: "FireAirWater"
console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("at"));
// expected output: false

// toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });
console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

// toString() method returns a string representing the specified array and its elements.
const array1 = [1, 2, "a", "1a"];
console.log(array1.toString());
// expected output: "1,2,a,1a"
