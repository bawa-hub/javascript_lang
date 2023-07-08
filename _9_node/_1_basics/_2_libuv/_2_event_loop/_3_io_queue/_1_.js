/**
 *
 * Most of the async methods from the built-in modules queue the callback function in the I/O queue.
 */

const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("readfile 1");
});

process.nextTick(() => console.log("nextTick 1"));
Promise.resolve().then(() => console.log("promise.resolve 1"));

// output:

// nextTick 1
// promise.resolve 1
// readfile 1

/***
 *
 * Callbacks in the microtask queue are executed before callbacks in the I/O queue.
 */
