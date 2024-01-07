// 1. CREATE/ADD
// 2. READ/FETCH
// 3. UPDATE/MODIFY
// 4. DELETE/REMOVE
// 5. SORT BY
// 6. SEARCH
// 7. FILTER

/********************************* Array of products ************************************************/

// const products = [
//   {
//     id: 1,
//     name: "Polo Jeans",
//     price: 499,
//     color: "black",
//     category: "clothing",
//   },
//   {
//     id: 2,
//     name: "Kurta jeans",
//     price: 299,
//     color: "blue",
//     category: "clothing",
//   },
//   {
//     id: 3,
//     name: "Iphone",
//     price: 49999,
//     color: "black",
//     category: "electronics",
//   },
//   {
//     id: 4,
//     name: "TV",
//     price: 49999,
//     color: "black",
//     category: "electronics",
//   },
// ];

/********************************* Add product ************************************************/

// let product = {
//   id: 4,
//   name: "Samsung galaxy",
//   price: 14999,
//   color: "silver",
//   category: "electronics",
// };

// products.push(product);
// console.log(products);

/********************************* Fetch/Read products ************************************************/

// Method 1 - using map
// products.map((product) => {
//   console.log(`name: ${product.name}, price: ${product.price}`);
// });

// Method 2 - using for
// for (const product of products)
//   console.log(`name: ${product.name}, price: ${product.price}`);

/********************************* Update/Modify product ************************************************/

// update iphone price with id 3

// Method 1 - using findIndexOf
// let indexOfProduct = products.findIndex((product) => product.id == 3);
// if (indexOfProduct) products[indexOfProduct].price = 69999;

// Method 2 - using for loop
// for (const product of products) {
//   if (product.id == 3) {
//     product.price = 69999;
//   }
// }

// Method 3 - map
// it will take extra space for other array

// console.log(products);

/********************************* Delete/Remove product ************************************************/

// delete polo jeans with id 1

// Method 1
// const findIndex = products.findIndex((product) => product.id === 1);
// findIndex !== -1 && products.splice(findIndex, 1);

// Method 2
// var removeByAttr = function (arr, attr, value) {
//   var i = arr.length;
//   while (i--) {
//     if (
//       arr[i] &&
//       arr[i].hasOwnProperty(attr) &&
//       arguments.length > 2 &&
//       arr[i][attr] === value
//     ) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };
// removeByAttr(products, "id", 1);

// Method 3 - using filter
// since array is immutable it will return other array which increase space complexity

// console.log(products);

/********************************* Sort by products ************************************************/

// sort by price in ascending or descending order
// var sortByKey = function (arr, key, order = "asc") {
//   arr.sort(function (a, b) {
//     if (order == "asc") {
//       return b[key] < a[key]
//         ? 1 // if b should come earlier, push a to end
//         : b[key] > a[key]
//         ? -1 // if b should come later, push a to begin
//         : 0; // a and b are equal
//     } else {
//       return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
//     }
//   });
//   return arr;
// };
// sortByKey(products, "price");
// console.log(products);

// sortByKey(products, "price", "desc");
// console.log(products);

/********************************* Search product ************************************************/

// search product with id 1

// Method 1 - using for
// var searchProductById = function (arr, id) {
//   for (const product of products) {
//     if (product.id == 1) {
//       return product;
//     }
//   }
//   return false;
// };
// const searchedProduct = searchProductById(products, 1);
// searchedProduct && console.log(searchedProduct);

// Method 2 - using find
// function findProductById(products, id) {
//   const searchedProduct = products.find((product) => product.id == id);
//   return searchedProduct;
// }
// console.log(findProductById(products, 1));

// search products having name include 'jeans'
// const searchedProducts = products.filter((product) =>
//   product.name.toLowerCase().includes("jeans")
// );
// console.log(searchedProducts);

/********************************* Filter products ************************************************/

// filter electronics products
// const electronicProducts = products.filter(
//   (product) => product.category == "electronics"
// );
// console.log(electronicProducts);
