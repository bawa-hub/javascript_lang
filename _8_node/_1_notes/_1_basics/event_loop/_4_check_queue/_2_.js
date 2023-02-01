const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("readfile 1");
  setImmediate(() => console.log("setImmediate inside readfile"));
});

process.nextTick(() => console.log("nextTick 1"));
Promise.resolve().then(() => console.log("promise.resolve 1"));
setTimeout(() => console.log("setTimeout 1"), 0);

for (let i = 0; i < 2000000000; i++) {}

// output:

// nextTick 1
// promise.resolve 1
// setTimeout 1
// readfile 1
// setImmediate inside readfile

/***
 * Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed.
 */
