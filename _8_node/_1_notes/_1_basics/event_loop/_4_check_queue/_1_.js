/***
 * To queue a callback function into the check queue, we can use a functin called setImmediate.
 */

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("readfile 1");
});

process.nextTick(() => console.log("nextTick 1"));
Promise.resolve().then(() => console.log("promise.resolve 1"));
setTimeout(() => console.log("setTimeout 1"), 0);
setImmediate(() => console.log("setImmediate 1"));

for (let i = 0; i < 2000000000; i++) {}

// output:

// nextTick 1
// promise.resolve 1
// setTimeout 1
// setImmediate 1
// readfile 1

/***
 *
 * I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete.
 */
