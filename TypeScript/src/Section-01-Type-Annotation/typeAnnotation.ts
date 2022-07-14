/* eslint-disable */

const firstName: string = 'luiz'; // String
const age: number = 20; // Number
const adult: boolean = true; // Boolean
const symbol: symbol = Symbol('Any Symbol'); // Symbol
//const big: bigint = 10n; // Bigint

//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbersTwo: number[] = [1, 2, 3];

let arrayOfStrings: Array<string> = ['1', '2', '3'];
let arrayOfStringsTwo: string[] = ['1', '2', '3'];

// Objects
let person: { name: string; age: number; adult?: boolean } = {
  name: 'Morrys',
  age: 25,
  adult: true,
};

// Functions
function multiply(x: number, y: number): number {
  return x * y;
}

const multiplyV2: (x: number, y: number) => number = (x, y) => x + y;
