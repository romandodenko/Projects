"use strict"

export function ultimas() {

  let ultimas = new Swiper(".ultimas-swiper", {
    speed: 1000,
    allowTouchMove: false,
    breakpoints: {
      320: {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        grid: {
          rows: 0,
        },
      },
      600: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 2
        },
      },

      1124: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2
        },
      }
    },
    pagination: {
      el: '.ultimas__pagination',
      clickable: true,
    },
  });

}