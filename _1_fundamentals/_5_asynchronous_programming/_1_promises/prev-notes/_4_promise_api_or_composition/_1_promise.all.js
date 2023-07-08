// Promise.all()
//  static method to aggregate results from multiple asynchronous operations.

// Promise.all() static method accepts a list of Promises and returns a Promise that:

//     resolves when every input Promise has resolved or
//     rejected when any of the input Promise has rejected.

// syntax
// Promise.all(iterable);
// iterable = list of promises passed

// If all the input promises resolve, the Promise.all() static method returns a new Promise that resolves to an array of resolved values from the input promises, in an iterator order.

// If one of the input promises rejects, the Promise.all() returns  a new Promise that rejects with the rejection reason from the first rejected promise. The subsequent rejections will not affect the rejection reason. The returned Promise also handles the rejections silently.

// The Promise.all() is useful when you want to aggregate the results from multiple asynchronous operations.

// resolved promise example
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The first promise has resolved");
//     resolve(10);
//   }, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The second promise has resolved");
//     resolve(20);
//   }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The third promise has resolved");
//     resolve(30);
//   }, 3 * 1000);
// });
// To wait for all three promises to resolve, you use the Promise.all() method:
// Promise.all([p1, p2, p3]).then((results) => {
//   const total = results.reduce((p, c) => p + c);

//   console.log(`Results: ${results}`);
//   console.log(`Total: ${total}`);
// });

// reject promise example
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject("Failed");
  }, 2 * 1000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p4, p5, p6])
  .then(console.log) // never execute
  .catch(console.log);
