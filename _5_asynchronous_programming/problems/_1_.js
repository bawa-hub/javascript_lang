const promise = new Promise(function(resolve, reject) {
    reject();
  });


  promise
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))
  .catch(() => console.log(4))
  .then(() => console.log(5))
// 4
// 5