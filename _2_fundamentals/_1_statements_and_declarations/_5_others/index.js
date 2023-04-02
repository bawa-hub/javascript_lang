// debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}

//  labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to.
let str = "";
loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}
console.log(str);
// expected output: "0234"
