// recursive function is a function that calls itself until it doesn’t.
// And this technique is called recursion
function recurse() {
  // ...
  recurse();
  // ...
}
// recursive function always has a condition to stop calling itself.
// Otherwise, it will call itself indefinitely
// function recurse() {
//   if (condition) {
//     // stop calling itself
//     //...
//   } else {
//     recurse();
//   }
// }

function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(3);

function sumOfDigits(num) {
  if (num == 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
console.log(sumOfDigits(12345));
