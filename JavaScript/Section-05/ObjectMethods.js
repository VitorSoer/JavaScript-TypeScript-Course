const product = { productName: "Bottle", productPrice: 1.5 };
const otherProduct = { ...product };

otherProduct.productName = "Vase";
otherProduct.productPrice = 2.0;

console.table(otherProduct);
