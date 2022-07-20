export function isNumber(value: unknown): boolean {
  return typeof value === 'number';
}

console.log(isNumber('5'));
