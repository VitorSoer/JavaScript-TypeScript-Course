//Factory Functions | Constructor functions | Classes

function createPlayer(name, age) {
  return {
    name,
    age,
    
    showInfo() {
      return `Name: ${this.name} | Age: ${this.age}`;
    },
  };
}

const playerOne = createPlayer("Luiz", 20);

console.log(playerOne.showInfo());
