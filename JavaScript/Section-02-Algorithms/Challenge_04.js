// FizzBuzz Challenge

let fizzBuzz = (number) => {
  if (number % 5 !== 0 && number % 3 !== 0) return "Nothing to do...";
  if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz!";

  return number % 3 === 0 ? "Fizz!" : "Buzz!";
};

for (let currentNumber = 0; currentNumber <= 100; currentNumber++) {
  console.log(`Current number is ${currentNumber}: ${fizzBuzz(currentNumber)}`);
}
