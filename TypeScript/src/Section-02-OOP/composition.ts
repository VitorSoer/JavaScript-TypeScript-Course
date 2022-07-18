export class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }
  turnOff(): void {
    this.motor.turnOff();
  }
  speedUp(): void {
    this.motor.speedUp();
  }
  speedDown(): void {
    this.motor.speedDown();
  }
}

export class Motor {
  turnOn(): void {
    console.log(`You started the motor`);
  }
  turnOff(): void {
    console.log(`You turned off the motor`);
  }
  speedUp(): void {
    console.log(`Speeding up`);
  }
  speedDown(): void {
    console.log(`Slowing down`);
  }
}

const ferrari = new Car();

ferrari.turnOn();
ferrari.speedUp();
ferrari.speedDown();
ferrari.turnOff();
