const { exec } = require("child_process");

exec("ls -lh", (error, stdout, stderr) => {
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

// useful for small commands

// not for command for huge stdout
// error: stdout maxBuffer length exceeded
