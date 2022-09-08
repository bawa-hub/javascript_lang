// Where callbacks really shine are in asynchronous functions,
//  where one function has to wait for another function (like waiting for a file to load).

function myDisplayer(sum) {
  console.log(sum);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
