const mapLink = document.querySelector(".map-link");
const mapSection = document.querySelector(".section-map");
const mapClose = document.querySelector(".button-map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapSection.classList.add("section-map--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapSection.classList.remove("section-map--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapSection.classList.contains("section-map--show")) {
      evt.preventDefault();
      mapSection.classList.remove("section-map--show");
    }
  }
});
