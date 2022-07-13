const { text } = require('./base');

const regExp = /George/i;

console.log(text.match(regExp));
console.log(text.replace(/George|Vitor/gi, 'Marcos'));
