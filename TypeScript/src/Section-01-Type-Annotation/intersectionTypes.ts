type Name = { name: string };
type LastName = { lastName: string };

type FullName = Name & LastName;

const personName: FullName = {
  name: 'Marcos',
  lastName: 'Jhonson',
};

console.log(personName);
