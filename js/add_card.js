const buttonsBuy = document.querySelectorAll('.button--buy');
const addCardSection = document.querySelector('.section-add-to-card');
const addCardClose = document.querySelector(".button--addCard-close");

buttonsBuy.forEach(button => {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    addCardSection.classList.add('section-add-to-card--show');
  });
});

addCardClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  addCardSection.classList.remove('section-add-to-card--show');
});

window.addEventListener('keydown', function (evt) {
  if(e.key === "Escape") {
    if (mapSection.classList.contains('section-add-to-card--show')) {
      evt.preventDefault();
      mapSection.classList.remove('section-add-to-card--show');
    }
  }
});
