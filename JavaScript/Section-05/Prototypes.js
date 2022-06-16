function Person(personName, personMiddleName) {
  this.personName = personName;
  this.personMiddleName = personMiddleName;
}

Person.prototype.getFullName = function () {
  return this.personName + " " + this.personMiddleName;
};

const personOne = new Person("Vitor", "Soer");
const personTwo = new Person("Luciano", "Pavarotti");

console.dir(personOne);
console.log(personTwo.getFullName());
