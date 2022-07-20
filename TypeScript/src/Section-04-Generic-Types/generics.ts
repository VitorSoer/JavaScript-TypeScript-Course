const array = [1, 2, 'Mona', 'Lisa', 3, 4, 5];

function showItems<T>(arrayOfData: T[]) {
  const filteredStrings: Array<T> = [];
  const filteredNumbers: Array<T> = [];

  for (let position = 0; position <= arrayOfData.length; position++) {
    if (typeof arrayOfData[position] == 'string')
      filteredStrings.push(arrayOfData[position]);
  }

  arrayOfData.filter((value) => {
    if (typeof value === 'number') filteredNumbers.push(value);
  });

  return console.log(filteredStrings, filteredNumbers);
}

showItems(array);
