"use strict"



export function hero() {
  const swiper = new Swiper('.hero__swiper', {
    slidesPerView: "auto",
    // breakpoints: {
    //   320: {
    //     autoplay: {
    //       delay: 5000000,
    //       disableOnInteraction: false
    //     },
    //   },
    //   1024: {
    //     autoplay: {
    //       delay: 5000,
    //       disableOnInteraction: false
    //     },
    //   },
    // },
    loop: false,
    speed: 500,
    direction: 'horizontal',
    allowTouchMove: false,
    pagination: {
      el: '.hero-swiper__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero-swiper__next',
      prevEl: '.hero-swiper__prev',
    },
  });

}