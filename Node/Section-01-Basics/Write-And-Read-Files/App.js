const path = require("path");
const filePath = path.resolve(__dirname, "teste.json");
//const write = require("./modules/Write");
const read = require("./modules/Read");

/*
const people = [
  { nome: "Don Draper", occupation: "Creative Director" },
  { nome: "Peggy Olson", occupation: "Copy Chief" },
  { nome: "Roger Sterling", occupation: "Accounts executive" },
];

const json = JSON.stringify(people, "", 2);

write(filePath, json);
*/

async function readFile(readPath) {
  const fileData = await read(readPath);
  showData(fileData);
}

function showData(fileData) {
  fileData = JSON.parse(fileData);
  fileData.forEach((value) => console.log(`${value.nome} | ${value.occupation}`));
}

readFile(filePath);
