function Product(productName, productPrice) {
  this.productName = productName;
  this.productPrice = productPrice;
}

Product.prototype.setPriceDiscount = function (percentage) {
  this.productPrice -= this.productPrice * (percentage / 100);
};

Product.prototype.setPriceIncrease = function (percentage) {
  this.productPrice += this.productPrice * (percentage / 100);
};

function Shirt(productName, productPrice, productColor) {
  Product.call(this, productName, productPrice);
}

const shirt = new Shirt("Long Sleeve", 50, "Black");
