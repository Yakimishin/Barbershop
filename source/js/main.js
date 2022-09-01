var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var statsItemHeight = document.querySelector('.stats__item').clientHeight;
var statsWrapper = document.querySelector('.stats__wrapper');


statsWrapper.style.top = (-statsItemHeight+'px');


// Если JS подключился, убираем модификатор с навигации,
// который отображает меню в статике. Его я ставил на тот случай, если
// вдруг JS не сработает.

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
});

