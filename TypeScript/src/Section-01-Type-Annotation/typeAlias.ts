type Person = {
  name: string;
  age: number;
  salary: number;
  FavoriteColor?: string;
};

type RgbColor = 'Red' | 'Green' | 'Blues';

const createdPerson: Person = {
  name: 'Manny',
  age: 30,
  salary: 2000,
};

function setFavoriteColor(createdPerson: Person, color: RgbColor): Person {
  return { ...createdPerson, FavoriteColor: color };
}

console.log(setFavoriteColor(createdPerson, 'Red'));
