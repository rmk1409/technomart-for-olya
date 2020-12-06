const galleryPerforators = document.querySelectorAll('.popular-category-gallery--perforators');
const galleryDrills= document.querySelectorAll('.popular-category-gallery--drills');
const buttonRight= document.querySelectorAll('.slider-button--right');
const buttonLeft= document.querySelectorAll('.slider-button--left');

buttonRight.addEventListener(`click`, function (evt) {
  evt.preventDefault();

  galleryPerforators.classList.remove(`slider-button--active`);
  document.querySelector(`.promo-slider--active`).classList.remove(`promo-slider--active`);

  sliderButton2.classList.add(`slider-button--active`);
  promoSlider2.classList.add(`promo-slider--active`);
});
