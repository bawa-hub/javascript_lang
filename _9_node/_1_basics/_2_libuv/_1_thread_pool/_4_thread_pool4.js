const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8;
const MAX_CALLS = 8;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

/**
 * By increasing the thread pool size, we are able to improve the total time taken to run multiple calls of an asynchronous method like pbkdf2.
 *
 * Increasing the thread pool size can help with performance but that is limited by the number of available CPU cores.
 */
