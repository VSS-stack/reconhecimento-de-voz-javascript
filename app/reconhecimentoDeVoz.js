const elementoChute = document.getElementById('chute'); //pegando elemento no html

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //declarando objeto para o web speech api

const recognition = new SpeechRecognition(); //declarando constante baseado em nova instancia da funcao construtora
recognition.lang = 'pt-Br'; //definindo linguagem para reconhecimento
recognition.start(); // dando start ao reconhecimento

recognition.addEventListener('result', onSpeak); //lendo o resultado do evento recognition e passando como parametro para a funcao onSpeak

//selecionando parte do evento e colocando em um elemento
function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
}

//incluindo o elemento no html
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}
