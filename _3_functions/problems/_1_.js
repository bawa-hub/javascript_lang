// find sum(1)(2)(3)(4)(5)....()

// recursion type
let sum = function (a) {
  return function (b) {
    if (b) return sum(a + b);
    else return a;
  };
};

console.log(sum(1)(2)(3)(4)());
