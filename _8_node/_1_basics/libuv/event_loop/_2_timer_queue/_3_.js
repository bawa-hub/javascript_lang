setTimeout(() => console.log("setTimeout 1"), 1000);
setTimeout(() => console.log("setTimeout 2"), 500);
setTimeout(() => console.log("setTimeout 3"), 0);

// output:

// setTimeout 3
// setTimeout 2
// setTimeout 1

/**
 *
 * Timer queue callbacks are execute in FIFO order.
 */
