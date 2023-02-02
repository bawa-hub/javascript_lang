/***
 *
 * How cluster works ?
 *
 * When you run node index.js, the file is treate as cluster master and this master is in charge of spawning new workers which run an instance of node application
 * Workers are in charge of handling incoming requests, reading files etc.
 * Each worker get its own event loop, memory and V8 instance.
 */

const cluster = require("cluster");
const http = require("http");

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("SLow page");
    }
  });

  server.listen(8000, () => console.log("Server is running on port 8000"));
}

/***
 *
 * Why shouldn't we simply create a large number of workers using cluster.fork() ?
 *
 * We should only create as many workers as there are CPU cores on the machine the app is running.
 * If you create more workers than there are logical cores on the computer it can cause an overhead as the system will have to schedule all the created workers with fewer number of cores.
 *
 * To know how many cores:
 * const OS = require('os')
 * console.log(OS.cpus().length)
 *
 * So to use maximum cores there is an easier way to do all this,
 * To ask someone to run your application as a cluster and also decide the best number of workers to create for your machine.
 * And that is npm package pm2
 * npm install -g pm2
 */
