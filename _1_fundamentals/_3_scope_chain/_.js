// https://www.javascripttutorial.net/javascript-variable-scope/

// whenever execution context is created, a lexical environment is also created
// lexical environment is the local memory along with reference to lexical environment of its parent

function a() {
  var b = 1;
  c();
  function c() {
    console.log(b, d);
  }
}
var d = 2;
a();
console.log(b) // referenceError: b is not defined

// here first b inside c() searches for in local memory i.e. inside c()
// then it searches in its parent i.e. inside a()
// then it will search in its parent parent i.e. global scope. e.g. in case of d

// so, scope chain is nothing but this way of finding the variable
// scope chain is the chain of lexical environment and parent references

// you can see this things in chrome dev tools in call stack
