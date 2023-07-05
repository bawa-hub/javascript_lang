// JavaScript pass by value or pass by reference

/**
 * In JavaScript, all function arguments are always passed by value.
 * It means that JavaScript copies the values of the passing variables into arguments inside of the function.
 * Any changes that you make to the arguments inside the function does not affect the passing variables outside of the function.
 * In other words, the changes made to the arguments are not reflected outside of the function.
 * If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. This is not possible in JavaScript.
 */

// Pass-by-value of reference values
let person = {
  name: "John",
  age: 25,
};
function increaseAge(obj) {
  obj.age += 1;
}
increaseAge(person);
console.log(person); // { name: 'John', age: 26 }

// how it works:
/**
 * First, define the person variable that references an object with two properties name and age
 * Next, define the increaseAge() function that accepts an object obj and increases the age property of the obj argument by one.
 * Then, pass the person object to the increaseAge() function:
 * Internally, the JavaScript engine creates the obj reference and make this variable reference the same object that the person variable references.
 * After that, increase the age property by one inside the increaseAge() function via the obj variable
 * Finally, accessing the object via the person reference:
 */

/**
 * It seems that JavaScript passes an object by reference because the change to the object is reflected outside the function.
 * However, this is not the case.
 * In fact, when passing an object to a function, you are passing the reference of that object, not the actual object
 * Therefore, the function can modify the properties of the object via its reference.
 */

// you cannot change the reference passed into the function
let person = {
  name: "John",
  age: 25,
};
function increaseAge(obj) {
  obj.age += 1;
  // reference another object
  obj = { name: "Jane", age: 22 };
}
increaseAge(person);
console.log(person); // { name: 'John', age: 26 }

/**
 * the increaseAage() function changes the age property via the obj argument:
 * And makes the obj reference another object:
 * However, the person reference still refers to the original object whose the age property changes to 26.
 * In other words, the increaseAge() function doesn’t change the person reference.
 */
