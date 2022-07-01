{
  const btnOpenModal = document.querySelector('.js-open-modal');
  const btnCloseModal = document.querySelector('.js-close-modal');
  const overlay = document.querySelector('.js-overlay');

  btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle('show-modal');
  });

  btnCloseModal.addEventListener('click', () => {
    document.documentElement.classList.remove('show-modal');
  });

  overlay.addEventListener('click', () => {
    document.documentElement.classList.remove('show-modal');
  });
}
