const { cpfs, ips } = require('./base');

console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
console.log(cpfs.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g));

// ^ Start with
// $ End With
