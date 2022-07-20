interface Game<T, U> {
  name: T;
  value: U;
}

const TheLastOfUs: Game<string, number> = {
  name: 'The last of Us',
  value: 50,
};

console.log(TheLastOfUs);
