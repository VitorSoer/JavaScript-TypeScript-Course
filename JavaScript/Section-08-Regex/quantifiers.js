const { text, archives } = require('./base');

const regExp = /Geo*rge/gi;
console.log(text.match(regExp));

const secondRegExp = /\.jpe?g/gi;

for (const archive of archives) {
  console.log(archive, archive.match(secondRegExp));
}
