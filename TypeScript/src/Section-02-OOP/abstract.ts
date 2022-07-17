export abstract class Character {
  constructor(
    protected name: string,
    protected power: number,
    protected health: number,
  ) {}

  attack(character: Character): void {
    console.log(`${this.name} is attacking the ${character.name}...`);

    this.attackPhrase();

    if (this.power > character.power) {
      character.executeAttack(this.power);
    } else {
      console.log(`Attack Failed...\n`);
    }
  }

  executeAttack(strength: number): void {
    this.health -= strength;

    if (this.health <= 0) {
      console.log(`${this.name} was killed...\n`);
    } else {
      console.log(`${this.name} was attacked | Life: ${this.health}\n`);
    }
  }

  abstract attackPhrase(): void;
}

export class Warrior extends Character {
  attackPhrase(): void {
    console.log(`${this.name}: I lived by the sword, I will die by the sword!`);
  }
}
export class Monster extends Character {
  attackPhrase(): void {
    console.log(`${this.name}: Aaaaaaaarghhhhh!`);
  }
}
export class Wizard extends Character {
  attackPhrase(): void {
    console.log(`${this.name}: Avada Kedavraaaaaaa!`);
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 200, 1000);
const wizard = new Wizard('Wizard', 2000, 1000);

monster.attack(warrior);
warrior.attack(monster);
wizard.attack(monster);
