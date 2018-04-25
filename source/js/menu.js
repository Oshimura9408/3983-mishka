var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');
navMain.classList.remove('page-header--nojs');
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__toggle--closed')) {
    navMain.classList.remove('page-header__toggle--closed');
    navMain.classList.add('page-header__toggle--opened');
  } else {
    navMain.classList.remove('page-header__toggle--opened');
    navMain.classList.add('page-header__toggle--closed');
  }
});
