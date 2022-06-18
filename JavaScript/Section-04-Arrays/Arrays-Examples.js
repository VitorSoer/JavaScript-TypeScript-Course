const names = ["Don", "Peggy", "Ted"];
const madMan = ["Betty", "Joana", ...names];
console.log(madMan, madMan.slice(0, 2));

const person = "Don Drapper";
const countLetters = person.replace(/\s/g, "").length;
const reverseString = person.split("").reverse().join("");
console.log(countLetters);
console.log(reverseString);

const people = ["Geralt", "Yennifer", "Manny", "Donny"];
