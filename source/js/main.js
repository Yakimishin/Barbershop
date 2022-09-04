var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');


// Если JS подключился, убираем модификатор с навигации,
// который отображает меню в статике. Его я ставил на тот случай, если
// вдруг JS не сработает.

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
});


// Пытался подключить динамический отступ .stats , чтобы он зависел от высоты верхнего
// элемента. Почему то начинает работать , только когда таскать окно туда сюда,
// а изначально отступа нет вообще. Пока не понял как решить. Придется прописывать фиксированный.

// var statsHeaderHeight = document.querySelector('.stats__header').clientHeight;
// var statsItemHeight = document.querySelector('.stats__item').clientHeight;
// var statsWrapper = document.querySelector('.stats__wrapper');

// window.addEventListener('resize', function(event){
//   const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//   if(viewportWidth > 768) {
//     statsWrapper.style.top = (-statsHeaderHeight+'px');
//     statsWrapper.style.marginBottom = (-statsHeaderHeight+'px');
//   }

//   if(viewportWidth > 1199) {
//   statsWrapper.style.top = (-statsItemHeight+'px');
//   statsWrapper.style.marginBottom = (-statsItemHeight+'px');
//   }
// });








