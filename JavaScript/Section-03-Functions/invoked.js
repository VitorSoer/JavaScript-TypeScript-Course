// IIFE -> Immediately invoked function expression
(function () {
  const stack = "Javascript";

  function createPerson(name, age) {
    return `Name: ${name} | Age: ${age} years old | Stack: ${stack} `;
  }

  function showInfo() {
    console.log(createPerson("Vitor Soer", 23));
  }

  showInfo();
})();

const stack = "Java";
