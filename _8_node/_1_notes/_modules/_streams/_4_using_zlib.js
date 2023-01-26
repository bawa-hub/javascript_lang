const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
