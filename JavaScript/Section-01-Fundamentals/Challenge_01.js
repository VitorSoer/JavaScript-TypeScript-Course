// Print the Name, Time and Age - Using Let.

let name = "Vitor Soer";
let hours = new Date();

console.log(`
    - Current Time: ${hours.getHours()}h
    - My name is ${name}. 
    - I'm ${hours.getFullYear() - 1999} years old.
`);

/* 
    Result:
    - Current Time: 16h
    - My name is Vitor Soer. 
    - I'm 23 years old.
*/