var listaConvidados = [
  { nome: "José", sobrenome: "Carlos" },
  { nome: "Alessandro", sobrenome: "Viana" },
  { nome: "Paula", sobrenome: "Souza" },
  { nome: "Cristian", sobrenome: "Schimit" },
  { nome: "Beatriz", sobrenome: "Viana" },
  { nome: "Fernanda", sobrenome: "Silveira" },
  { nome: "Cláudia", sobrenome: "Torres" },
  { nome: "Augusto", sobrenome: "Cesar" },
  { nome: "Noemi", sobrenome: "Nakamura" },
  { nome: "Pedro", sobrenome: "Lobo" },
];

listaConvidados.forEach((convidado) => {
  console.log(convidado.nome + " " + convidado.sobrenome);
});
const listaDeNomesEl = document.getElementById("lista-convidados"); 

listaConvidados.forEach((convidado) => {
  const itemListaEl = document.createElement("li"); //  <-
  itemListaEl.textContent = convidado.nome + " " + convidado.sobrenome; // Cria um elemento com o conteúdo para cada objeto do array (2)
  listaDeNomesEl.appendChild(itemListaEl); // Adiciona o item criado ao elemento no HTML (3)
});
