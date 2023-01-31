const crypto = require("crypto");

const start = Date.now();

// synchronous and blocking code
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

console.log("Hash: ", Date.now() - start);

/**
 * Every method in nodejs that has the "sync" suffix always runs on the main thread and is blocking.
 */
