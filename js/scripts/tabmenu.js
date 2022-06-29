{
  const btnMenu = document.querySelectorAll('.js-btn-menu');
  const menuSite = document.querySelectorAll('.js-menu');

  function clean() {
    menuSite.forEach((itemMenu) => {
      itemMenu.classList.remove('active');
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active');
        btnMenu.forEach((btn) => {
          btn.classList.remove('active');
        });
      });
    });
  }

  function abrirMenu(index, btn) {
    clean();
    btn.classList.add('active');
    menuSite[index].classList.add('active');
  }

  btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      abrirMenu(index, btn);
    });
  });

  // btnMenu.forEach((btn, index) => {
  //   btn.addEventListener('click', (event) => {
  //     event.preventDefault();

  //     menuSite.forEach((itemMenu) => {
  //       itemMenu.classList.remove('active');
  //       itemMenu.addEventListener('mouseleave', () => {
  //         itemMenu.classList.remove('active');
  //         btnMenu.forEach((itemBtn) => {
  //           itemBtn.classList.remove('active');
  //         });
  //       });
  //     });

  //     btnMenu.forEach((itemBtn) => {
  //       itemBtn.classList.remove('active');
  //     });

  //     btn.classList.add('active');
  //     menuSite[index].classList.add('active');
  //   });
  // });
}
