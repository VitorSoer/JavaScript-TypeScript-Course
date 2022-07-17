export abstract class Character {
  constructor(
    protected name: string,
    protected power: number,
    protected health: number,
  ) {}

  attack(character: Character): void {
    this.attackPhrase();
    character.loseHealth(this.power);
  }

  loseHealth(strength: number): void {
    this.health -= strength;
    console.log(`${this.name} was attacked | Life: ${this.health}`);
  }

  abstract attackPhrase(): void;
}

export class Warrior extends Character {
  attackPhrase(): void {
    console.log('I lived by the sword, I will die by the sword!');
  }
}
export class Monster extends Character {
  attackPhrase(): void {
    console.log('Aaaaaaaarghhhhh!');
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 200, 1000);

monster.attack(warrior);
warrior.attack(monster);
