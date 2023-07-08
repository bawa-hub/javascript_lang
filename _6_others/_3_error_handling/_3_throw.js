// throw statement allows you to throw an exception
// When encountering the throw statement,
// the JavaScript engine stops executing and passes the control to the first catch block in the call stack.
// If no catch block exists, the JavaScript engine terminates the script.

// 1. Using the JavaScript throw statement to throw an exception
function add(x, y) {
  if (typeof x !== "number") {
    throw "The first argument must be a number";
  }
  if (typeof y !== "number") {
    throw "The second argument must be a number";
  }

  return x + y;
}
// const result = add("a", 10);
// console.log(result);
// Uncaught The first argument must be a number

try {
  const result = add("a", 10);
  console.log(result);
} catch (e) {
  console.log(e);
}
// The first argument must be a number

// 2. Using JavaScript throw statement to throw an instance of the Error class
function add(x, y) {
  if (typeof x !== "number") {
    throw new Error("The first argument must be a number");
  }
  if (typeof y !== "number") {
    throw new Error("The second argument must be a number");
  }

  return x + y;
}

try {
  const result = add("a", 10);
  console.log(result);
} catch (e) {
  console.log(e.name, ":", e.message);
}
// Error : The first argument must be a number

// 3) Using JavaScript throw statement to throw a user-defined exception
class NumberError extends Error {
  constructor(value) {
    super(`"${value}" is not a valid number`);
    this.name = "InvalidNumber";
  }
}

function add(x, y) {
  if (typeof x !== "number") {
    throw new NumberError(x);
  }
  if (typeof y !== "number") {
    throw new NumberError(y);
  }

  return x + y;
}
try {
  const result = add("a", 10);
  console.log(result);
} catch (e) {
  console.log(e.name, ":", e.message);
}
// NumberError : "a" is not a valid number
