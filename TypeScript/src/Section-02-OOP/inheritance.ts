export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `Hey, i'm ${this.firstName} ${this.lastName}!`;
  }
}

export class Student extends Person {
  getFullName(): string {
    return `Hi, i'm ${this.firstName} ${this.lastName}!`;
  }
}
export class Teacher extends Person {
  getFullName(): string {
    return `Hello, i'm ${this.firstName} ${this.lastName}!`;
  }
}

const person = new Person('Bob', 'Benson', 28, '258.852.456-47');
const student = new Student('Manny', 'Man', 25, '322.555.555-25');
const teacher = new Teacher('Marcos', 'Morris', 50, '555.000.000-55');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(teacher.getFullName());
