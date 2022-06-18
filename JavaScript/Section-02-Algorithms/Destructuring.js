const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

const [first, , , fourth, ...rest] = numbers;

console.log(first, fourth);
console.log(rest);

const person = {
  name: "Vitor Soer",
  age: 23,
  address: {
    street: "Rua Joãzinho",
    number: 88,
    city: "São Paulo",
  },
};

const { name, age } = person;

console.log(`Name: ${name}  | Age: ${age}`);

const {
  address: { street, number },
  address: { ...fullAddress },
} = person;

console.log(`${street}, ${number}`);
console.log(fullAddress);
