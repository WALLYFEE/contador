// script.js

// Substitua pela data do início do namoro (YYYY, MM-1, DD)
const namoroInicio = new Date(2021, 11, 6); // Exemplo: 15 de Novembro de 2022

function atualizarContador() {
  const agora = new Date();
  const diff = agora - namoroInicio;

  // Calcular o tempo em diferentes unidades
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  // Atualizar o HTML
  document.getElementById('days').textContent = dias;
  document.getElementById('hours').textContent = horas;
  document.getElementById('minutes').textContent = minutos;
  document.getElementById('seconds').textContent = segundos;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
function filterByYear(year) {
  const photoBlocks = document.querySelectorAll('.photo-block'); // Seleciona todos os blocos de foto
  const buttons = document.querySelectorAll('.year-menu button'); // Seleciona todos os botões do menu

  // Mostra ou esconde os blocos de fotos com base no ano selecionado
  photoBlocks.forEach((block) => {
    const blockYear = block.getAttribute('data-year');
    block.style.display = year === null || blockYear == year ? 'block' : 'none';
  });

  // Remove a classe 'selected' de todos os botões
  buttons.forEach((button) => button.classList.remove('selected'));

  // Adiciona a classe 'selected' ao botão clicado
  buttons.forEach((button) => {
    if (button.textContent == year || (year === null && button.textContent === "Todos")) {
      button.classList.add('selected');
    }
  });
}
// Seleciona o modal, a imagem do modal e o botão de fechar
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Adiciona o evento de clique às imagens dentro da galeria
document.querySelectorAll('.photo-block img').forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block'; // Exibe o modal
    modalImage.src = image.src; // Define a imagem clicada no modal
  });
});

// Fecha o modal ao clicar no botão de fechar (X)
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Oculta o modal
});

// Fecha o modal ao clicar fora da imagem ampliada
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; // Oculta o modal
  }
});
// Fecha o modal ao pressionar a tecla Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { // Verifica se a tecla pressionada é "Escape"
    modal.style.display = 'none'; // Oculta o modal
  }
});

// Selecionar todas as imagens nos blocos
document.querySelectorAll('.photo-block img').forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block'; // Mostra o modal
    modalImage.src = image.src; // Define a imagem no modal

    // Garante que a imagem tenha a classe de animação
    setTimeout(() => {
      modalImage.classList.add('show');
    }, 50); // Delay curto para ativar a animação
  });
});

// Fechar o modal ao clicar na imagem ampliada
modalImage.addEventListener('click', () => {
  modalImage.classList.remove('show'); // Remove a animação de zoom
  setTimeout(() => {
    modal.style.display = 'none'; // Esconde o modal após a animação
  }, 300); // Tempo correspondente ao "transition" do CSS
});
