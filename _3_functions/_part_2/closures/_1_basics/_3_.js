// JavaScript closures in a loop
for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
// output
// after 4 second(s):4
// after 4 second(s):4
// after 4 second(s):4

// reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure.
// It remembers the value of i from the last iteration of the loop, which is 4.
// In addition, all three closures created by the for-loop share the same global scope access the same value of i
// To fix this issue, you need to create a new closure scope in each iteration of the loop.
// There are two popular solutions: IIFE & let keyword

// Using the IIFE solution
// IIFE creates a new scope by declaring a function and immediately execute it.
for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log("after " + index + " second(s):" + index);
    }, index * 1000);
  })(index);
}
// after 1 second(s):1
// after 2 second(s):2
// after 3 second(s):3

// Using let keyword in ES6
// use the let keyword to declare a variable that is block-scoped.
// use the let keyword in the for-loop, it will create a new lexical scope in each iteration.
// In other words, you will have a new index variable in each iteration
for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
// after 1 second(s):1
// after 2 second(s):2
// after 3 second(s):3
