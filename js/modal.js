const buttonWrite = document.querySelector('.button--write-us');
const writeUsSection = document.querySelector('.section-wright-us');
const writeUsClose = document.querySelector('.button--wright-us-close');
const formWriteUs = document.querySelector('.form-write-us');
const inputName = document.querySelector('.input-name');
const inputEmail  = document.querySelector('.input-email');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

buttonWrite.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsSection.classList.add('section-wright-us--show');

  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

writeUsClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsSection.classList.remove('section-wright-us--show');
  writeUsSection.classList.remove('section-wright-us--error');
});

formWriteUs.addEventListener(`submit`, function (evt) {
  console.log(`Попытка`)
  if (!(inputName.value && inputEmail.value)) {
    evt.preventDefault();
    writeUsSection.classList.remove('section-wright-us--error');
    formWriteUs.offsetWidth = formWriteUs.offsetWidth;
    writeUsSection.classList.add('section-wright-us--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`name`, inputName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if(evt.key === "Escape") {
    if (writeUsSection.classList.contains(`section-wright-us--show`)) {
      evt.preventDefault();
      writeUsSection.classList.remove(`section-wright-us--show`);
      writeUsSection.classList.remove('section-wright-us--error');
    }
  }
});
