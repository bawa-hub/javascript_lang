const https = require("https");

const MAX_CALLS = 50;
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}

/**
 * Although both crypto.pbkdf2 and https.request are asynchronous,
 * https.reqest method does not seem to use the thread pool.
 * https.request does not seem to be affected by the no of CPU cores either.
 *
 * Netwok I/O:
 * https.request is a network input/output operation and not a CPU bound operation.
 * It does not use the thread pool.
 * Libuv instead delegates the work to the OS kernel and whenever possible,
 * it will poll the kernel and see if the request has completed.
 *
 *
 *
 */
