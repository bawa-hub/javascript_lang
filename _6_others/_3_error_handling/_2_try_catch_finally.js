// to execute a block whether exceptions occur or not, use the try...catch...finally statement

let result = 0;
try {
  result = add(10, 20);
} catch (e) {
  console.log({ name: e.name, message: e.message });
} finally {
  console.log({ result });
}

// try…catch…finally and return
function fn() {
  try {
    return 1;
  } catch {
    return 2;
  } finally {
    return 3;
  }
}
console.log(fn()); // 3
// finally block always executes,
// the return statement in the finally block returns 3.
// Therefore, the fn() function returns 3.
