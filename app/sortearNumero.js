const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1, 10); //transformando em inteiro um numero pseudo-aleatorio de 0 a 100
}

console.log('numero secreto:', numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerText = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerText = maiorValor;
