function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waiting(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") reject("Bad Value...");

    setTimeout(() => {
      resolve(message.toUpperCase());
    }, time);
  });
}

// Promise.all
const promises = [
  "First Value",
  waiting("Promisse One", 3000),
  waiting("Promisse Two", 500),
  waiting("Promisse Three", 1000),
  "Other Value",
];

Promise.all(promises)
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

// Promisse.race'
Promise.race(promises)
  .then((values) => console.log(values))
  .catch((error) => console.log(error));