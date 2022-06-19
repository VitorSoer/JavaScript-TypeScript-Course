const path = require("path");
const filePath = path.resolve(__dirname, "MadMen.json");
//const write = require("./modules/Write");
const read = require("./modules/Read");

/*
const people = [
  { name: "Don Draper", occupation: "Creative Director" },
  { name: "Peggy Olson", occupation: "Copy Chief" },
  { name: "Roger Sterling", occupation: "Accounts executive" },
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
  fileData.forEach((value) => console.log(value.name));
}

readFile(filePath);
