function calcTroco(dinheiro, preço){
    let troco = dinheiro % preço
    return troco
}

function calcPao(dinheiro, preço){
    let paes = Math.floor(dinheiro / preço)
    return paes
}

console.log('Voce vai comprar ' + calcPao(10, 1.5) + ' pães. E seu troco sera de R$' + calcTroco(10, 1.5))
