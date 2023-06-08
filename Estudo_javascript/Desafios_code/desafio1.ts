//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
    cliente: "Joao",
    endereco: "Rua BarProp,456",
    itens: [],
    taxaEntrega: 5.0
  };
  
  // Para popular o array de itens, criamos a seguinte estrutura de repetição:
  const quantidadeItens = 2;
  while (pedido.itens.length < quantidadeItens) {
    const nomeItem = "hamburguer";
    const precoItem = 15.00;
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
  }
  
  //TODO: Percorra o array de itens do pedido e calcule o seu valor total.
  totalPedido = 0;
  console.log(totalPedido)
  for (let i = 0; i <= pedido.itens.length; i++) {
    totalPedido = totalPedido + pedido.itens[i].preco;
  }
  totalCalculado = totalPedido + pedido.taxaEntrega;
  
  //TODO: Imprima a saída no padrão descrito neste desafio.
  //print("Pedido: ${pedido.cliente}")
  //print("Endereço de entrega: ${pedido.endereco}")
  //print("Total: R$ ${totalCalculado}")
  
  
  
  
  
  
  
  
  