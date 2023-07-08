// Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled,
// either resolved or rejected.
Promise.allSettled(iterable);

// Promise.allSettled() method returns a promise that resolves to an array of objects that each describes the result of the input promise
// Each object has two properties: status and value (or reason).
//     The status can be either fulfilled or rejected.
//     The value if case the promise is fulfilled or reason) if the promise is rejected.

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

Promise.allSettled([p1, p2]).then((result) => {
  console.log(result);
});
