// Change variables: A = B, B = C and C = A.

let a = "A";
let b = "B";
let c = "C";

[a, b , c] = [ b, c, a]

console.log(a, b, c);

/*
  Result:
  B C A
*/

/*
    let d;

    d = a;
    a = b;
    b = c;
    c = d;
*/