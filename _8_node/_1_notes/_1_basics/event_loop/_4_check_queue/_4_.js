setImmediate(() => console.log("setImmediate 1"));
setImmediate(() => {
  console.log("setImmediate 2");
  process.nextTick(() => console.log("nextTick 1"));
  Promise.resolve().then(() => console.log("promise.resolve 1"));
});
setImmediate(() => console.log("setImmediate 3"));

// output:

// setImmediate 1
// setImmediate 2
// nextTick 1
// promise.resolve 1
// setImmediate 3

/***
 * Microtask queues callbacks are executed in between check queue callbacks.
 */
