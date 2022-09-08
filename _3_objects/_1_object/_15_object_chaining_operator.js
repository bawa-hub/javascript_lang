// optional chaining operator (?.)
// allows you to access the value of a property located deep within a chain of objects
// without explicitly checking if each reference in the chain is null or undefined.

// If one of the references in the chain is null or undefined,
// the optional chaining operator (?.) will short circuit and return undefined.

function getUser(id) {
  if (id <= 0) {
    return null;
  }
  // get the user from database
  // and return null if id does not exist
  // ...

  // if user was found, return the user
  return {
    id: id,
    username: "admin",
    profile: {
      avatar: "/avatar.png",
      language: "English",
    },
  };
}

// To access a property of an object using the optional chaining operator,
// you use one of the following:
// objectName ?. propertyName
// objectName ?. [expression]

// optional chaining operator implicitly checks if the user is not null or undefined before attempting to access
let user = getUser(2);
let profile = user?.profile;

// In case the user object returned by the getUser() does not have the profile property.
// Trying to access the avatar without checking the user.profile first will result in an error.
user = getUser(-1);
let avatar = user?.profile?.avatar;

// Combining with the nullish coalescing operator

// If you want to assign a default profile to the user,
// you can combine the optional chaining operator (?.) with the nullish coalescing operator (??) as follows:
let defaultProfile = { default: "/default.png", language: "English" };
user = getUser(2);
profile = user?.profile ?? defaultProfile;

// Using optional chaining operator with function calls
let file = {
  read() {
    return "file content";
  },
  write(content) {
    console.log(`Writing ${content} to file...`);
    return true;
  },
};

// If you call a method that doesn’t exist in the file object, you’ll get a TypeError:
// let compressedData = file.compress(); // Uncaught TypeError: file.compress is not a function
let compressedData = file.compress?.(); // compressedData is now undefined
console.log(compressedData);

// optional chaining operator (?.) is also helpful if you have a function with an optional callback:
// functionName ?. (args) to avoid explicitly checking if the functionName is not undefined or null before invoking it.
function getUser(id, callback) {
  // get user
  // ...
  let user = {
    id: id,
    username: "admin",
  };
  // test if the callback exists
  //   if (callback) {
  //     callback(user);
  //   }
  callback?.(user);

  return user;
}
