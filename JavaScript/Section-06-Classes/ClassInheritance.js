class Eletronics {
  constructor(productName) {
    this.productName = productName;
    this.isTheProductOn = false;
  }

  turnOn() {
    if (this.isTheProductOn) {
      return console.log(`${this.productName} is already on!`);
    }

    this.isTheProductOn = true;
    console.log(`You turned on the ${this.productName}.`);
  }

  turnOff() {
    if (!this.isTheProductOn) {
      return console.log(`${this.productName} is already off!`);
    }

    this.isTheProductOn = false;
    console.log(`You turned off the ${this.productName}.`);
  }
}

class Smartphone extends Eletronics {
  constructor(productName, productColor, productModel) {
    super(productName);
    this.productColor = productColor;
    this.productModel = productModel;
  }
}

const firstProduct = new Smartphone("Samsung", "Black", "S20");
console.log(firstProduct);

firstProduct.turnOn();

class Tablet extends Eletronics {
  constructor(productName, productSize) {
    super(productName);
    this.productSize = productSize;
  }

  turnOn() {
    console.log(`Doesn't worked!`);
  }
}

const secondProduct = new Tablet("iPad", "10-inch");
secondProduct.turnOn();
