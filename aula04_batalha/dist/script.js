function jogar() {
  let personagem = ["", "", ""];
  let viloes = ["", "", ""];
  let forcaPersonagem = 0;
  let forcaViloes = 0;

  // Lista de vilões possíveis
  let viloesPossiveis = ["Flowey", "Chara", "Undyne", "Skull Kid", "Ganondorf"];

  // Escolher 3 personagens
  for (let i = 0; i < 3; i++) {
    let escolha = prompt("Digite o nome do personagem " + (i + 1));
    personagem[i] = escolha;
    let forca = Math.floor(Math.random() * 10) + 1;
    forcaPersonagem += forca;
    console.log(`${escolha} tem força: ${forca}`);
  }

  // Sortear 3 vilões e calcular força
  for (let i = 0; i < 3; i++) {
    let indice = Math.floor(Math.random() * viloesPossiveis.length);
    let vilao = viloesPossiveis[indice];
    viloes[i] = vilao;
    let forca = Math.floor(Math.random() * 10) + 1;
    forcaViloes += forca;
    console.log(`${vilao} tem força: ${forca}`);
  }

  // Mostrar equipes
  let mensagem = `🧑‍🤝‍🧑 Time: ${personagem.join(", ")} (Força: ${forcaPersonagem})\n` +
                 `👾 Vilões: ${viloes.join(", ")} (Força: ${forcaViloes})\n\n`;

  // Ver quem ganhou
  let resultado = "";
  if (forcaPersonagem > forcaViloes) {
    resultado = "🏆 Seu time venceu!";
  } else if (forcaPersonagem < forcaViloes) {
    resultado = "💀 Seu time perdeu!";
  } else {
    resultado = "🤝 Empate!";
  }

  // Mostrar no HTML
  document.getElementById("winner").innerText = mensagem + resultado;
  document.getElementById("winner").style.display = "block";
}