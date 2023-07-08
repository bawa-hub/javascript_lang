// need to perform three asynchronous operations in the following sequence
// 1. Select a user from the database.
// 2. Get services of the user from an API.
// 3. Calculate the service cost based on the services from the server.

// use the setTimeout() function to simulate the asynchronous operation.
function getUser(userId, callback) {
  console.log("Get user from the database.");
  setTimeout(() => {
    callback({
      userId: userId,
      username: "john",
    });
  }, 1000);
}

function getServices(user, callback) {
  console.log(`Get services of  ${user.username} from the API.`);
  setTimeout(() => {
    callback(["Email", "VPN", "CDN"]);
  }, 2 * 1000);
}

function getServiceCost(services, callback) {
  console.log(`Calculate service costs of ${services}.`);
  setTimeout(() => {
    callback(services.length * 100);
  }, 3 * 1000);
}

// using callback
getUser(100, (user) => {
  getServices(user, (services) => {
    getServiceCost(services, (cost) => {
      console.log(`The service cost is ${cost}`);
    });
  });
});
// Get user from the database.
// Get services of  john from the API.
// Calculate service costs of Email,VPN,CDN.
// The service cost is 300

// using promises
function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "john",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}

getUser(100).then(getServices).then(getServiceCost).then(console.log);

// using async/await
async function showServiceCost() {
  let user = await getUser(100);
  let services = await getServices(user);
  let cost = await getServiceCost(services);
  console.log(`The service cost is ${cost}`);
}

showServiceCost();

// error handling
async function showServiceCost() {
  try {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
  } catch (error) {
    console.log(error);
  }
}
