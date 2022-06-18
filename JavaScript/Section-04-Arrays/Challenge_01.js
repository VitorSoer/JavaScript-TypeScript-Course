// Verifique se o nome consta na lista e se a idade é maior que 18

const guests = [
  { name: "Jhon Marston", age: 20 },
  { name: "Billy Rain", age: 50 },
  { name: "Kraig Jefrey", age: 15 },
  { name: "Mary Louis", age: 55 },
  { name: "Angela Von", age: 20 },
];

const searchForTheGuest = (personName) => {
  let removeWhiteSpace = (nameToModify) =>
    nameToModify.toLowerCase().replace(/\s/g, "").split("").join("");

  let result = guests.some(
    (guest) =>
      removeWhiteSpace(guest.name) === removeWhiteSpace(personName) &&
      guest.age > 18
  );

  console.log(result ? "You can enter!" : "You can't enter!");
};

searchForTheGuest("Angela Von"); // "You can enter!"
searchForTheGuest("Kraig Jefrey"); // "You can't enter!"
