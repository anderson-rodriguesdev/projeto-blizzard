{
  const allFilters = document.querySelectorAll('.js-nav-games li a');
  const tabPane = document.querySelectorAll('.tab-pane-games');

  allFilters.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      allFilters.forEach((item) => {
        item.classList.remove('active');
      });

      tabPane.forEach((item) => {
        item.classList.remove('active');
      });

      tabPane[index].classList.add('active');
      item.classList.add('active');
    });
  });
}
