setTimeout(() => console.log("setTimeout 1"), 0);
setTimeout(() => {
  console.log("setTimeout 2");
  process.nextTick(() => console.log("inner Tick inside setTimeout"));
}, 0);
setTimeout(() => console.log("setTimeout 3"), 0);

process.nextTick(() => console.log("process.nextTick 1"));
process.nextTick(() => {
  console.log("process.nextTick 2");
  process.nextTick(() => console.log("process.nextTick inside nextTick"));
});
process.nextTick(() => console.log("process.nextTick 3"));

Promise.resolve().then(() => console.log("promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("promise.resolve 2");
  process.nextTick(() =>
    console.log("process.nextTick inside promese.resolve")
  );
});
Promise.resolve().then(() => console.log("promise.resolve 3"));

// output:

// process.nextTick 1
// process.nextTick 2
// process.nextTick 3
// process.nextTick inside nextTick
// promise.resolve 1
// promise.resolve 2
// promise.resolve 3
// process.nextTick inside promese.resolve
// setTimeout 1
// setTimeout 2
// inner Tick inside setTimeout
// setTimeout 3

/**
 *
 * Callbacks in microtask queues are executed in between the execution of callbacks in the timer queue.
 */
