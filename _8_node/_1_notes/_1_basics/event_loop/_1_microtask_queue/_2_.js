// Microtask queue

Promise.resolve().then(() => console.log("promise.resolve 1"));
process.nextTick(() => console.log("process.nextTick 1"));

// output:

// process.nextTick 1
// promise.resolve 1

/**
 *
 * All callbacks in nextTick queue are executed before callbacks in promise queue
 */
