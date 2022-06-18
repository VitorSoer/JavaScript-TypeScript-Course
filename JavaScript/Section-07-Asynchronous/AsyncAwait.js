function randomNumber(min = 1, max = 2) {
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

/*
waiting("First Step", randomNumber())
  .then((value) => {
    console.log(value);
    return waiting("Second Step", randomNumber());
  })
  .then((value) => {
    console.log(value);
    return waiting("Third Step", randomNumber());
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
*/

async function execute() {
  try {
    const stepOne = await waiting("Step One", randomNumber());
    console.log(stepOne);

    const stepTwo = await waiting("Step Two", randomNumber());
    console.log(stepTwo);

    const stepThree = await waiting("Step Three", randomNumber());
    console.log(stepThree);

    console.log("Finished...");
  } catch (error) {
    console.log(error);
  }
}

execute();
