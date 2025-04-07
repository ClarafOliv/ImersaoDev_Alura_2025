let rodada = 1;
let totalRodadas = 3;
let impostor = Math.floor(Math.random() * 6) + 1;
let jogoAtivo = true;

const cores = {
  1: "vermelho",
  2: "azul",
  3: "verde",
  4: "amarelo",
  5: "laranja",
  6: "ciano"
};

function jogar(escolhaJogador) {
  if (!jogoAtivo) return;

  const mensagemElemento = document.getElementById("mensagem");

  while (rodada <= totalRodadas) {
    if (escolhaJogador == impostor) {
      mensagemElemento.textContent = `Você encontrou o impostor! Vitória na rodada ${rodada}!`;
      desativarBotoes();
      jogoAtivo = false;
      document.getElementById("btnResetar").style.display = "block";
      break;
    } else {
      if (rodada === totalRodadas) {
        mensagemElemento.textContent = `Você perdeu! O impostor era o ${cores[impostor]}.`;
        desativarBotoes();
        jogoAtivo = false;
        document.getElementById("btnResetar").style.display = "block";
        break;
      } else {
        rodada++;
        mensagemElemento.textContent = `Rodada ${rodada} - Esse não era o impostor. Tente novamente.`;
        break; // para manter uma tentativa por clique
      }
    }
  }
}

function desativarBotoes() {
  document.querySelectorAll("button.personagem").forEach(botao => {
    botao.disabled = true;
  });
}

function resetarJogo() {
  rodada = 1;
  impostor = Math.floor(Math.random() * 6) + 1;
  jogoAtivo = true;
  document.getElementById("mensagem").textContent = "Rodada 1 - Escolha um tripulante";
  document.querySelectorAll("button.personagem").forEach(botao => {
    botao.disabled = false;
  });
  document.getElementById("btnResetar").style.display = "none";
}