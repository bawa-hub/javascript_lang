// a function bundled together with its lexical scope is called closure
function x() {
  let a = 1;
  function y() {
    console.log(a);
  }
  a = 2;
  // it return not only funciton but a closure (function and reference to its lexical variables)
  return y;
}
let z = x();
console.log(z); // [Function: y]
z(); // 2 , because a refers to not value but referenct to that variable

// nested closure
function z() {
  var b = 100;
  function x() {
    let a = 1;
    function y() {
      console.log(a);
    }
    a = 2;
    y();
  }
  x();
}

// common uses of closures
// Module design pattern
// currying
// functions like once
// memoize
// maintaing state in async world
// setTimouts
// Iterators
// and many more ...
