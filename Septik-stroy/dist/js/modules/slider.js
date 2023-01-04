const productsSliderInit = document.querySelector(".products-slider");

if (productsSliderInit) {
  if (document.body.clientWidth < 992) {
    const productsSlider = new Swiper('.products-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      pagination: {
        el: '.products-slider-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        601: {
          spaceBetween: 25
        },
      },
    });
  }
}

const productInfoInit = document.querySelector(".product-info");

if (productInfoInit) {
  const productInfoSliderThumb = new Swiper('.product-info-slider-thumb', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    direction: 'vertical',
    breakpoints: {
      320: {
        spaceBetween: 5,
      },
      601: {
        spaceBetween: 7,
      },
    },
  });
  const productInfoSlider = new Swiper('.product-info-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    thumbs: {
      swiper: productInfoSliderThumb,
    },
    navigation: {
      nextEl: '.product-info-slider-next',
      prevEl: '.product-info-slider-prev',
    },
  });
}

const reviewsSliderInit = document.querySelector(".reviews-slider");
if(reviewsSliderInit) {
  if (document.body.clientWidth < 992) {
    const reviewsSlider = new Swiper('.reviews-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      pagination: {
        el: '.reviews-slider-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        601: {
          spaceBetween: 24
        },
      },
    });
  }
}
