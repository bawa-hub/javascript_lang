function download(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // process the picture once it is completed
    callback(url);
  }, 3000);
}

const url1 = "https://www.javascripttutorial.net/pic1.jpg";
const url2 = "https://www.javascripttutorial.net/pic2.jpg";
const url3 = "https://www.javascripttutorial.net/pic3.jpg";

download(url1, function (picture) {
  console.log(`Processing ${picture}`);
  // download the second picture
  download(url2, function (picture) {
    console.log(`Processing ${picture}`);
    // download the third picture
    download(url3, function (picture) {
      console.log(`Processing ${picture}`);
    });
  });
});

// The script works perfectly fine.
// However, this callback strategy does not scale well when the complexity grows significantly.
// Nesting many asynchronous functions inside callbacks is known as the pyramid of doom or the callback hell:

asyncFunction(function () {
  asyncFunction(function () {
    asyncFunction(function () {
      asyncFunction(function () {
        asyncFunction(function () {
          //    code...
        });
      });
    });
  });
});

// To avoid the pyramid of doom, you use promises or async/await functions.
