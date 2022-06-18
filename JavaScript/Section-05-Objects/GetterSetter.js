function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  let privateStock = stock;
  Object.defineProperty(this, "stock", {
    enumerable: true, // Print the value
    configurable: true,
    get: function () {
      return privateStock;
    },
    set: function (value) {
      if (typeof value !== "number") {
        throw new TypeError("Message");
      }
      privateStock = value;
    },
  });
}

const videoGame = new Product("Playstation 5", 500, 5);
videoGame.price = 1000;
videoGame.stock = 15;

console.log(videoGame.stock);
