const crypto = require("crypto");

const MAX_CALLS = 1;
// const MAX_CALLS = 2;
// const MAX_CALLS = 3;
// const MAX_CALLS = 4;
// const MAX_CALLS = 5;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

/**
 * A few methods like fs.readFile and crypt.pbkdf2 run on a separate thread
 * in libuv's thread pool. They do run synchronously in their own thread but as far as the
 * main thread is concerned, it appears as if the method is running asynchronously.
 *
 * Libuv's thread pool has 4 threads.
 * The processing time will increase twice in above code after 4 calls as it runs synchronously on libuv therad pool threads.
 */
