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
