function Product(name, price, stock) {
  this.name = name;

  Object.defineProperties(this, {
    price: {
      enumerable: true, // Print the value
      value: price, // Value
      writable: false, // Unalterable
      configurable: false,
    },
    stock: {
      enumerable: true, // Print the value
      value: stock, // Value
      writable: true, // Alterable
      configurable: true,
    },
  });
}

const videoGame = new Product("Playstation 5", 500, 5);
videoGame.price = 1000;
videoGame.stock = 15;

console.log(videoGame);
