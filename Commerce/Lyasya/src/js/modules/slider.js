"use strict"

export function swiper() {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    if (body.offsetWidth <= 991) {
      const swiper = new Swiper('.popular-swiper', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 4,
        spaceBetween: 32,
        direction: 'horizontal',
        navigation: {
          nextEl: '.popular-swiper__next',
          prevEl: '.popular-swiper__prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }
      });
      const swiperHero = new Swiper('.hero-swiper', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        direction: 'horizontal',
        pagination: {
          el: '.hero-swiper__pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        }
      });
    }
    const swiperCatalog = new Swiper('.catalog-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 4,
      spaceBetween: 32,
      direction: 'horizontal',
      navigation: {
        nextEl: '.catalog-swiper__next',
        prevEl: '.catalog-swiper__prev',
      },
      grid: {
        rows: 3,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          grid: {
            rows: 5,
          },
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        910: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1350: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }
    });
    const swiperHeroSlide = new Swiper('.hero-slide-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      direction: 'vertical',
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });

    const swiperProductThumb = new Swiper('.popup-product-swiper-thumb', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 4,
      spaceBetween: 10,
      direction: 'vertical',
      breakpoints: {
        320: {
          slidesPerView: 4,
          direction: 'horizontal',
        },
        501: {
          slidesPerView: 4,
          direction: 'vertical',
        },
      }
    });
    const swiperProduct = new Swiper('.popup-product-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      direction: 'horizontal',
      thumbs: {
        swiper: swiperProductThumb,
      },
      pagination: {
        el: '.popup-product-swiper__pagination',
          type: "fraction",
      },
      navigation: {
        nextEl: '.popup-product-swiper__next',
        prevEl: '.popup-product-swiper__prev',
      },
    });
  })
}