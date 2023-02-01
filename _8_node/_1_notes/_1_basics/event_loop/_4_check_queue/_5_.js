setTimeout(() => console.log("setTimeout 1"), 0);
setImmediate(() => console.log("setImmediate 1"));

/***
 * When running setTimeout with delay 0ms and setImmediate method , the order of execution can never be guaranteed.
 */
