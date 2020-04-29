var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--inactive')) {
    pageHeader.classList.remove('page-header--inactive');
    pageHeader.classList.add('page-header--active');
  } else {
    pageHeader.classList.add('page-header--inactive');
    pageHeader.classList.remove('page-header--active');
  }
});
