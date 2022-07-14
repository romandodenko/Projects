"use strict"

export function swiper() {
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
}

// Обычная разметка слайдера

// <div class="swiper">
//   <div class="swiper-wrapper">
//     <div class="swiper-slide">Slide 1</div>
//     <div class="swiper-slide">Slide 2</div>
//     <div class="swiper-slide">Slide 3</div>
//   </div>
//   <div class="swiper-pagination"></div>

//   <div class="swiper-button-prev"></div>
//   <div class="swiper-button-next"></div>

//   <div class="swiper-scrollbar"></div>
// </div>

// Разметка слайдера с thumb. Этот слайдер выглядит как обычный слайдер в карточках товара в интернет магазине. Т.е один верхний слайдер с большой картинкой, и снизу под ним маленький слайдер с маленькими картинками. Так вот, каталог свайпер это основной, а thumbs свайпер второй слайдер. Инициализируем два слайдера, первому слайдеру пишем консту thumbsSwiper(можно и поменять) а второму слайдеру пишем в настройках thumb, другими словами связываем их. и все, всё работает

/* <div class="wrapper">
<div class="swiper catalog__swiper catalog-swiper">
  <div class="swiper-wrapper catalog-swiper__wrapper">
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/01.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/02.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/03.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/04.jpg" alt="">
    </div>

  </div>
</div>
<div class="swiper__thumbs swiper thumbs-swiper">
  <div class="swiper-wrapper thumbs-swiper__wrapper">
    <div class="swiper-slide thumbs-swiper__slide">
      <img src="./img/01.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/02.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/03.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/04.jpg" alt="">
    </div>
  </div>
</div>
</div> */