function useTimer() {
  function createHourAndSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  let timer = document.querySelector(".container__timer");
  let start = document.querySelector(".button--start");
  let pause = document.querySelector(".button--pause");
  let clear = document.querySelector(".button--clear");

  let timerSeconds = 0;
  let counter;

  function startTimer() {
    counter = setInterval(() => {
      timerSeconds++;
      timer.innerHTML = createHourAndSeconds(timerSeconds);
    }, 1000);
  }

  start.addEventListener("click", (e) => {
    clearInterval(counter);
    startTimer();
  });

  pause.addEventListener("click", (e) => {
    clearInterval(counter);
  });

  clear.addEventListener("click", (e) => {
    clearInterval(counter);
    timer.innerHTML = "00:00:00";
    timerSeconds = 0;
  });
}

useTimer();