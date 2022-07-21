@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverted(args[0]);
      this.color = this.inverted(args[1]);
    }

    inverted(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Elephant', 'Grey');
console.log(animal);
