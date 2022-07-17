export class Character {
  constructor(
    public username: string,
    public gender: string,
    public type: string,
  ) {}

  static createCharacter(username: string, gender: string, type: string) {
    return new Character(username, gender, type);
  }
}

const geralt = new Character('Geralt', 'Male', 'Witcher');
const sofia = Character.createCharacter('Sofia', 'Female', 'Vampire');
console.log(geralt, sofia);
