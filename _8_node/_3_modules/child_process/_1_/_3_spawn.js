const { spawn } = require("child_process");

const child = spawn("ls", ["-lh"]);

child.stdout.on("data", (data) => {
  console.log(`data: ${data}`);
});

child.stderr.on("data", (data) => {
  console.log(`data: ${data}`);
});

child.on("error", (error) => console.log(`error: ${error}`));

child.on("exit", (code, signal) => {
  if (code) console.log(`Process exit with code: ${code}`);
  if (signal) console.log(`Process exit with signal: ${signal}`);
  console.log("Done");
});
