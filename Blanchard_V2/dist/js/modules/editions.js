"use strict"

import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
const body = document.querySelector("body")

export function editions() {
  if (body.offsetWidth >= 600) {
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper('.editions__swiper', {
      slidesPerView: "auto",
      direction: 'horizontal',
      navigation: {
        nextEl: '.editions__next',
        prevEl: '.editions__prev',
      },
      pagination: {
        el: '.editions__pagination',
        clickable: true,
        type: 'fraction',
      },
    });
  }
}