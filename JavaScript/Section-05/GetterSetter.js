function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, "price", {
    enumerable: true, // Print the value
    value: stock, // Value
    writable: true, // Unalterable
    configurable: true,
  });
}

const videoGame = new Product("Playstation 5", 500, 5);
videoGame.price = 1000;
videoGame.stock = 15;

console.log(videoGame);
