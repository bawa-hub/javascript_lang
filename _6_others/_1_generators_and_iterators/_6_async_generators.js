// An async generator is similar to a regular generator except that its next() method returns a Promise.
// To iterate over an async generator, you use the for await...of statement

async function* asyncSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
  }
}

// Since we only can use the await keyword inside an async function, we wrap the code inside an async IIFE
(async () => {
  let seq = asyncSequence(1, 5);

  for await (let num of seq) {
    console.log(num);
  }
})();
// 1
// 2
// 3
// 4
// 5

// The async generators can be very useful when you access a stream of data and want to report the progress like using a progress bar
