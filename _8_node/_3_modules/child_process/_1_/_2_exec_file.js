const { execFile } = require("child_process");

execFile("./test.sh", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.log(`error: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
