/*
    False

    FALSY   
    0
    '' "" ``
    null / undefined
    NaN
*/

const a =  0;
const b = null;
const c = 'false'; // This is true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
// Return: 'false'


let color; // This is false (undefined)

console.log( color || 'Black');
// Return: 'Black'