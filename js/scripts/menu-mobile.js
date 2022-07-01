{
  const menuMobileOverlay = document.querySelector('.js-mobile-overlay');
  const btnMobile = document.querySelector('.js-btn-mobile');
  const menuMobile = document.querySelector('.js-menu-mobile');
  const menuDropdownHide = document.querySelectorAll('.menu-dropdown');
  const btnMobileDropdown = document.querySelectorAll(
    '.js-btn-dropdown-menu-mobile',
  );

  // Fechar ao clicar fora do menu
  menuMobileOverlay.addEventListener('click', () => {
    menuMobile.classList.remove('active');
  });

  //abrir/fechar dropdown interno do menu.
  btnMobileDropdown.forEach((anchor, index) => {
    anchor.addEventListener('click', (event) => {
      //prevent default da anchor tag
      event.preventDefault();

      //loop para remover active da anchor
      btnMobileDropdown.forEach((removeAnchor) => {
        removeAnchor.classList.remove('active');
      });

      //loop para remover a classe e não abrir dois items simultâneamente.
      menuDropdownHide.forEach((itemMenu) => {
        itemMenu.classList.remove('active');
      });

      //adiciona a classe active à ul e à anchor
      menuDropdownHide[index].classList.add('active');
      anchor.classList.add('active');
    });
  });

  //abrir menu mobile ao clicar no hamburguer
  btnMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
  });
}
