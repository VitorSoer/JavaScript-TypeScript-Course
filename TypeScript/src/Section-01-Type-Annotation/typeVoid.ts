const character = {
  name: 'Manny',
  lastName: 'Man',

  showTheName(): void {
    console.log(`Name: ${this.name} ${this.lastName}`);
  },
};

character.showTheName();
