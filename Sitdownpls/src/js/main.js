// High rating кнопка
let hifgRatingItems = gsap.timeline({ paused: true })

hifgRatingItems
  .to(".hidden", {duration: .3, opacity: 1, visibility: "visible", display: "block"})

document.querySelector(".button-active").addEventListener("click", function() {
  document.querySelector(".button-close").classList.add("vis")
  document.querySelector(".button-active").classList.add("hid")
  hifgRatingItems.timeScale(1).play()
})
document.querySelector(".button-close").addEventListener("click", function() {
  document.querySelector(".button-active").classList.remove("hid")
  document.querySelector(".button-close").classList.remove("vis")
  hifgRatingItems.timeScale(2).reverse()
})
// Swiper в hero
const heroSwiper = new Swiper('.hero__swiper', {
  loop: true,
  lazy: {
    loadPrevNext: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="24" height="24" viewBox="0 0 24 24">'+
        '<circle class="path" cx="4" cy="12" r="10" transform="rotate(-90 8 8)"'+
        'stroke-width="2.5px" stroke="#ff862f" fill="transparent"></circle>'+
        '</svg></span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Swiper в hero
// Swiper в special-order
const specialOrderSwiper = new Swiper('.special-order__swiper', {
  slidesPerGroup: 3,
  slidesPerView: "auto",
  breakpoints: {
    210: {
      slidesPerGroup: 1,
    },
    737: {
      slidesPerGroup: 2,
    },
    976: {
      slidesPerGroup: 3,
    }
  },
  lazy: {
    loadPrevNext: true,
  },
  navigation: {
    nextEl: '.special-order-button-next',
    prevEl: '.special-order-button-prev',
  },
});
// Swiper в special-order
// Useful swiper
const usefulSwiper = new Swiper('.useful__swiper', {
  slidesPerGroup: 1,
  slidesPerView: "auto",
  lazy: {
    loadPrevNext: true,
  },
  navigation: {
    nextEl: '.useful-button-next',
    prevEl: '.useful-button-prev',
  },
});
// Useful swiper
// Tooltip в main-form
tippy('.main-form__toolp', {
  placement: 'top',
  allowHTML: true,
  role: 'tooltip',
  trigger: 'mouseenter focus click',
  hideOnClick: true,
  theme: "colorToolp",
});
// Tooltip в main-form
// Validation form
new JustValidate('.main-form__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '[а-яА-Я\d]',
     },
    },
    tel: {
      required: true,
    },
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Введите ваше имя',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    email: 'Недопустимый формат',
    tel: 'Введите ваш телефон'
  },

  submitHandler: function(form, values, ajax) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено")
        }
      }
    }

    xhr.open("POST", "./resources/mail.php", true);
    xhr.send(formData)

    form.reset();
  }
});
// Validation form

