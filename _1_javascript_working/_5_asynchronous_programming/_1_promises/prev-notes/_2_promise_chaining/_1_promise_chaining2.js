// When you return a value in the then() method,
// the then() method returns a new Promise that immediately resolves to the return value.
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 3 * 1000);
  });
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3 * 1000);
    });
  })
  .then((result) => console.log(result));
