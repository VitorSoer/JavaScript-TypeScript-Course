const brands: Array<string> = ['Nike', 'Adidas', 'Jordan', 'Puma'];

function argsMultiplier(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

const result = argsMultiplier(1, 2, 3, 4, 5);

console.log(brands, result);
