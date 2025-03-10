'use strict';

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
  },


  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});
