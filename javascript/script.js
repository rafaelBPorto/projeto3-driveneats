function selecionarPrato(prato) {

    const pratoSelecionado = document.querySelector('.prato .item-selecionado');

    console.log(pratoSelecionado);
    
    prato.classList.add('item-selecionado')

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove('item-selecionado')
    }
    
}

function selecionarBebida(bebida) {

    const bebidaSelecionado = document.querySelector('.bebida .item-selecionado');
    
    bebida.classList.toggle('item-selecionado')
    
    if (bebidaSelecionado !== null) {
        bebidaSelecionado.classList.remove('item-selecionado')
    }
    
}

function selecionarSobremesa(item) {

    const itemSelecionado = document.querySelector('.sobremesa .item-selecionado');
    item.classList.add('item-selecionado')

    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove('item-selecionado')
    }

}