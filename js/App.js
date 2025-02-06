document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
  const swiper = new Swiper(".swiper", {
    // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
    direction: "horizontal",
    // Define a direção de transição dos slides como horizontal.
    loop: true,
    // Define que o carrossel irá repetir os slides (não fará looping).

    pagination: {
      el: ".swiper-pagination",
      // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
    },
  });

  document.addEventListener("keydown", function (event) {
    // Adiciona um listener para eventos de teclado.
    if (event.key === "ArrowLeft") {
      swiper.slidePrev();
      // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
    } else if (event.key === "ArrowRight") {
      swiper.slideNext();
      // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
    }
  });

  const gameInput = document.getElementById("gameInput");
  // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

  gameInput.addEventListener("keypress", function (event) {
    // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
    if (event.key === "Enter") {
      // Verifica se a tecla pressionada foi 'Enter'.
      let searchGame = gameInput.value.trim().toUpperCase();
      // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

      switch (searchGame) {
        case "MARIO":
          swiper.slideTo(0);
          // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
          break;
        case "POKEMON":
          swiper.slideTo(1);
          // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
          break;
        default:
          alert("Jogo não foi encontrado");
          // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
          break;
      }
    }
  });

  /* Criação de um modal */
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");
  const closeButtons = document.querySelectorAll(".close"); // Seleciona todos os botões de fechar
  const openRegisterModalLink = document.getElementById("openRegisterModal");
  const openLoginModalLink = document.getElementById("openLoginModal");

  // Abre o modal ao clicar no botão de login
  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  // Fecha os modais ao clicar no botão de fechar
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      loginModal.style.display = "none";
      registerModal.style.display = "none";
    });
  });

  // Fecha os modais ao clicar fora deles
  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }

    if (e.target === registerModal) {
      registerModal.style.display = "none";
    }
  });

  // Abre o modal de cadastro ao clicar em "Cadastre-se"
  openRegisterModalLink.addEventListener("click", (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    loginModal.style.display = "none";
    registerModal.style.display = "block";
  });

  // Abre o modal de login ao clicar em "Faça login"
  openLoginModalLink.addEventListener("click", (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    registerModal.style.display = "none";
    loginModal.style.display = "block";
  });
});