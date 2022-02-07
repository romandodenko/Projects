"use strict"

import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

export function projectsSwiper() {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.projects__swiper', {
    slidesPerView: "auto",
    direction: 'horizontal',
    navigation: {
      nextEl: '.projects__next',
      prevEl: '.projects__prev',
    },
  });

  const projectTooltip = document.querySelectorAll(".projects__tooltip");

  tippy(projectTooltip, {
    placement: 'top',
    allowHTML: true,
    role: 'tooltip',
    trigger: 'mouseenter focus click',
    hideOnClick: true,
    theme: "colorToolp",
  });
}