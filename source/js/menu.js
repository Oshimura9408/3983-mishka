var pHead = document.querySelector('.page-header');
var menu_button = document.querySelector('.page-header__button');
pHead.classList.remove('page-header--nojs');
pHead.classList.add('page-header--closed');
menu_button.classList.add('page-header__button--closed');
menu_button.addEventListener('click', function () {
  if (pHead.classList.contains('page-header--closed')) {
    pHead.classList.remove('page-header--closed');
    menu_button.classList.remove('page-header__button--closed');
    pHead.classList.add('page-header--opened');
  } else {
    pHead.classList.remove('page-header--opened');
    menu_button.classList.add('page-header__button--closed');
    pHead.classList.add('page-header--closed');
  }
});
