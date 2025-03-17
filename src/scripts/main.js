'use strict';

let swiper = null;
const galeryList = document.querySelector('.galery__list');

function initSwiper() {
  galeryList.classList.add('swiper-wrapper');

  swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.07,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 2.07,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'my-bullet',
      bulletActiveClass: 'my-bullet-active',
    },
  });

  console.log('Swiper initialized');
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy();
    galeryList.classList.remove('swiper-wrapper');
    swiper = null;
  }

  console.log('Swiper destroyed');
}

function windowResizeHandler() {
  if (window.innerWidth < 1280 && !swiper) {
    initSwiper();
  } else if (window.innerWidth >= 1280 && swiper) {
    destroySwiper();
  }
}

windowResizeHandler();

window.addEventListener('resize', windowResizeHandler);
