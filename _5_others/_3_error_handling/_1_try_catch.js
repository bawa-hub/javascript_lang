let result = add(10, 20);
console.log(result);
console.log("Bye");
//  ReferenceError: add is not a function

// When the JavaScript engine encounters an error,
//  it issues that error and immediately terminates the execution of the entire script

// to handle the error and continue the execution use try..catch
try {
  // code may cause error
} catch (error) {
  // code to handle error
}

// If an error occurs in the try block, the JavaScript engine immediately executes the code in the catch block
// JavaScript engine provides you with an error object that contains detailed information about the error.
// the error object has at least two properties:
//     name specifies the error name.
//     message explains the error in detail.

try {
  let result = add(10, 20);
  console.log(result);
} catch (e) {
  console.log({ name: e.name, message: e.message });
}
console.log("Bye");
// {name: 'ReferenceError', message: 'add is not a function'}
// Bye

// exception identifier
// If you don’t want to use the exception variable, you can omit
try {
  //...
} catch {
  //...
}

const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};

let valid = isValidJSON(`{"language":"JavaScript"}`);
console.log(valid);
