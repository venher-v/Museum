'use strict';

let swiper = null;
const galeryList = document.querySelector('.galery__list');

function initSwiper() {
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
      dynamicBullets: true,
    },

    watchOverflow: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },

    speed: 800,

    on: {
      slideChange: function () {
        const pagination = document.querySelector('.swiper-pagination');
        if (pagination) {
          pagination.style.width = '';
        }
      },
    },
  });

  console.log('Swiper initialized');
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy();
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
