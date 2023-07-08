// Promise.any() method accepts a list of Promise objects as an iterable object:
Promise.any(iterable);

// If one of the promises in the iterable object is fulfilled,
// the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise:

// Promise.any() returns a promise that is fulfilled with any first fulfilled promise
// even if some promises in the iterable object are rejected:

// 1) All promises fulfilled
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 fulfilled");
    resolve(1);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 fulfilled");
    resolve(2);
  }, 2000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
  console.log("Returned Promise");
  console.log(value);
});
// Promise 1 fulfilled
// Returned Promise
// 1
// Promise 2 fulfilled

// 2) One promise rejected
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 rejected");
    reject("error");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 fulfilled");
    resolve(2);
  }, 2000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
  console.log("Returned Promise");
  console.log(value);
});
//   Promise 1 rejected
//   Promise 2 fulfilled
//   Returned Promise
//   2

// 3) All promises rejected
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 rejected");
    reject("error1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 rejected");
    reject("error2");
  }, 2000);
});

const p = Promise.any([p1, p2]);
p.catch((e) => {
  console.log("Returned Promise");
  console.log(e, e.errors);
});
//   Promise 1 rejected
//   Promise 2 rejected
//   Returned Promise
//   [AggregateError: All promises were rejected] [ 'error1', 'error2' ]

// When to use the JavaScript Promise.any() method

// you use the Promise.any() to return the first fulfilled promise
// Once a promise is fulfilled, the Promise.any() method does not wait for other promises to be complete
