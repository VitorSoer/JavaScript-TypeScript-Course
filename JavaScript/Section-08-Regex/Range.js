const { alphabet } = require('./base');

console.log(alphabet.match(/[0-9]/g));
console.log(alphabet.match(/[a-zA-Z0-9]+/g));
console.log(alphabet.match(/[^ a-zA-Z0-9]+/g));
