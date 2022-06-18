const speak = {
  speak() {
    console.log(`${this.personName} is speaking!`);
  },
};

const drink = {
  drink() {
    console.log(`${this.personName} is drinking!`);
  },
};

const eat = {
  eat() {
    console.log(`${this.personName} is eating!`);
  },
};

const personPrototype = { ...speak, ...drink, ...eat };

function CreatePerson(personName) {
  return Object.create(personPrototype, {
    personName: { value: personName },
  });
}

const personOne = new CreatePerson("Vitor Soer");
const personTwo = new CreatePerson("Lucio Dalla");

personOne.speak();
personTwo.drink();
