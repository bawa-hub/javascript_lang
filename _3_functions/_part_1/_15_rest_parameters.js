// A rest parameter allows you to represent an indefinite number of arguments as an array

function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}
console.log(sum(1, 2, 3));

function sum1(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}
let result = sum1(10, "Hi", null, undefined, 20);
console.log(result);

// JavaScript rest parameters and arrow function
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};

let message = combine("JavaScript", "Rest", "Parameters"); // =>
console.log(message); // JavaScript Rest Parameters

// JavaScript rest parameter in a dynamic function
var showNumbers = new Function("...numbers", "console.log(numbers)");
showNumbers(1, 2, 3);
