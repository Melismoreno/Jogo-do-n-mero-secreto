("Esse é o jogo do número secreto");

let numeroMax = 500;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
//Variável vazia para se inserida no while 
let chute;
console.log(numeroSecreto);
let tentativas = 1;

//Fazer o enquanto para ficar perguntando até acertar
while (chute != numeroSecreto) {
    //o Chute vem pra dentro para termos a pergunta
    chute = prompt("Qual o número secreto? Escolha entre 1 e " + numeroMax);

    //Condições de verificação e condições
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert("O número é maior que " + chute);
        } else {
            alert("O número é menor que " + chute);
        }
        tentativas++;
    }
}

let palavratentativas = tentativas > 1 ? "tentativas" : "tentativa"
alert("Você acertou o número secreto " + numeroSecreto + " com " + tentativas + " " + palavratentativas + "!");
