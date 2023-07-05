// here function inside setTimeout is a closure with reference to same variable i, which is 4 after for loop ends
function x() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
// output:
// 4
// 4
// 4

// as let is block scoped , function inside settimeout creates a closure with new variable each time loop runs
function x() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
// output:
// 1
// 2
// 3

// every time close function is called new copy of i is passed to function close
function x() {
  for (var i = 1; i <= 3; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x();
// output:
// 1
// 2
// 3
