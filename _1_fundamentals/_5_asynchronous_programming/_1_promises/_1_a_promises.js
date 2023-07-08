// https://www.javascripttutorial.net/es6/javascript-promises/

// Why JavaScript promises

// without using callback function
function getUsers() {
  let users = [];

  // delay 1 second (1000ms) for simulation of data coming from database/api
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 1000);

  return users;
}
function findUser(username) {
  const users = getUsers(); // A
  const user = users.find((user) => user.username === username); // B
  return user;
}
console.log(findUser("john")); // undefined

// Using callbacks to deal with an asynchronous operation
function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 1000);
}
function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}
findUser("john", console.log);
// If the number of functions grows, you may end up with the callback hell problem

// JavaScript Promises
// a promise is an object that encapsulates the result of an asynchronous operation.
// A promise object has a state that can be one of the following:
//     Pending
//     Fulfilled with a value
//     Rejected for a reason

// Creating a promise
const promise = new Promise((resolve, reject) => {
  // contain an operation
  // ...

  // return the state
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

// the executor accepts two callback functions with the name resolve and reject
// If the asynchronous operation completes successfully, the executor will call the resolve() function to change the state of the promise from pending to fulfilled with a value
// In case of an error, the executor will call the reject() function to change the state of the promise from pending to rejected with the error reason

// Once a new Promise object is created, its state is pending.
// If a promise reaches fulfilled or rejected state, it is resolved

// Consuming a Promise

// 1) The then() method
// To get the value of a promise when it’s fulfilled
promise.then(onFulfilled, onRejected);
// then() method calls the onFulfilled() with a value, if the promise is fulfilled or the onRejected() with an error if the promise is rejected
// both onFulfilled and onRejected arguments are optional.

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 1000);
  });
}
const promise = getUsers();
promise.then((users) => {
  console.log(users);
});

// 2) The catch() method
// If you want to get the error only when the state of the promise is rejected, you can use the catch() method of the Promise object
promise.catch(onRejected);
// Internally, the catch() method invokes the then(undefined, onRejected) method.

let success = false;
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}
const promise = getUsers();
promise.catch((error) => {
  console.log(error);
});

// 3) The finally() method
// to execute the same piece of code whether the promise is fulfilled or rejected

const render = () => {
  //...
};

getUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    render();
  });
