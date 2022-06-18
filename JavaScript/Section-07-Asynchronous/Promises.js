function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waiting(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") reject("Bad Value...");

    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

waiting("Receiving data...", randomNumber(1, 2)).then((answer) => {
  console.log(answer);
  return waiting("Sorting data...", randomNumber(1, 5))
    .then((answer) => {
      console.log(answer);
      return waiting("20 results found!", randomNumber(1, 2));
    })
    .then((answer) => {
      console.log(answer);
    })
    .catch((error) => console.log(error));
});
