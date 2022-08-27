export class Produto {
  nome;
  preco;
  emEstoque;
  quantidade;

  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }
}

export class Pedido {
  constructor(numPedido, nomeCliente) {
    this.numeroPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.estaPago = false;
    this.listaProdutos = [];
  }
}