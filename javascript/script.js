//Selecao de items
let pratoSelecionado = false
let bebidaSelecionada = false
let sobremesaSelecionada =false
function selecionarPrato(prato) {

    const itemSelecionado = document.querySelector('.prato .item-selecionado');
    
    
    if ( itemSelecionado!== null) {
        itemSelecionado.classList.remove('item-selecionado');
    }
    prato.classList.add('item-selecionado');
    pratoSelecionado = true;
    
    habilitarPedido();
}

function selecionarBebida(bebida) {

    const itemSelecionado = document.querySelector('.bebida .item-selecionado');
    
    
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove('item-selecionado')
    }
    bebida.classList.add('item-selecionado');
    bebidaSelecionada = true;
    habilitarPedido();
}

function selecionarSobremesa(item) {

    const itemSelecionado = document.querySelector('.sobremesa .item-selecionado');
    
    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove('item-selecionado');
    }
    ;
    item.classList.add('item-selecionado');
    sobremesaSelecionada = true;
    habilitarPedido();

}

//Ativacao do botao de envio

function habilitarPedido(){
    if(pratoSelecionado && bebidaSelecionada && sobremesaSelecionada){
        console.log("pedido ok");

        //mudar cor do botão
        const botaoPedido = document.querySelector('.selecao');
        botaoPedido.classList.add('botao-pedido-ativo');

        //mudar texto do botão
        const textoBotaoPedido = document.querySelector('.selecao h1');
        textoBotaoPedido.innerHTML = "Fechar Pedido"
    }

}

