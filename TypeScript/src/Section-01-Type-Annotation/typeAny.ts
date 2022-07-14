// Avoid the type any

function checkIn(passportNumber: number, isValid: boolean) {
  return `Number: ${passportNumber} | Is Valid: ${isValid}`;
}

console.log(checkIn(22.222, true));
