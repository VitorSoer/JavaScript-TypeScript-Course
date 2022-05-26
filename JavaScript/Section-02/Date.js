function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const day = zeroAEsquerda(data.getDate());
  const month = zeroAEsquerda(data.getMonth() + 1);
  const year = zeroAEsquerda(data.getFullYear());
  const hour = zeroAEsquerda(data.getHours());
  const minutes = zeroAEsquerda(data.getMinutes());
  const seconds = zeroAEsquerda(data.getSeconds());

  return `${day}/${month}/${year}/ ${hour}:${minutes}:${seconds}`;
}

const data = new Date();
const dataBrazil = formataData(data);
console.log(dataBrazil);
