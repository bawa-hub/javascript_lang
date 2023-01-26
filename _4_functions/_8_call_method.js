let name = {
  fname: "Bawa",
  lname: "Vikram",
  printFullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};

name.printFullName();

let name2 = {
  fname: "Monu",
  lname: "Kumar",
};

// function borrowing
name.printFullName.call(name2);
