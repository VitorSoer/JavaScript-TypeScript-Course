export class Person {
  constructor(
    private _name: string,
    private _age: number,
    private _cpf: string,
  ) {}

  get nameAndAge(): string {
    return `Name: ${this._name} | Age: ${this._age}`;
  }

  get cpf(): string {
    return `CPF: ${this._cpf.replace(/\D/g, '')}`;
  }

  set newCpf(newCpf: string) {
    this._cpf = newCpf;
  }
}

const person = new Person('Bob Benson', 28, '258.852.456-47');

console.log(person.nameAndAge);
console.log(person.cpf);

person.newCpf = '111.222.555/23';
console.log(person.cpf);
