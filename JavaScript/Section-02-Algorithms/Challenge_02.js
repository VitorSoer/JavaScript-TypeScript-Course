// Return the largest number

function findTheLargestNumber(numberOne, numberTwo) {
  if (numberOne === numberTwo)
    return console.log(`It's the same number, try again.`);

  return numberOne > numberTwo
    ? console.log(`The largest number is ${numberOne}.`)
    : console.log(`The largest number is ${numberTwo}.`);
}

findTheLargestNumber(10, 25); // The largest number is 25.

let findTheLargestNumberVersionTwo = (firstParam, secondParam) =>
  console.log(Math.max(firstParam, secondParam));

findTheLargestNumberVersionTwo(50, 10); //50
