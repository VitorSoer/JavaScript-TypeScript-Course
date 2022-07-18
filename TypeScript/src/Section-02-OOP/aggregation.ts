export class ShoppingCart {
  private readonly products: Product[] = [];

  insertOneOrManyProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityOfProducts(): void {
    return console.log(`Quantity: ${this.products.length}`);
  }

  totalValue(): void {
    return console.log(
      `Total: ${this.products.reduce(
        (sum, product) => sum + product.price,
        0,
      )}`,
    );
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const productOne = new Product('Shirt', 25.0);
const productTwo = new Product('Pants', 50.0);
const productThree = new Product('Hat', 10.0);

const shoppingCart = new ShoppingCart();

shoppingCart.insertOneOrManyProducts(productOne, productTwo, productThree);

console.log(shoppingCart);
shoppingCart.quantityOfProducts();
shoppingCart.totalValue();
