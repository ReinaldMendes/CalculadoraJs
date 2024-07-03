const prompt = require("prompt-sync")();
const calculadora = require("./calculadora");

function mostrarMenu() {
  console.log(
    "Bem vindo a calculadora do Reinald, escolha uma opção:\n1. Efetuar uma soma \n2. Efetuar uma subtração \n3. EFetuar uma multiplicação\n4. Efetuar uma divisão \n5. Efetuar um calculo de porcentagem\n6. Sair:  "
  );
  let resultado = +prompt("Digite aqui a opção desejada:  ");
  return resultado;
}
resp = mostrarMenu();
if (
  resp == 1 ||
  resp == 2 ||
  resp == 3 ||
  resp == 4 ||
  resp == 5 ||
  resp == 6
) {
  if (resp === 1) {
    console.log("Bem vindo a soma !");
    let n1 = +prompt("Digite o primeiro numero a ser somado: ");
    let n2 = +prompt("Digite o segundo numero a ser somado: ");
    let respSoma = calculadora.soma(n1, n2);
    if (respSoma === typeof Number) {
      console.log(respSoma);
    } else {
      console.log("Digite numeros validos ! ");
    }
  } else if (resp === 2) {
    console.log("Bem vindo a subtração ! ");
    let n3 = +prompt("Digite o primeiro numero a ser subtraido: ");
    let n4 = +prompt("Digite o segundo numero a ser subtraido: ");
    let respSub = calculadora.subtracao(n3, n4);
    if (respSub == NaN) {
      console.log(respSub);
    } else {
      console.log("Digite numeros validos ! ");
    }
  } else if (resp === 3) {
    console.log("Bem vindo a Multiplicação ! ");
    let n5 = +prompt("Digite o primeiro numero a ser multiplicado: ");
    let n6 = +prompt("Digite o segundo numero a ser multiplicado: ");
    let respMult = calculadora.multiplicacao(n5, n6);
    if (respMult !== NaN) {
      console.log(respMult);
    } else {
      console.log("Digite numeros validos ! ");
    }
  } else if (resp === 4) {
    console.log("Bem vindo a Divisão ! ");
    let n7 = +prompt("Digite o primeiro numero a ser dividido: ");
    let n8 = +prompt("Digite o segundo numero a ser dividido: ");
    let respDiv = calculadora.divisao(n7, n8);
    if (respDiv !== NaN) {
      console.log(respDiv);
    } else {
      console.log("Digite numeros validos ! ");
    }
  } else if (resp === 5) {
    console.log("Bem vindo a Porcentagem ! ");
    let n9 = +prompt("digite quantos por cento quer saber: ");
    let n10 = +prompt("digite de qual numero quer saber: ");
    let respPor = calculadora.porcentagem(n9, n10);
    if (respPor !== NaN) {
      console.log(respPor);
    } else {
      console.log("Digite numeros validos ! ");
    }
  } else if (resp === 6) {
    console.log("Saindo...");
    process.exit();
  }
} else {
  console.log("Digite uma opção valida");
}
mostrarMenu();
