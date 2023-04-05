const fs = require("fs");

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile(__filename, () => {
  console.log("readfile 1");
});

// output:

// setTimeout 1
// readfile 1

// or

// readfile 1
// setTimeout 1

/***
 *
 * When running setTimeout with delay 0ms and an I/O asnyc method, the order of execution can never be guaranteed.
 *
 * Why can the order of execution never be guaranteed ?
 */
