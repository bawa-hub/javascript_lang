let numbers = [1, 2, 4, 7, 3, 5, 6];

function isOddNumber(number) {
  return number % 2;
}

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// isOddNumber is a callback function
