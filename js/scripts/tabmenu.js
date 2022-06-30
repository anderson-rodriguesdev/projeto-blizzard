{
  const btnMenu = document.querySelectorAll('.js-btn-menu');
  const menuSite = document.querySelectorAll('.js-menu');

  function clean() {
    btnMenu.forEach((btn) => {
      btn.classList.remove('active');
    });
    menuSite.forEach((itemMenu) => {
      itemMenu.classList.remove('active');
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active');
        btnMenu.forEach((botao) => {
          botao.classList.remove('active');
        });
      });
    });
  }

  //Como adicionar toggle no botão sem ser afetado pelo loop do clean?
  function ativarIndex(botao, index) {
    clean();
    botao.classList.add('active');
    menuSite[index].classList.add('active');
  }

  btnMenu.forEach((botao, index) => {
    botao.addEventListener('click', (event) => {
      event.preventDefault();
      ativarIndex(botao, index);
    });
  });
}
