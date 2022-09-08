// As defined in Wikipedia, a mixin is a class containing methods that can be used by other classes without a need to inherit from it.
// a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
