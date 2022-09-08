function download(url, success, failure) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // over simplification
    let error = url.length === 0 || !url;
    // call the failure or success callback
    error ? failure(url) : success(url);
  }, 3000);
}

download(
  "",
  function (picture) {
    console.log(`Processing the picture ${picture}`);
  },
  function (picture) {
    console.log(`Handling error...`);
  }
);
