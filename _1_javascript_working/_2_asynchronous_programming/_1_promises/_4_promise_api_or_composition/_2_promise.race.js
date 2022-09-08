// Promise.race() static method accepts a list of promises and returns a promise that fulfills
// or rejects as soon as there is one promise that fulfills or rejects,
//  with the value or reason from that promise

// syntax
// Promise.race(iterable)

// Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.

// Because the first promise resolves faster the second one,
// the return promise will resolve with the value from the first promise:
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

// Promise.race([p1, p2])
//   .then((value) => console.log(`Resolved: ${value}`))
//   .catch((reason) => console.log(`Rejected: ${reason}`));

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
