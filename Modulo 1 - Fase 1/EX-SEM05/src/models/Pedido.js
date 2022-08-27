import { Produto } from "../..";

export class Pedido {
    constructor(numPedido, nomeCliente) {
      this.numeroPedido = numPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date().toLocaleDateString();
      this.estaPago = false;
      this.listaProdutos = [];
    }
}
  
adicionaProduto(Produto) {
    const ehProduto = produto instanceof Produto;
    if (ehProduto) {
        this.listaProdutos.push(produto);
    }
}
