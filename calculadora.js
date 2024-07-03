const prompt = require("prompt-sync")();
function soma(a, b) {
  let resultado = a + b;
  console.log("O resultado da soma é : ");
  return resultado;
}

function subtracao(c, d) {
  let resultado = c - d;
  console.log("O resultado da subtração é : ");
  return resultado;
}
function multiplicacao(e, f) {
  let resultado = e * f;
  console.log("O resultado da multiplicacao é : ");
  return resultado;
}
function divisao(g, h) {
  let resultado = g / h;
  if (g == 0 || h == 0) {
    console.log(
      "O resultado da divisão por 0 é infinito, ou seja não há divisão por 0."
    );
  } else {
    console.log("O resultado da divisão é : ");
    return resultado;
  }
}

function porcentagem(valor, total) {
  if (total === 0) {
    return 0; // evitar divisão por 0
  }
  let resp = (valor / 100) * total;
  console.log("O Resultado da porcentagem é : ");
  return resp;
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  porcentagem,
};
