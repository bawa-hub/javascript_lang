function say(msg = "Hi") {
  console.log(msg);
}
say();
say("hello");

// In JavaScript, a parameter has a default value of undefined.
function sayAgain(msg) {
  console.log(msg);
}
sayAgain();

// another way to achieve default parameter
function fn(msg) {
  msg = typeof msg !== "undefined" ? msg : "Hii";
  console.log(msg);
}
fn();

// Passing undefined arguments
function createDiv(
  height = "100px",
  width = "100px",
  border = "solid 1px red"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}
createDiv(); // uses the default values for the parameters.
// use the default values for the height and width parameters and specific border style.
// In this case, you need to pass undefined values to the first two parameters:
createDiv(undefined, undefined, "solid 5px blue");

// Using other parameters in default values
function add(x = 1, y = x, z = x + y) {
  return x + y + z;
}
console.log(add()); // 4

// parameter list seems to have its own scope.
// If you reference the parameter that has not been initialized yet, you will get an error.
function subtract(x = y, y = 1) {
  return x - y;
}
subtract(10); // Uncaught ReferenceError: Cannot access 'y' before initialization
