alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;



//enquanto o chute não for igual ao n.s
while (chute != numeroSecreto) {
     chute = prompt('Escolha um número entre 1 e 10');
// se o chute for real ao número secreto
     if (chute == numeroSecreto ) {
          alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas` );
     } else {
          if (chute > numeroSecreto) {
               alert(`O número secreto é menor que ${chute}`);
          } else {
               alert(`O número secreto é maior que ${chute}`);
          }
          tentativas++;
     }
}
