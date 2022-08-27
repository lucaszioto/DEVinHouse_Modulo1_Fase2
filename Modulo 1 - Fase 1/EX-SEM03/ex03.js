const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação [+ - * /]:");

if (operacao === "+") {
  alert(num1 + num2);
} else if (operacao === "-") {
  alert(num1 - num2);
} else if (operacao === "*") {
  alert(num1 * num2);
} else if (operacao === "/") {
  alert(num1 / num2);
} else {
  alert("Não sei realizar essa operação :(");
}

switch (operacao) {
  case "+":
    alert(num1 + num2);
    break;

  case "-":
    alert(num1 - num2);
    break;

  case "*":
    alert(num1 * num2);
    break;

  case "/":
    alert(num1 / num2);
    break;

  default:
    alert("Não sei realizar essa operação :(");
    break;
}
