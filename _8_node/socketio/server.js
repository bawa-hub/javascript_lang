//Including the required files
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//server listening at 127.0.0.1:3000
server.listen(3000);
console.log("Server listening at: 3000");
//Handling the default route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
//Handling the route for admin
app.get("/admin", function (req, res) {
  res.sendFile(__dirname + "/admin.html");
});
//Code for sockets
io.on("connection", function (socket) {
  socket.emit("welcome", { data: "welcome" });
  console.log("from io connection");

  socket.on("new", function (data) {
    console.log("About to upload Quote");
    io.sockets.emit("next", { data: data });
  });
});
