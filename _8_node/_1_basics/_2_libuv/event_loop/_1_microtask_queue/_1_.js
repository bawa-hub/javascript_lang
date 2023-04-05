// Microtask queue

console.log("console log 1");
process.nextTick(() => console.log("proces.nextTick 1"));
console.log("console log 2");

// output:

// console log 1
// console log 2
// proces.nextTick 1

/**
 *
 * All user written synchronous js code takes priority over async code that the runtime would like to eventually execute.
 *
 */
