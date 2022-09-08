// function declaration (function statement) defines a function with the specified parameters.
// You can also define functions using the Function constructor and a function expression.
function calcRectArea(width, height) {
  return width * height;
}
console.log(calcRectArea(5, 6));
// expected output: 30

// function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
function* generator(i) {
  yield i;
  yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value);
// expected output: 10
console.log(gen.next().value);
// expected output: 20

// An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// Async functions may also be defined as expressions.
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall();

// return statement ends function execution and specifies a value to be returned to the function caller.
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}
console.log(getRectArea(3, 4));
// expected output: 12
console.log(getRectArea(-3, 4));
// expected output: 0

// class declaration creates a new class with a given name using prototype-based inheritance.
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4, 3).area);
// expected output: 12
