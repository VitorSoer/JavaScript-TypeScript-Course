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

const productOne = new Product("Shirt", 100);

productOne.setPriceDiscount(10);
productOne.setPriceIncrease(10);
console.log(productOne);

const otherProduct= {
    productName: 'Jeans',
    productPrice: 200,
}

Object.setPrototypeOf(otherProduct, Product.prototype);

otherProduct.setPriceIncrease(20);
console.log(otherProduct);