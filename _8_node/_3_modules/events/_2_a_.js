const PizzaShop = require("./_2_");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with topping ${topping}`);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();
