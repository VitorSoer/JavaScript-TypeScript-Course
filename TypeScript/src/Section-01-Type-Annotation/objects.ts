const toys: {
  readonly firstToy: string;
  secondToy: string;
  thirdToy?: string;
  [key: string]: unknown;
} = {
  firstToy: 'Car',
  secondToy: 'Coldier',
};

toys.thirdToy = 'Motorcycle';
console.log(toys.thirdToy);
