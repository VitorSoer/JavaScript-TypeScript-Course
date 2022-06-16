const _speed = Symbol();

class Car {
  constructor(carName) {
    this.carName = carName;
    this[_speed] = 0;
  }

  set setSpeed(value) {
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    this[_speed] = value;
  }

  get showSpeed() {
    return this[_speed];
  }

  speedUp() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  slowDown() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}

const firstCar = new Car("Fusca");

firstCar.setSpeed = 50;

for (let i = 0; i < 5; i++) {
  firstCar.speedUp();
}

console.log(firstCar.showSpeed);
