const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("readableStream close event callback");
});

setImmediate(() => console.log("setImmediate 1"));
setTimeout(() => console.log("setTimeout 1"), 0);
Promise.resolve().then(() => console.log("promise.resolve 1"));
process.nextTick(() => console.log("nextTick 1"));

// output:

// nextTick 1
// promise.resolve 1
// setTimeout 1
// setImmediate 1
// readableStream close event callbac

/***
 * Close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop.
 */
