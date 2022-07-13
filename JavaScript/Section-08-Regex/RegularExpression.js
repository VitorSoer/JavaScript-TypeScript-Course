const { text } = require('./base');

const regExp = /(implies )(that each )(person|man\woman)/i;
const found = regExp.exec(text);

if (found) {
  console.log(`Found: ${found[0]}`);
  console.log(`Found: ${found[1]}`);
  console.log(`Found: ${found[2]}`);
}
