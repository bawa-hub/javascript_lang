// The instance method of the Promise object such as then(), catch(), or finally() returns a separate promise object.
// Therefore, you can call the promise’s instance method on the return Promise.
// The successively calling methods in this way is referred to as the promise chaining.

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return result * 2;
});

p.then((result) => {
  console.log(result);
  return result * 2;
}).then((result) => {
  console.log(result);
  return result * 3;
});

p.then((result) => {
  console.log(result); // 10
  return result * 2;
})
  .then((result) => {
    console.log(result); // 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 60
    return result * 4;
  });

//   When you call the then() method multiple times on a promise, it is not promise chaining.
