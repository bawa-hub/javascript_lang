// Promise.all()
// static method to aggregate results from multiple asynchronous operations.
// Promise.all() static method takes an iterable of promises:
Promise.all(iterable);

// 1) Resolved promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});

// The first promise has resolved
// The second promise has resolved
// The third promise has resolved
// Results: 10,20,30
// Total: 60

// 2) Rejected promises
// returns a Promise that is rejected if any of the input promises are rejected.
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject("Failed");
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3])
  .then(console.log) // never execute
  .catch(console.log);

// The first promise has resolved
// The second promise has rejected
// Failed
// The third promise has resolved

// Promise.race()
// static method accepts a list of promises as an iterable object
// and returns a new promise that fulfills or rejects as soon as
// there is one promise that fulfills or rejects,
// with the value or reason from that promise
Promise.race(iterable);

// 1) Simple JavaScript Promise.race()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});

Promise.race([p1, p2])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`));

//   The first promise has resolved
//   Resolved: 10
//   The second promise has resolved

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(20);
  }, 2 * 1000);
});

Promise.race([p1, p2])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`));

// The first promise has resolved
// Resolved: 10
// The second promise has rejected
