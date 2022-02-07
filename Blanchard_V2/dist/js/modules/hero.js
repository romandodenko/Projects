"use strict"

import Swiper, { Navigation, Pagination } from 'swiper';

export function swiperHero() {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.hero__swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
      delay: 5000
    },
  });
}
