const headerMenuItem = () => {
  const elements = document.querySelectorAll('.header__menu-item');
  elements.forEach(el => {
    const elements = document.querySelectorAll('.header__menu-item');
    const choices = new Choices(el, {
      searchEnabled: false,
    })
  })

};

headerMenuItem(); // Кастомные селекты в headere

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper1 = new Swiper('.projects-slider', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination-projects',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-projects-next',
    prevEl: '.swiper-button-projects-prev',
  },
});

const swiper2 = new Swiper('.editions-slider', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination-editions',
    clickable: true,
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next-editions',
    prevEl: '.swiper-button-prev-editions',
  },
});

const swiper3 = new Swiper(".gallery-slider", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 55,
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },
});

const swiper4 = new Swiper(".gallery-slider-two", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 55,
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },
});

const swiper5 = new Swiper(".gallery-slider-three", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 55,
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },
});
// Swiper 


/// Gallery select filter
function gallerySelect() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("gallerysel").classList.toggle("activ-gallery");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
/// Gallery select filter

// Accordion
$(function () {
  $("#accordion").accordion({
    heightStyle: "content"
  });
  $("#accordion-two").accordion({
    heightStyle: "content"
  });
  $("#accordion-three").accordion({
    heightStyle: "content"
  });
  $("#accordion-four").accordion({
    heightStyle: "content"
  });
  $("#accordion-five").accordion({
    heightStyle: "content"
  });
});
// Accordion

// Maps//
ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.759861, 37.610557],
    zoom: 16,
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/marker-map.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
}
// Maps

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#developments__btn').addEventListener('click', function () {
    document.querySelector('#developments__item').classList.toggle('visible')
    document.querySelector('#developments__item-2').classList.toggle('visible')
    document.querySelector('#developments__item-3').classList.toggle('visible')
    document.querySelector('#developments__item-4').classList.toggle('visible')
    document.querySelector('#developments__item-5').classList.toggle('visible')
    document.querySelector('#developments__btn').classList.toggle('btn__disabled')
  })
})



window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#france-icon-img').addEventListener('click', function () {
    document.querySelector('.catalog__icon-france').classList.add('catalog__icon-active')
    document.querySelector('.catalog__icon-germany').classList.remove('catalog__icon-active')
    document.querySelector('.catalog__icon-italy').classList.remove('catalog__icon-active')
    document.querySelector('.catalog__icon-russia').classList.remove('catalog__icon-active')
    document.querySelector('.catalog__icon-belgium').classList.remove('catalog__icon-active')

    document.querySelector('#germany-icon-img').addEventListener('click', function () {
      document.querySelector('.catalog__icon-germany').classList.add('catalog__icon-active')
      document.querySelector('.catalog__icon-france').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-italy').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-russia').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-belgium').classList.remove('catalog__icon-active')
    })
    document.querySelector('#italy-icon-img').addEventListener('click', function () {
      document.querySelector('.catalog__icon-italy').classList.add('catalog__icon-active')
      document.querySelector('.catalog__icon-france').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-germany').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-russia').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-belgium').classList.remove('catalog__icon-active')
    })
    document.querySelector('#russia-icon-img').addEventListener('click', function () {
      document.querySelector('.catalog__icon-russia').classList.add('catalog__icon-active')
      document.querySelector('.catalog__icon-france').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-italy').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-germany').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-belgium').classList.remove('catalog__icon-active')
    })
    document.querySelector('#belgium-icon-img').addEventListener('click', function () {
      document.querySelector('.catalog__icon-belgium').classList.add('catalog__icon-active')
      document.querySelector('.catalog__icon-france').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-italy').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-russia').classList.remove('catalog__icon-active')
      document.querySelector('.catalog__icon-germany').classList.remove('catalog__icon-active')
    })
  });
});


// Валидация и маскирование формы //
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true,
    },
  },
});


// Tabs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
    })

  })
})
// Tabs