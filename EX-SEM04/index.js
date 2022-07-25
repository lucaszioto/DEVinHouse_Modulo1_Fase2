let contasClientes = [
  {
    id: 1,
    nome: "Cliente 01",
    saldo: 500,
    senha: "1234",
  },
  {
    id: 2,
    nome: "Cliente 02",
    saldo: 3000,
    senha: "12345",
  },
  {
    id: 3,
    nome: "Cliente 03",
    saldo: 5000,
    senha: "123456",
  },
];

const MESSAGE_TYPE = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const OPERACAO_CONTA = {
  SACAR: 1,
  DEPOSITAR: 2,
};

const LOCAL_STORAGE_CONTAS_CLIENTES = "CONTAS_CLIENTES";

const selectConta = document.getElementById("conta");
const strongMensagem = document.getElementById("mensagem");
const form = document.getElementById("form");
const body = document.body;

const adicionaOpcao = (value, text) => {
  const option = document.createElement("option");

  option.value = value;
  option.textContent = text;
  option.id = value;
  selectConta.appendChild(option);
};

const populaSelect = () => {
  selectConta.innerHTML = "";F
  adicionaOpcao("0", "(selecione)");

  contasClientes
    .sort((a, b) => (a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0))
    .forEach((conta) => {
      adicionaOpcao(conta.id, conta.nome);
    });
};

const salvarContas = (array) => {
  localStorage.setItem(LOCAL_STORAGE_CONTAS_CLIENTES, JSON.stringify(array));
};

const buscarContas = (array) => {
  contas = localStorage.getItem(LOCAL_STORAGE_CONTAS_CLIENTES);
  if (contas) {
    contasClientes = JSON.parse(contas);
  }
};

const onLoadBody = () => {
  buscarContas();
  populaSelect();
};

const exibirMensagem = (mensagem, type = MESSAGE_TYPE.ERROR) => {
  strongMensagem.textContent = mensagem;
  strongMensagem.className = type === MESSAGE_TYPE.ERROR ? "error" : "success";
};

const validarValor = (valor) => {
  if (isNaN(valor) || valor <= 0) {
    return false;
  }
  return true;
};

const atualizaSaldo = (contaAtual, saldo) => {
  const contasSemContaAtual = contasClientes.filter(
    (c) => c.id !== contaAtual.id
  );
  const contaAtualizada = { ...contaAtual, saldo };
  const contasAtualizadas = [...contasSemContaAtual, contaAtualizada];

  contasClientes = contaAtualizada;
  salvarContas(contasAtualizadas);
};

const validarSaldo = (valor, saldo) => {
  if (valor > saldo) {
    return false;
  }
  return true;
};

const obterConta = (contaId) => {
  return contasClientes.find((conta) => conta.id === contaId);
};

const sacar = (contaAtual, valor) => {
  if (!validarValor(valor)) {
    exibirMensagem("Valor Inválido. Verifique e tente novamente!");
    return;
  }

  if (!validarSaldo(valor, contaAtual.saldo)) {
    exibirMensagem(`Saldo Insuficiente. Saldo atual: ${contaAtual.saldo}`);
    return;
  }
  atualizaSaldo(contaAtual, novoSaldo);
  exibirMensagem(
    `Saque efetado com sucesso! Saldo atual: ${novoSaldo}.`,
    MESSAGE_TYPE.SUCCESS
  );
};

const depositar = (contaAtual, valor) => {
  if (!validarValor(valor)) {
    exibirMensagem("Valor inválido. Verifique e tente novamente!");
    return;
  }

  const novoSaldo = contaAtual.saldo + valor;
  atualizaSaldo(contaAtual, novoSaldo);
  exibirMensagem(
    `Deposito efetuado com sucesso! Saldo atual: ${novoSaldo}.`,
    MESSAGE_TYPE.SUCCESS
  );
};

const realizarOperacao = (event) => {
  event.preventDefault();

  const contaId = parseInt(event.target.conta.value);
  const valor = parseFloat(event.target.operacao.value);
  const operacao = parseInt(event.target.operacao.value);
  const senha = event.target.senha.value;

  if (
    !validarValor(contaId) ||
    !validarValor(valor) ||
    !validarValor(operacao)
  ) {
    exibirMensagem("Campos inválidos. Verifique e tente novamente.");
    return;
  }

  if (!senha) {
    exibirMensagem("Informe a sneha!");
    return;
  }

  const contaAtual = obterConta(contaId);
  if (!contaAtual) {
    exibirMensagem("Conta não encontrada. Verifique e tente novamente.");
    return;
  }

  if (contaAtual.senha !== senha) {
    exibirMensagem("Senha inválida!");
    return;
  }

  switch (operacao) {
    case OPERACAO_CONTA.SACAR:
      sacar(contaAtual, valor);
      break;
    case OPERACAO_CONTA.DEPOSITAR:
      depositar(contaAtual, valor);
      break;
    default:
      exibirMensagem("Operação inválida. Verifique e tente novamente.");
      break;
  }
};

body.onload = onLoadBody;
form.onsubmit = realizarOperacao;
