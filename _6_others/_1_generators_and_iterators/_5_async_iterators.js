class AsyncSequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.asyncIterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: async () => {
        if (nextIndex <= this.end) {
          let result = {
            value: nextIndex,
            done: false,
          };
          nextIndex += this.interval;
          counter++;

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(result);
            }, 1000);
          });
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              value: counter,
              done: true,
            });
          }, 1000);
        });
      },
    };
  }
}

// Since we can use the await keyword in an async function only, we can create an async IIFE
(async () => {
  let seq = new AsyncSequence(1, 10, 1);

  for await (let value of seq) {
    console.log(value);
  }
})();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
