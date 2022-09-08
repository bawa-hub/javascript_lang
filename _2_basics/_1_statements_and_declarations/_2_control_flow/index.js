// block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and may optionally be labelled:
var x = 1;
let y = 1;
if (true) {
  var x = 2;
  let y = 2;
}
console.log(x);
// expected output: 2
console.log(y);
// expected output: 1

// if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}
console.log(testNum(-5));
// expected output: "NOT positive"

//   break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
let i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log(i);
// expected output: 3

// continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}
console.log(text);
// expected output: "012456789"

// switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// empty statement is used to provide no statement, although the JavaScript syntax would expect one.
const array1 = [1, 2, 3];
// Assign all array values to 0
for (let i = 0; i < array1.length; array1[i++] = 0 /* empty statement */);
console.log(array1);
// expected output: Array [0, 0, 0]

// throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}
try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}

// try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
