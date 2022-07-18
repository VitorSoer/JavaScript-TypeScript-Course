type TypePerson = {
  name: string;
  occupation: string;
  showPersonData(): void;
};

export class Person implements TypePerson {
  constructor(public name: string, public occupation: string) {}

  showPersonData(): void {
    return console.log(`Name: ${this.name} | Occupation: ${this.occupation}`);
  }
}

const person = new Person('Don Draper', 'Creative Director');

person.showPersonData();
