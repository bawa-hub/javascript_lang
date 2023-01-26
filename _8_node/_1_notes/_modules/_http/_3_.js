const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  //   const html = fs.readFileSync("./index.html", "utf-8");
  //   res.end(html);

  // using stream and pipe
  fs.createReadStream("./index.html").pipe(res);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
