// Create a IMC calculator.

function calculateImc(name, age, height, weight) {
  let date = new Date();
  let imc = Math.round(weight / (height * height));

  return console.log(`Name: ${name} | Age: ${age} | Height: ${height}
  - IMC: ${imc}
  - Birth Year: ${date.getFullYear() - age}`);
}

calculateImc("Vitor Soer", 23, 1.8, 84);

/*
  Result:
  Name: Vitor Soer | Age: 23 | Height: 1.8
    - IMC: 26
    - Birth Year: 1999
*/
