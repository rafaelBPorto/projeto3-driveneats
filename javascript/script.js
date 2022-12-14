//Selecao de items
let pratoSelecionado = false
let bebidaSelecionada = false
let sobremesaSelecionada = false
let liberarPedido = false

let nomePrato
let nomeBebida
let nomeSobremesa

let valorPrato
let valorBebida
let valorSobremesa

let nomeCliente
let enderecoCliente

function selecionarPrato(prato) {

    const itemSelecionado = document.querySelector('.prato .item-selecionado');


    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove('item-selecionado');
    }
    prato.classList.add('item-selecionado');

    nomePrato = document.querySelector('.prato .item-selecionado h1').innerHTML;
    console.log(nomePrato);

    valorPrato = document.querySelector('.prato .item-selecionado h3').innerHTML
    valorPrato = (valorPrato.replace(/\D/g, '')/100).toFixed(2);
    console.log(valorPrato);

    pratoSelecionado = true;
    
    habilitarPedido();

    const itemPrato = document.querySelector('.lista-pedidos .prato h3:nth-child(1)');
    const precoPrato = document.querySelector('.lista-pedidos .prato h3:nth-child(2)');
    itemPrato.innerHTML = nomePrato;
    precoPrato.innerHTML = valorPrato;
}

function selecionarBebida(bebida) {

    const itemSelecionado = document.querySelector('.bebida .item-selecionado');


    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove('item-selecionado')
    }
    bebida.classList.add('item-selecionado');

    nomeBebida = document.querySelector('.bebida .item-selecionado h1').innerHTML
    console.log(nomeBebida)

    valorBebida = document.querySelector('.bebida .item-selecionado h3').innerHTML
    valorBebida = (valorBebida.replace(/\D/g, '')/100).toFixed(2);
    console.log(valorBebida);

    bebidaSelecionada = true;
    habilitarPedido();

    const itemBebida = document.querySelector('.lista-pedidos .bebida h3:nth-child(1)');
    const precoBebida = document.querySelector('.lista-pedidos .bebida h3:nth-child(2)');
    
    itemBebida.innerHTML = nomeBebida;
    precoBebida.innerHTML = valorBebida;
}

function selecionarSobremesa(item) {

    const itemSelecionado = document.querySelector('.sobremesa .item-selecionado');

    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove('item-selecionado');
    }

    item.classList.add('item-selecionado');

    nomeSobremesa = document.querySelector('.sobremesa .item-selecionado h1').innerHTML
    console.log(nomeSobremesa)

    valorSobremesa = document.querySelector('.sobremesa .item-selecionado h3').innerHTML
    valorSobremesa = (valorSobremesa.replace(/\D/g, '')/100).toFixed(2);
    console.log(valorSobremesa);

    sobremesaSelecionada = true;
    habilitarPedido();

    const itemSobremesa = document.querySelector('.lista-pedidos .sobremesa h3:nth-child(1)');
    const precoSobremesa = document.querySelector('.lista-pedidos .sobremesa h3:nth-child(2)');
    
    itemSobremesa.innerHTML = nomeSobremesa;
    precoSobremesa.innerHTML = valorSobremesa;

}

//Ativacao do botao de envio

function habilitarPedido() {
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        console.log("pedido ok");

        //mudar cor do bot??o
        const botaoPedido = document.querySelector('.selecao');
        botaoPedido.classList.add('botao-pedido-ativo');

        //mudar texto do bot??o
        const textoBotaoPedido = document.querySelector('.selecao h1');
        textoBotaoPedido.innerHTML = "Fechar Pedido"

        liberarPedido = true;
    }

}

function confirmarPedido(){

    const precoTotal = document.querySelector('.lista-pedidos .total h1:nth-child(2)');
    let valorTotal = (Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa)).toFixed(2);
    
    precoTotal.innerHTML = `R$ ${valorTotal}`;

    const botaoPedido = document.querySelector('.confirmacao')

    console.log(botaoPedido);
    botaoPedido.classList.remove('esconde-confirmacao')
    console.log(botaoPedido);

    nomeCliente = prompt("Quem ir?? receber o pedido?")
    enderecoCliente = prompt("Qual o endere??o de entrega?")

}

function realizarPedido() {
    if (liberarPedido) {
        let valorTotal = (Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa)).toFixed(2);

        let texto = `Ol??, Gostaria de fazer o pedido:\n - Prato: ${nomePrato}\n - Bebida: ${nomeBebida}\n - Sobremesa: ${nomeSobremesa}\n Total: R$ ${valorTotal}\n\nNome: ${nomeCliente}\nEndere??o: ${enderecoCliente}`;
        console.log(texto);
        texto = window.encodeURIComponent(texto);

        window.open("https://api.whatsapp.com/send/?phone=55011930413365&text="+texto);
        location.reload();

    }
}

function cancelarPedido(){
    location.reload();
}