// An errorless example
try {
  console.log("Start of try runs"); // (1) <--

  // ...no errors here

  console.log("End of try runs"); // (2) <--
} catch (err) {
  console.log("Catch is ignored, because there are no errors"); // (3)
}

// An example with an error:
try {
  alert("Start of try runs"); // (1) <--

  lalala; // error, variable is not defined!

  console.log("End of try (never reached)"); // (2)
} catch (err) {
  console.log(`Error has occurred!`); // (3) <--
}
