type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'Fiat',
  year: '2018',
  name: 'Zotac',
};

console.log(car);
