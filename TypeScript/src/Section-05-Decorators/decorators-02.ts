function reverseNameAndColor(firstParam: string, secondParam: string) {
  //Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.invert(args[0]);
        this.color = this.invert(args[1]);
      }

      invert(value: string): string {
        return (
          value.split('').reverse().join('') +
          ' ' +
          firstParam +
          ' ' +
          secondParam
        );
      }
    };
  };
}

@reverseNameAndColor('Value one', 'Value Two')
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('Elephant', 'Grey');
console.log(animal);
