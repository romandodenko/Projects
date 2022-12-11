const heroSwiperInit = document.querySelector(".hero-swiper");
const mnenieSwiperInit = document.querySelector(".mnenie-swiper");
if (heroSwiperInit) {
  const swiperHero = new Swiper('.hero-swiper', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    direction: 'horizontal',
    navigation: {
      nextEl: '.hero-swiper-button-next',
      prevEl: '.hero-swiper-button-prev',
    },
  });
}
if (mnenieSwiperInit) {
  const swiperMnenie = new Swiper('.mnenie-swiper', {
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    speed: 500, // Автовоспроизведение
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    pagination: {
      el: '.mnenie-swiper-pagination',
      clickable: true,
    },
  });
}