let playerHP = 100;
let sansHP = 100;

const frasesReset = [
  "de novo...? você não cansa, não?",
  "você acha que pode simplesmente apagar tudo?",
  "essas voltas no tempo... estão começando a me irritar.",
  "bem-vindo de volta. ou seria... bem-vindo ao loop?",
  "cada reset... eu me lembro.",
  "eu já te vi fazer isso antes...",
  "não adianta fugir das consequências.",
  "dessa vez... vai ser diferente?"
];

function atualizarStatus() {
  document.getElementById("playerHP").textContent = playerHP; // document.getElementById("playerHP"): pega o elemento HTML que tem o id="playerHP" (ou seja, onde aparece a vida do jogador).
//.textContent = playerHP: substitui o texto dentro desse elemento pelo valor da variável playerHP.
  document.getElementById("sansHP").textContent = sansHP;
}

function dialogo(texto) {
  document.getElementById("dialogo").textContent = texto;
  //Mostra uma mensagem (ou fala de personagem) na parte do diálogo da batalha.
}

function atacar() {
  let dano = Math.floor(Math.random() * 15) + 5; // valor do dano entre 5 e 19
  sansHP -= dano; //sansHP = sansHP - dano
  dialogo(`Você atacou Sans e causou ${dano} de dano!`);

  if (sansHP <= 0) {
    sansHP = 0;
    atualizarStatus();
    dialogo("Sans: acho que tô indo pro cemitério de ossos agora, né?");
  setTimeout(() => {
    dialogo("Sans: ...ainda bem que isso não é canônico.");
    //desativarBotoes();
  }, 2000); // 2 segundos depois
  } else {
    atualizarStatus();
    setTimeout(turnoSans, 1000);
  }
}

function usarItem() {
  let cura = Math.floor(Math.random() * 20) + 10;
  playerHP += cura; // playerHP = playerHP + cura
  if (playerHP > 100) playerHP = 100;
  dialogo(`Você usou um item e recuperou ${cura} de HP!`);
  atualizarStatus();
  setTimeout(turnoSans, 1000);
}

function fugir() {
  dialogo("Você tenta fugir... mas não tem para onde ir.");
  setTimeout(turnoSans, 1000);
}

function turnoSans() {
  if (sansHP <= 0) return;

  let dano = Math.floor(Math.random() * 10) + 5;
  playerHP -= dano;
  if (playerHP < 0) playerHP = 0;
  dialogo(`Sans ataca você com ossos flutuantes! Você perde ${dano} de HP.`);

  atualizarStatus();

  if (playerHP <= 0) {
    dialogo("Você morreu. Mas ei, acontece.");
    //desativarBotoes();
  }
}

// desativa todos os botões da página
function desativarBotoes() { 
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function resetar() {
  playerHP = 100;
  sansHP = 100;
  atualizarStatus();
  // Escolhe uma frase aleatória
  let frase = frasesReset[Math.floor(Math.random() * frasesReset.length)];
  dialogo(`Sans: "${frase}"`);

  // Reativa os botões
  document.querySelectorAll("button").forEach(btn => btn.disabled = false);
}



/*idade = prompt("Quantos anos você tem?")
if(idade < 18){
  alert("Você Não pode jogar JokenPo! LOL")
}

if(idade >= 18){
  jogador = prompt("Digite 1-Pedra, 2-Papel, ou 3-Tesoura?")
  computador = Math.floor(Math.random() * 3) + 1; // .floor() é usado para arredondar para baixo o valor sorteado, .random() * 3 --> obtemos um numero aleatorio no intervalo de 0 a 3 e o 1 somado no final, é para ficar entre 1 e 3.
  if(jogador == computador){
    alert("Empate!")
  }
  
  if(jogador == 1){ // se a escolha do jogador for Pedra 
    if(computador == 2){ // comp escolhe Papel
      alert("O computador ganhou!")
    }
    if(computador == 3){ // comp escolhe Tesoura
      alert("Você ganhou! Parabéns!")
    }
  }
  
  if(jogador == 2){ // se a escolha do jogador for Papel 
    if(computador == 1){ // comp escolhe Pedra
      alert("Você ganhou! Parabéns!")
    }
    if(computador == 3){ // comp escolhe Tesoura
      alert("O computador ganhou!")
    }
  }
  
  if(jogador == 3){ // se a escolha do jogador for Tesoura 
    if(computador == 1){ // comp escolhe Pedra
      alert("Você ganhou! Parabéns!")
    }
    if(computador == 2){ // comp escolhe Papel
      alert("O computador ganhou!")
    }
  }
  alert("A escolha do computador foi: " + computador)
}*/
