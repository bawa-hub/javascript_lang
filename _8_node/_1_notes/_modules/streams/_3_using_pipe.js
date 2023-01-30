const fs = require("fs"); // fs module uses streams under the hood

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // note: by default the buffer used by stream is 64 KB
});

const writableStream = fs.createWriteStream("./file2.txt");

// Using pipe
readableStream.pipe(writableStream);
