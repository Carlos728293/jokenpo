// Botões
const btnJogar = document.querySelector(".jogar");
const btnVoltar = document.querySelector(".arrow");
// Onde vai ocorrer a mudança
const pageInicio = document.querySelector("#iniciar");
const pageJogar = document.querySelector("#jogo");

const fundoNoMove = document.querySelector(".esconde");
const aviso = document.querySelector(".aviso");
const voltarInicio = document.querySelector(".voltar_inicio");
const voltarJogo = document.querySelector(".voltar_jogo");

// Variáveis onde vai o resultado
const vitoria = document.querySelector(".vitoria-contator");
const empate = document.querySelector(".empate-contator");
const derrota = document.querySelector(".derrota-contator");

let vitoriaAtual = 0;
let empateAtual = 0;
let derrotaAtual = 0;

// Adicionando classe para mudar a tela para o jogo
btnJogar.addEventListener("click", () => {
  pageInicio.classList.add("hiden");
  pageJogar.classList.add("appeared");

  // Reinicia os contadores globais
  vitoriaAtual = 0;
  empateAtual = 0;
  derrotaAtual = 0;

  vitoria.innerHTML = vitoriaAtual;
  empate.innerHTML = empateAtual;
  derrota.innerHTML = derrotaAtual;
  aviso.classList.remove("appeared");
  fundoNoMove.classList.remove("appeared");
});

// mostra um aviso para continuar o jogo ou sair
btnVoltar.addEventListener("click", () => {
  aviso.classList.add("appeared");
  fundoNoMove.classList.add("appeared");
});

// Voltar para o inicio
voltarInicio.addEventListener("click", () => {
  pageInicio.classList.remove("hiden");
  pageJogar.classList.remove("appeared");
});

// Voltar para o jogo
voltarJogo.addEventListener("click", () => {
  aviso.classList.remove("appeared");
  fundoNoMove.classList.remove("appeared");
});

// JOGO
function jogou(valor) {
  const computador = Math.floor(Math.random() * 3) + 1;
  const minhaOpcao = valor;
  const resultadoTexto = document.querySelector(".resultado_texto");
  const resultado = document.querySelector(".resultado");

  resultado.classList.add("appeared");
  fundoNoMove.classList.add("appeared");

  if (minhaOpcao == computador) {
    empateAtual++;
    empate.innerHTML = empateAtual;

    resultado.style.background = "#f9e79f";
    resultadoTexto.innerHTML = "Empate";
  }

  // pedra
  if (minhaOpcao == 1) {
    if (computador == 2) {
      derrotaAtual++;
      derrota.innerHTML = derrotaAtual;

      resultado.style.background = "#f5b7b1";
      resultadoTexto.innerHTML = "Perdeu";
    } else if (computador == 3) {
      vitoriaAtual++;
      vitoria.innerHTML = vitoriaAtual;

      resultado.style.background = "#a3e4d7";
      resultadoTexto.innerHTML = "Vitória";
    }
  } else if (minhaOpcao == 2) {
    if (computador == 3) {
      derrotaAtual++;
      derrota.innerHTML = derrotaAtual;

      resultado.style.background = "#f5b7b1";
      resultadoTexto.innerHTML = "Perdeu";
    } else if (computador == 1) {
      vitoriaAtual++;
      vitoria.innerHTML = vitoriaAtual;

      resultado.style.background = "#a3e4d7";
      resultadoTexto.innerHTML = "Vitória";
    }
  } else if (minhaOpcao == 3) {
    if (computador == 1) {
      derrotaAtual++;
      derrota.innerHTML = derrotaAtual;

      resultado.style.background = "#f5b7b1";
      resultadoTexto.innerHTML = "Perdeu";
    } else if (computador == 2) {
      vitoriaAtual++;
      vitoria.innerHTML = vitoriaAtual;

      resultado.style.background = "#a3e4d7";
      resultadoTexto.innerHTML = "Vitória";
    }
  }

  setTimeout(() => {
    resultado.classList.remove("appeared");
    fundoNoMove.classList.remove("appeared");
  }, 2000);
}

/*
//troca imagem
const imagem = document.querySelector(".img1");
//const btnTrocar = document.getElementById("btnTrocar");

let trocando = true; // Variável de controle
let intervalo;

// Função para alternar as imagens
function trocarImagem() {
  if (imagem.src.includes("imagem1.png")) {
    imagem.src = "imagem2.png";
  } else {
    imagem.src = "imagem1.png";
  }
}

// Inicia a troca automática
function iniciarTroca() {
  intervalo = setInterval(trocarImagem, 500); // Troca a cada 500ms
}

// Para a troca ao clicar no botão
btnTrocar.addEventListener("click", () => {
  if (trocando) {
    clearInterval(intervalo);
    btnTrocar.textContent = "Iniciar Troca";
  } else {
    iniciarTroca();
    btnTrocar.textContent = "Parar Troca";
  }
  trocando = !trocando; // Alterna entre iniciar e parar
});

// Inicia automaticamente ao carregar
iniciarTroca();
*/
