// https://www.javascripttutorial.net/javascript-prototypal-inheritance/

// The property [[Prototype]] is internal and hidden, but there are many ways to set it.
// One of them is to use the special name __proto__, like this:
let animal = {
  eats: true,
  walk() {
    console.log("Animal Walk");
  },
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};
// sets rabbit.[[Prototype]] = animal
// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal
// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true
// animal is prototype of rabbit just like class

// walk is taken from the prototype
rabbit.walk(); // Animal walk

// The prototype chain can be longer:
let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

// There are only two limitations:
// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.

// Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]

// The prototype is only used for reading properties.
// Write/delete operations work directly with the object.
rabbit.walk = function () {
  console.log("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!

// Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protecte

// The value of “this”
// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
// So, the setter call admin.fullName= uses admin as this, not user

// for..in loop iterates over inherited properties too.

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) console.log(prop); // jumps, then eats

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}
