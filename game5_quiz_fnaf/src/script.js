// PARTE 1: Lista de perguntas e respostas
//JSON --> organiza os dados | lista
perguntas = [
  {
    pergunta: "Qual é o nome completo do criador da franquia FNAF?",
    respostas: [
      { opcao: "Scott Pilgrim", correto: false },
      { opcao: "Scott Cawthon", correto: true },
      { opcao: "Scott Lang", correto: false }
    ]
  },
  {
    pergunta: "Qual animatrônico é conhecido por se mover rapidamente pelo corredor à direita?",
    respostas: [
      { opcao: "Bonnie", correto: false },
      { opcao: "Foxy", correto: true },
      { opcao: "Chica", correto: false }
    ]
  },
  {
    pergunta: "Quem é o antagonista principal em FNAF: Sister Location?",
    respostas: [
      { opcao: "Ballora", correto: false },
      { opcao: "Circus Baby", correto: true },
      { opcao: "Funtime Freddy", correto: false }
    ]
  },
  {
    pergunta: "Qual animatrônico original aparece pela esquerda na FNAF 1?",
    respostas: [
      { opcao: "Bonnie", correto: true },
      { opcao: "Freddy", correto: false },
      { opcao: "Chica", correto: false }
    ]
  },
  {
    pergunta: "Como se chama a pizzaria onde se passa FNAF 1?",
    respostas: [
      { opcao: "Freddy's Family Diner", correto: false },
      { opcao: "Freddy Fazbear's Pizza", correto: true },
      { opcao: "Bonnie's Pizza Place", correto: false }
    ]
  },
  {
    pergunta: "Qual jogo da franquia introduziu as mecânicas de máscara e music box?",
    respostas: [
      { opcao: "FNAF 3", correto: false },
      { opcao: "FNAF 2", correto: true },
      { opcao: "FNAF: Help Wanted", correto: false }
    ]
  },
  {
    pergunta: "Quem é o animatrônico invisível aos olhos, mas detectável por áudio em FNAF 3?",
    respostas: [
      { opcao: "Springtrap", correto: false },
      { opcao: "Phantom Mangle", correto: false },
      { opcao: "Phantom Freddy", correto: true }
    ]
  },
  {
    pergunta: "Qual personagem é conhecido por dizer 'I always come back'?",
    respostas: [
      { opcao: "Purple Guy", correto: false },
      { opcao: "Springtrap", correto: true },
      { opcao: "Glitchtrap", correto: false }
    ]
  },
  {
    pergunta: "Qual desses animatrônicos faz parte dos 'Nightmare Animatronics'?",
    respostas: [
      { opcao: "Toy Bonnie", correto: false },
      { opcao: "Nightmare Fredbear", correto: true },
      { opcao: "Funtime Chica", correto: false }
    ]
  },
  {
    pergunta: "Em FNAF: Security Breach, qual é o nome do animatrônico que ajuda o jogador?",
    respostas: [
      { opcao: "Glamrock Freddy", correto: true },
      { opcao: "Montgomery Gator", correto: false },
      { opcao: "Roxanne Wolf", correto: false }
    ]
  }
];


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  //innerHTML dá o "poder" para alterar o texto
  /* `${indiceAtual + 1}/${perguntas.length}` --> formatar o texto que esta sendo apresentado
  */
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos += 1; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();

// PARTE EXTRA: Botão de Reset
const botaoReset = document.querySelector(".botao-reset");

function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
  botaoReset.style.display = "block"; // Mostra o botão de reset
}

botaoReset.onclick = function () {
  indiceAtual = 0;
  acertos = 0;
  conteudo.style.display = "flex";
  conteudoFinal.style.display = "none";
  botaoReset.style.display = "none"; // Esconde o botão de reset novamente
  carregarPergunta(); // Recomeça o quiz
};

