let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2); // 2 will replace x
// this is same as
let multiplyByTwo = function (y) {
  let x = 2;
  console.log(x * y);
};

multiplyByTwo(5); // 10

// here multiplyByTwo is copy of multiply and x,y can be predefined
