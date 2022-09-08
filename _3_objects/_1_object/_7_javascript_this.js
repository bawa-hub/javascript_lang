// in other languages
// this keyword represents the instance of the current object in the method of the class.
// And the this keyword is only relevant within a method of the class,
// meaning that you cannot use it outside of a method.

// in javascript
// you can use the this keyword in the global and function contexts.
// Moreover, the behavior of the  this keyword changes between strict and non-strict mode.

// this references the object that is currently calling the function
const counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next();

// In the global context, the this references the global object,
// which is the window object on the web browser or global object on Node.js.
this.color = "Red";
// console.log(window.color); // 'Red' (in browser)
console.log(this.color); // 'Red' (in node)

// https://www.javascripttutorial.net/javascript-this/ for more
