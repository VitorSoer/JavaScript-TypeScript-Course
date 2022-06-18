const persons = ["Paulo", "Marcos", "Pedro", "Ana", "Maria"];

function makeAChoice(result) {
  let selected = Number(result);

  if (selected < 1 || selected > 5 || !selected)
    return console.log(`Isn't valid!`);
  if (selected == 1) return console.log(`${persons[0]}`);
  if (selected == 2) return console.log(`${persons[1]}`);
  if (selected == 3) return console.log(`${persons[2]}`);
  if (selected == 4) return console.log(`${persons[3]}`);
  if (selected == 5) return console.log(`${persons[4]}`);
}

makeAChoice("5");
