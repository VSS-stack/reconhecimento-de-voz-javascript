function verificaValorDoChute(chute) {
    const numero = parseInt(chute);

    if(chuteForInvalido(numero)) {
        console.log('valor invalido');
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

