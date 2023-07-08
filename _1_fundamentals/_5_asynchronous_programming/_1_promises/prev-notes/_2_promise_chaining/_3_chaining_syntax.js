// Sometimes, you have multiple asynchronous tasks that you want to execute in sequence.
// In addition, you need to pass the result of the previous step to the next one.
// In this case, you can use the following syntax:

// step1()
//     .then(result => step2(result))
//     .then(result => step3(result))
//     ...

// If you need to pass the result from the previous task to the next one without passing the result,
// you use this syntax:

// step1()
//     .then(step2)
//     .then(step3)
//     ...

// Suppose that you want to perform the following asynchronous operations in sequence:

//     Get the user from the database.
//     Get the services of the selected user.
//     Calculate the service cost from the user’s services.

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get the user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "admin",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 2 * 1000);
  });
}

getUser(100).then(getServices).then(getServiceCost).then(console.log);

// Note that ES2017 introduced the async/await keywords that help you write cleaner code than using this promise chain technique.
