const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order-pizza", () => {
  console.log("Order is received!");
});

emitter.on("sing-a-song", (song, forWhom) => {
  console.log(`Singing ${song} song for ${forWhom}`);
});

emitter.emit("order-pizza");

emitter.emit("sing-a-song", "Pardesi pardesi jana ni", "Vikram");
