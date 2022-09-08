// When a JavaScript engine executes a script, it creates execution contexts.
// Each execution context has two phases: the creation phase and the execution phase.

// When a script executes for the first time, the JavaScript engine creates a Global Execution Context.
// During this creation phase, it performs the following tasks:

//     Create a global object i.e., window in the web browser or global in Node.js.
//     Create a this object binding which points to the global object above.
//     Setup a memory heap for storing variables and function references.
//     Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

// To keep track of all the execution contexts, including the Global Execution Context and Function Execution Contexts,
// the JavaScript engine uses a data structure named call stack,

// https://www.javascripttutorial.net/javascript-execution-context/ for more
