function intersection<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const firstObj = { keyOne: 'Hello!' };
const secondObj = { keyUm: 'Olá' };

const union = intersection(firstObj, secondObj);

console.log(union);
