//enviando para o arquivo html que o cabeçalho h1 vai ter esse texto
/* let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do Número Secreto"

//enviando para o arquivo html que o paragrafo p vai ter esse texto
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 500"; */

//Fazendo boa prática para evitar a repetição dos códigos que estão 
// comentados, criando função
let listaNumero = [];
let numeroMax = 800;
let numeroSecreto = geradorNumAleatorio(); 
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(params) {
    exibirTextoNaTela('h1', "Jogo do Número Secreto");
    exibirTextoNaTela('p', "Escolha um número entre 1 e " + numeroMax + ":");
}

mensagemInicial();

//adicionando uma funcionalidade para o botão
function verificarChute() {
    let chute = document.querySelector('input').value;

    //fazer o let chute com inserção do imput que digitamos e mudar no 
    // index para que não vá só ate 10 e leia o valor da variavel   
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemtentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('h1', 'Acertou!!');
        exibirTextoNaTela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
         exibirTextoNaTela('p', 'O número secreto é maior!');
    }
    //Contagem das tentativas
    tentativas++;
    //Chamando função de limpeza do campo de chute
    limparCampo();
}
}

 //Função para limpar o campo de chute a cada tentativa
function limparCampo(params) {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(params) {
    numeroSecreto = geradorNumAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function geradorNumAleatorio() {
    //preciso colocar o return para que o math seja executado e nos devolva a informação
    //removei o return para colocar variavel de numero escolhido
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let qntNumeros = listaNumero.length

    if (qntNumeros == numeroMax) {
        listaNumero = [];
    }
    if (listaNumero.includes(numeroEscolhido)) {
        return geradorNumAleatorio(); 
    } else {
        listaNumero.push(numeroEscolhido);
        console.log(listaNumero);
        return numeroEscolhido;
    }
}

//adicionar a leitura de tecla para ler o código todo
document.querySelector('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});