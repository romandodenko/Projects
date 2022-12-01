// Слайдер
const heroSwiperInit = document.querySelector(".hero-swiper");
if (heroSwiperInit) {
  const heroSwiper = new Swiper('.hero-swiper', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    effect: "fade",
    speed: 500, // Автовоспроизведение
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
      stopOnLastSlide: true,
      waitForTransition: false,
    },
    pagination: {
      el: '.hero-pagination',
    },
    navigation: {
      nextEl: '.hero-button-next',
      prevEl: '.hero-button-prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        pagination: {
          clickable: true,
        }
      },
      992: {
        allowTouchMove: false,
        pagination: {
          clickable: false,
        }
      }
    },
    on: {
      slideNextTransitionStart() {
        const timer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
        stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
        </svg>`;
        if (document.querySelector(".timer")) {
          document.querySelector(".timer").remove()
        }
        document.querySelector(".timer-active").insertAdjacentHTML("beforeend", timer)

        const swiperSlideActive = document.querySelector(".hero-swiper__slide.swiper-slide-active");
        if (!swiperSlideActive.nextElementSibling) {
          document.querySelector(".hero-button-next").classList.add("timer-disabled")
        }
      },
      slidePrevTransitionStart() {
        const timer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
        stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
        </svg>`;
        if (document.querySelector(".timer")) {
          document.querySelector(".timer").remove()
        }
        document.querySelector(".timer-active").insertAdjacentHTML("beforeend", timer)
        const swiperSlideActive = document.querySelector(".hero-swiper__slide.swiper-slide-active");
        if (swiperSlideActive.nextElementSibling) {
          document.querySelector(".hero-button-next").classList.remove("timer-disabled")
        }
      },
      afterInit() {
        const timer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
        stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
        </svg>`
        document.querySelector(".timer-active").insertAdjacentHTML("beforeend", timer)
      },
    }
  });
}

// Слайдер