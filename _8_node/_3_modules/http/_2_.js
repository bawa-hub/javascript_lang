const http = require("http");

const server = http.createServer((req, res) => {
  const person = {
    fname: "Bawa",
    lname: "Vikram",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(person));
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
