const convidado1 = {
  nome: "José",
  sobrenome: "Carlos",
  setor: "camarote",
  idade: 19,
};

const convidado2 = {
  nome: "Alessandro",
  sobrenome: "Viana",
  setor: "camarote",
  idade: 17,
};

const convidado3 = {
  nome: "Paula",
  sobrenome: "Souza",
  setor: "pista",
  idade: 22,
};

const convidado4 = {
  nome: "Cristian",
  sobrenome: "Schimit",
  setor: "pista",
  idade: 28,
};

const convidado5 = {
  nome: "Beatriz",
  sobrenome: "Viana",
  setor: "arquibancada",
  idade: 16,
};

const convidado6 = {
  nome: "Cláudia",
  sobrenome: "Torres",
  setor: "arquibancada",
  idade: 33,
};

const listaDeConvidados = [
  convidado1,
  convidado2,
  convidado3,
  convidado4,
  convidado5,
  convidado6,
];

function liberarBebidas(lista) {
  const resultado = lista.map((convidado) => {
    convidado.openBar = false;
    if (convidado.idade >= 18) {
      convidado.openBar = true;
    }
    return convidado;
  });
  return resultado;
}

const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

const separarCamarote = (lista) => {
  const resultado = lista.filter((convidado) => {
    if (convidado.setor === "camarote") {
      return true;
    } else {
      return false;
    }
  });
  return resultado;
};

const separarPista = (lista) => {
  return lista.filter((convidado) => {
    return convidado.setor === "pista" ? true : false;
  });
};

const separarArquibancada = (lista) => {
  return lista.filter((convidado) => convidado.setor === "arquibancada");
};

const filtrarPorSetor = (lista, setor) => {
  return lista.filter((conv) => conv.setor === setor);
};
