const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    let j = 0;
    for (let i = 0; i < 6000000000; i++) {
      j++;
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`SLow page ${j}`);
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));

/***
 * Note:
 *
 * when you first open slow-page and simultaneously opens homepage in other page it takes much time to load homepage,
 * because nodejs single thread is blocked with intensive task (in this case for loop) and server is unable to handle other request.
 */
