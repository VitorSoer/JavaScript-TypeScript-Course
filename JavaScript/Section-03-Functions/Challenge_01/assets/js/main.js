function Calculadora() {
  this.display = document.querySelector(".display");
  this.calculated = false;

  this.start = () => {
    this.clickButtons();
    this.pressBackSpace();
    this.pressEnter();
  };

  this.pressBackSpace = () => {
    this.display.addEventListener("keydown", (e) => {
      if (e.keyCode === 8) {
        e.preventDefault();
        this.deleteOne();
      }
    });
  };

  this.pressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.calculate();
        this.calculated = true;
      }
    });
  };

  this.clickButtons = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        if (this.calculated) {
          this.clearDisplay();
          this.calculated = false;
        }

        this.btnStopDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("btn-del")) {
        this.deleteOne();
      }

      if (el.classList.contains("btn-eq")) {
        this.calculate();

        this.calculated = true;
      }

      this.display.focus();
    });
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.deleteOne = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.btnStopDisplay = (valor) => {
    this.display.value += valor;
  };

  this.calculate = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.start();
