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

}

//Ativacao do botao de envio

function habilitarPedido() {
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        console.log("pedido ok");

        //mudar cor do botão
        const botaoPedido = document.querySelector('.selecao');
        botaoPedido.classList.add('botao-pedido-ativo');

        //mudar texto do botão
        const textoBotaoPedido = document.querySelector('.selecao h1');
        textoBotaoPedido.innerHTML = "Fechar Pedido"

        liberarPedido = true;
    }

}

function realizarPedido() {
    if (liberarPedido) {
        let valorTotal = (Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa)).toFixed(2);

        let texto = `Olá, Gostaria de fazer o pedido:\n - Prato: ${nomePrato}\n - Bebida: ${nomeBebida}\n - Sobremesa: ${nomeSobremesa}\n Total: R$ ${valorTotal}`;
        console.log(texto);
        texto = window.encodeURIComponent(texto);

        window.open("https://api.whatsapp.com/send/?phone=55011930413365&text="+texto);
    }
}
