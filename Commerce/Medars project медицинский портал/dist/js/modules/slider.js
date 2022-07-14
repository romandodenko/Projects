"use strict"

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  if (body.offsetWidth < 780) {
    const block1Swiper = new Swiper('.block-1-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      direction: 'horizontal',
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.block-1-swiper__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
      }
    });
  }

  if (body.offsetWidth < 1024) {
    const block10TopSlider = new Swiper('.block-10-top-slider', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      direction: 'horizontal',
      pagination: {
        el: '.block-10-top-slider__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        885: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }
    });
  }

  if (body.offsetWidth < 1024) {
    const block5TopSlider = new Swiper('.block-5-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      direction: 'horizontal',
      pagination: {
        el: '.block-5-swiper__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        830: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }
    });
  }

  const block10BottomSlider = new Swiper('.block-10-bottom-slider', {
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 32,
    direction: 'horizontal',
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.block-10-bottom-slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.block-10-bottom-slider__next',
      prevEl: '.block-10-bottom-slider__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
})