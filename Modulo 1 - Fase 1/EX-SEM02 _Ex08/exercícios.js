//Exercício 8
function calculaAno() {
    var ano = prompt('Informe um ano');
    var anoAtual = new Date().getFullYear();
    var resultado = anoAtual - parseInt(ano);
    alert('O resultado é: ' + resultado);
  }
  
//Exercício 9

var resultado = document.getElementById('resultado');
  function incrementar() {
    var valor = resultado.textContent;
    resultado.innerText = parseInt(valor) + 1;
}
  
  function decrementar() {
    var valor = resultado.textContent;
    resultado.innerText = parseInt(valor) - 1;
  }
  
  //Exercício 10
  function alterarTitulo() {
    // Obtem a tag h1 que exibe o texto
    var titulo = document.getElementById('titulo');
    // Obtem o valor do input
    var inputValue = document.getElementById('inputTitulo').value;
    // Define o valor do input para o h1
    titulo.innerText = inputValue;
  }
