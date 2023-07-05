// Object property initializer shorthand
// Prior to ES6
function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}

// in ES6
// short-hand representatin, when property and value name is same
function createMachine(name, status) {
  return {
    name,
    status,
  };
}

// Computed property name
let name = "machine name";
let machine = {
  [name]: "server",
  "machine hours": 10000,
};
console.log(machine[name]); // server
console.log(machine["machine hours"]); // 10000

let prefix = "machine";
let machine = {
  [prefix + " name"]: "server",
  [prefix + " hours"]: 10000,
};
console.log(machine["machine name"]); // server
console.log(machine["machine hours"]); // 10000

// Concise method syntax

// Prior to ES6
let server = {
  name: "Server",
  restart: function () {
    console.log("The" + this.name + " is restarting...");
  },
};
// ES6
let server = {
  name: "Server",
  restart() {
    console.log("The" + this.name + " is restarting...");
  },
};

// It’s valid to have spaces in the property name
let server = {
  name: "Server",
  restart() {
    console.log("The " + this.name + " is restarting...");
  },
  "starting up"() {
    console.log("The " + this.name + " is starting up!");
  },
};

server["starting up"]();
