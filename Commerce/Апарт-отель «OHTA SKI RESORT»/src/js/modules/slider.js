"use strict"

export function swiper() {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const swiper = new Swiper('.hero__swiper', {
      loop: true,
      // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
      // centeredSlides: true, // центрирует активный слайд по центру а не слева
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      // spaceBetween: 32,
      // slidesPerGroup: 1, 
      direction: 'horizontal',
      speed: 1000, // Автовоспроизведение
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // thumbs: { // Читаем ниже что даёт эта настройка
      //   swiper: thumbsSwiper,
      // },
      // scrollbar: {
      //   el: '.hero__scrollbar',
      //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
      // },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   },
      //   480: {
      //     slidesPerView: 3,
      //     spaceBetween: 30
      //   },
      //   640: {
      //     slidesPerView: 4,
      //     spaceBetween: 40
      //   }
      // }
    });
    const swiperItemOhta = new Swiper('.ohta-item-swiper', {
      // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
      // centeredSlides: true, // центрирует активный слайд по центру а не слева
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      // spaceBetween: 32,
      // slidesPerGroup: 1, 
      direction: 'horizontal',
      pagination: {
        el: '.ohta-item-swiper__pagination',
        clickable: true,
      },
      // thumbs: { // Читаем ниже что даёт эта настройка
      //   swiper: thumbsSwiper,
      // },
      // scrollbar: {
      //   el: '.hero__scrollbar',
      //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
      // },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   },
      //   480: {
      //     slidesPerView: 3,
      //     spaceBetween: 30
      //   },
      //   640: {
      //     slidesPerView: 4,
      //     spaceBetween: 40
      //   }
      // }
    });
    if (body.offsetWidth <= 670) {
      const swiperComplex = new Swiper('.complex-swiper', {
        // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
        // centeredSlides: true, // центрирует активный слайд по центру а не слева
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 1,
        // spaceBetween: 32,
        // slidesPerGroup: 1, 
        direction: 'horizontal',
        pagination: {
          el: '.complex-swiper__pagination',
          clickable: true,
          // dynamicBullets: true, // Если много кружков пагинации
          // dynamicMainBullets: 3, // Показывает количество отображаемых кружков пагинаии при включеном dynamicBullets
        },
        // thumbs: { // Читаем ниже что даёт эта настройка
        //   swiper: thumbsSwiper,
        // },
        // scrollbar: {
        //   el: '.hero__scrollbar',
        //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
        // },
        // breakpoints: {
        //   320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   },
        //   480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   },
        //   640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        //   }
        // }
      });
    }
    if (body.offsetWidth <= 1405) {
      const heroSwiperColumn = new Swiper('.hero-swiper-column', {
        // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
        // centeredSlides: true, // центрирует активный слайд по центру а не слева
        observer: true,
        observeParents: true,
        watchOverflow: true,
        // spaceBetween: 32,
        // slidesPerGroup: 1, 
        direction: 'horizontal',
        // speed: 1000, // Автовоспроизведение
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        // thumbs: { // Читаем ниже что даёт эта настройка
        //   swiper: thumbsSwiper,
        // },
        // scrollbar: {
        //   el: '.hero__scrollbar',
        //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
        // },
        breakpoints: {
          320: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 7,
          }
        }
      });
    }
    const swiperColumnOne = new Swiper('.column-swiper', {
      loop: true,
      // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
      // centeredSlides: true, // центрирует активный слайд по центру а не слева
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      // spaceBetween: 32,
      // slidesPerGroup: 1, 
      direction: 'vertical',
      speed: 500, // Автовоспроизведение
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // thumbs: { // Читаем ниже что даёт эта настройка
      //   swiper: thumbsSwiper,
      // },
      // scrollbar: {
      //   el: '.hero__scrollbar',
      //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
      // },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        1406: {
          direction: 'vertical',
        }
      }
    });
     const swiperReviews = new Swiper('.reviews-swiper', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      centeredSlides: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      pagination: {
        el: '.reviews-swiper__pagination',
        clickable: true,
      },
      // thumbs: { // Читаем ниже что даёт эта настройка
      //   swiper: thumbsSwiper,
      // },
      // scrollbar: {
      //   el: '.hero__scrollbar',
      //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
      // },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        601: {
          spaceBetween: 20
        },
        1441: {
          spaceBetween: 40
        }
      }
    });
    const swiperGallery = new Swiper('.gallery-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      direction: 'horizontal',
      grid: {
        rows: 2,
      },
      navigation: {
        nextEl: '.gallery-swiper__next',
        prevEl: '.gallery-swiper__prev',
      },
      pagination: {
        el: '.gallery-swiper__pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
          grid: {
            rows: 3,
          },
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1251: {
          slidesPerView: 5,
          spaceBetween: 5,
        }
      }
    });
    const swiperCottageThumb = new Swiper('.cottage-thumb-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 4,
      spaceBetween: 5,
      direction: 'horizontal',
      grid: {
        rows: 2,
      },
      navigation: {
        nextEl: '.cottage-thumb-swiper__next',
        prevEl: '.cottage-thumb-swiper__prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        401: {
          slidesPerView: 4,
        },
        531: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 3,
        },
        901: {
          slidesPerView: 5,
        },
        1151: {
          slidesPerView: 3,
        },
        1301: {
          slidesPerView: 4,
        },
        1441: {
          slidesPerView: 5,
        },
      }
    });
    const swiperCottage = new Swiper('.cottage-main-swiper', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 32,
      direction: 'horizontal',
      thumbs: {
        swiper: swiperCottageThumb,
      },
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