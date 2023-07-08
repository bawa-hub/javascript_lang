// Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

// Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.

// without callback
function download(url) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
  }, 2 * 1000);
}

function process(picture) {
  console.log(`Processing ${picture}`);
}

let url = "https://www.javascripttutorial.net/foo.jg";

// download(url);
// process(url);

// using callback
function download1(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);

    // process the picture once it is completed
    callback(url);
  }, 3000);
}

download1(url, process);
