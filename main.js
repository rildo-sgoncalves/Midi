// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();        
    } else {
        alert("Elemento não encontrado ou seletor inválido.");
    }
}

const listaDeBotoes = document.querySelectorAll('.tecla');
// const listaDeSons = document.querySelectorAll('audio');

// listaDeTeclas[0].onclick = tocaSomPom;



// let contador = 0;

// while(contador < listaDeTeclas.length) {

//     const instrumento = listaDeTeclas[contador].classList[1];

//     console.log(instrumento);

//     listaDeTeclas[contador].onclick = function() {
//         tocaSom(`#som_${instrumento}`);
//     };
//     contador++;

//     console.log(contador);
// };


for (let contador = 0; contador < listaDeBotoes.length; contador++) {
    const botao = listaDeBotoes[contador];
    const instrumento = botao.classList[1];

    const idAudio = `#som_${instrumento}`;

    botao.onclick = function () {
        tocaSom(idAudio);
    };

    botao.onkeydown = function (evento) {
        const tecla = evento.code;
        if (tecla === 'Space' || tecla === 'Enter') {
            botao.classList.add('ativa');
        }
    };

    botao.onkeyup = function () {
        botao.classList.remove('ativa');
    };
};
