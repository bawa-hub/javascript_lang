//  a callback is a function that you pass into another function as an argument for executing later.
function filterOdd(numbers) {
  let results = [];
  for (const number of numbers) {
    if (number % 2 != 0) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filterOdd(numbers));

// make more generic for reusable code
function isOdd(number) {
  return number % 2 != 0;
}
function isEven(number) {
  return number % 2 == 0;
}

function filter(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers1 = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers1, isOdd));
console.log(filter(numbers1, isEven));

// In ES6, you can use an arrow function like this:
function filter1(numbers, callback) {
  let results = [];
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers2 = [1, 2, 4, 7, 3, 5, 6];
let oddNumbers = filter(numbers2, (number) => number % 2 != 0);
console.log(oddNumbers);

// There are two types of callbacks: synchronous and asynchronous callbacks.

// Synchronous callbacks
// A synchronous callback is executed during the execution of the high-order function that uses the callback.
// The isOdd and isEven are examples of synchronous callbacks because they execute during the execution of the filter() function.

// Asynchronous callbacks
// An asynchronous callback is executed after the execution of the high-order function that uses the callback.
// Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.
// avaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.
function download(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);

    // process the picture once it is completed
    callback(url);
  }, 1000);
}

function process(picture) {
  console.log(`Processing ${picture}`);
}

let url = "https://wwww.javascripttutorial.net/pic.jpg";
download(url, process);

// handling errors
function download1(url, success, failure) {
  setTimeout(() => {
    console.log(`Downloading the picture from ${url} ...`);
    !url ? failure(url) : success(url);
  }, 1000);
}

download1(
  "",
  (url) => console.log(`Processing the picture ${url}`),
  (url) => console.log(`The '${url}' is not valid`)
);

// Nesting callbacks and the Pyramid of Doom
function download2(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
    callback(url);
  }, 1000);
}

const url1 = "https://www.javascripttutorial.net/pic1.jpg";
const url2 = "https://www.javascripttutorial.net/pic2.jpg";
const url3 = "https://www.javascripttutorial.net/pic3.jpg";

download2(url1, function (url) {
  console.log(`Processing ${url}`);
  download(url2, function (url) {
    console.log(`Processing ${url}`);
    download(url3, function (url) {
      console.log(`Processing ${url}`);
    });
  });
});

// Nesting many asynchronous functions inside callbacks is known as the pyramid of doom or the callback hell:
// To avoid the pyramid of doom, you use promises or async/await functions.
