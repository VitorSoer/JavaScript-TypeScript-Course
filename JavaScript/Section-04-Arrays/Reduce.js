const numbers = [10, 20, 50, 0, 200, 5, 100, 20, 15, 30];
const sumTheNumbers = numbers.reduce((acc, value) => acc += value);
const biggestNumber = numbers.reduce((acc, value) => {
  if (acc > value) return acc;
  return value;
});

console.log(sumTheNumbers);
console.log(biggestNumber);
