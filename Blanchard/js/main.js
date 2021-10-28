// Плавный переход по ссылкам
$(function(){
  $('a[href^="#"]').click(function(){
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);
  return false;
  });
  });
// Плавный переход по ссылкам

            // Header //

// Меню в headere
const params = {
  btnClassName: "header__menu-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// Меню в headere

// Burger menu в header

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".header__burger").addEventListener("click" , function () {
    document.querySelector(".header__burger").classList.toggle("header__burger-active")
    document.querySelector(".header-dropdown").classList.toggle("header__content-active")
    document.querySelector(".header__logo-adaptive").classList.toggle("header__logo-adaptive-active")
    document.querySelector(".header__logo-adaptive-320").classList.toggle("header__logo-adaptive-active")
    document.querySelector(".adaptive-search-click").classList.toggle("adaptive-search-active")
    document.querySelector(".adaptive-search-click-320").classList.toggle("adaptive-search-active")
    body.classList.toggle("scroll-hidden")
  })
});

// Burger menu в header

// Search в header
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".adaptive-search-click").addEventListener("click" , function () {
    document.querySelector(".adaptive-search-click").classList.toggle("adaptive-search-click-active")
    document.querySelector(".header__adaptive-search").classList.toggle("header__adaptive-search-active")
    document.querySelector(".header__logo-adaptive").classList.toggle("header__logo-adaptive-disabled")
    document.querySelector(".header__logo-adaptive-320").classList.toggle("header__logo-adaptive-320-disabled")
    document.querySelector(".header__burger").classList.toggle("header__burger-disabled")
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".adaptive-search-click-320").addEventListener("click" , function () {
    document.querySelector(".adaptive-search-click-320").classList.toggle("adaptive-search-click-320-active")
    document.querySelector(".header__search-320").classList.toggle("header__search-320-active")
    document.querySelector(".header__burger").classList.toggle("burger-active")
  })
});
// Search в header

            // Hero //

// Слайдер в hero
const swiper = new Swiper('.swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
      delay: 5000
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Слайдер в hero

            // Gallery //

// Popup в gallery
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".gallery-sliders-hover").forEach(function (gallerySlide) {
    gallerySlide.addEventListener("click", function (galleryPopup) {
        const gallery_popup = galleryPopup.currentTarget.dataset.gallery_popup
         document.querySelectorAll(".gallery-sliders-hover").forEach(function (galleryPopup) {
           galleryPopup.classList.remove("slide-popup-active")
           body.classList.add("scroll-hidden")
         })
        document.querySelector(`[data-target-popup="${gallery_popup}"]`).classList.add("slide-popup-active")
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".popup-close").forEach(function (popupClose) {
    popupClose.addEventListener("click", function () {
         document.querySelectorAll(".gallery-popup-slide").forEach(function (galleryPopup) {
           galleryPopup.classList.remove("slide-popup-active")
           body.classList.remove("scroll-hidden")
         })
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".closepopup").forEach(function (popupCloseBody) {
    popupCloseBody.addEventListener("click", function () {
         document.querySelectorAll(".gallery-popup-slide").forEach(function (galleryPopupClose) {
          galleryPopupClose.classList.remove("slide-popup-active")
          body.classList.remove("scroll-hidden")
         })
    })
  })
})

// Popup в gallery

// Селект в gallery
const element = document.querySelector('.gallery__dropdown-select');
const adaptive = document.querySelector('.gallery__dropdown-select-adaptive');

const choices = new Choices(element, {
  searchEnabled: false,
});

const choices2 = new Choices(adaptive, {
  searchEnabled: false,
  classNames: {
    containerOuter: 'choices1',
   },
});
// Селект в gallery

// Слайдер в gallery 1
const swiper3 = new Swiper(".gallery-slider", {
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 55,
      grid: {
        rows: 1
      },
    },
    592: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 36,
      grid: {
        rows: 2
      },
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 51,
      grid: {
        rows: 2
      },
    },
  },
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
    hideOnClick: false,
  },
});
// Слайдер в gallery 1

// Слайдер в gallery 2
const swiper4 = new Swiper(".gallery-slider-two", {
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 55,
      grid: {
        rows: 1
      },
    },
    592: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 36,
      grid: {
        rows: 2
      },
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 51,
      grid: {
        rows: 2
      },
    },
  },
  pagination: {
    el: '.swiper-pagination-gallery-two',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery-two',
    prevEl: '.swiper-button-prev-gallery-two',
  },
});
// Слайдер в gallery 2

// Слайдер в gallery 3
const swiper5 = new Swiper(".gallery-slider-three", {
  breakpoints: {
    319: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 55,
      grid: {
        rows: 1
      },
    },
    592: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 36,
      grid: {
        rows: 2
      },
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 51,
      grid: {
        rows: 2
      },
    },
  },
  pagination: {
    el: '.swiper-pagination-gallery-three',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery-three',
    prevEl: '.swiper-button-prev-gallery-three',
  },
});
// Слайдер в gallery 3

   // Catalog //

// Accordion в catalog
$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
  });
  $("#accordion-two").accordion({
    heightStyle: "content",
    collapsible: true,
  });
  $("#accordion-three").accordion({
    heightStyle: "content",
    collapsible: true,
  });
  $("#accordion-four").accordion({
    heightStyle: "content",
    collapsible: true,
  });
  $("#accordion-five").accordion({
    heightStyle: "content",
    collapsible: true,
  });
});
// Accordion в catalog

// Tabs в cataloge

  // Tabs связывает флажки и контент
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".catalog__tabs-btn").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll(".catalog__tab-content").forEach(function (tabContent) {
          tabContent.classList.remove("tab-content-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
      })
    })
  })
    // Tabs связывает флажки и контент
  
    // Tabs делают бордер при активе
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".catalog__list-item").forEach(function (catalogListItem) {
      catalogListItem.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll(".catalog__list-item").forEach(function (catalogListItem) {
          catalogListItem.classList.remove("catalog__list-item-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("catalog__list-item-active")
      })
    })
  })
    // Tabs делают бордер при активе
  
     // Tabs cписок художников из италии
  
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".italy-painter-link").forEach(function (italyPainterLink) {
        italyPainterLink.addEventListener("click", function (eventa) {
          const path1 = eventa.currentTarget.dataset.path1
  
          document.querySelectorAll(".italy-painter-link").forEach(function (italyPainterLink) {
            italyPainterLink.classList.remove("italy-painter-link-active")
          })
          document.querySelector(`[data-target1="${path1}"]`).classList.add("italy-painter-link-active")
        })
      })
    })
     // Tabs cписок художников из италии
  
     // Tabs контент для списка художников
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".italy-painter-link").forEach(function (nameItalyPainter) {
        nameItalyPainter.addEventListener("click", function (event) {
          const path = event.currentTarget.dataset.path
    
          document.querySelectorAll(".italy-description").forEach(function (italyDescription) {
            italyDescription.classList.remove("italy-description-active")
          })
          document.querySelector(`[data-target="${path}"]`).classList.add("italy-description-active")
        })
      })
    })
    // Tabs контент для списка художников
  
// Tabs в cataloge

            // Developments //

// Слайдер в developments
const swiper6 = new Swiper('.swiper-developments', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-developments',
    clickable: true,
  },
});
// Слайдер в developments

// При нажатии кнопки появляются другие события 

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn").forEach(function (developmentsBtn) {
    developmentsBtn.addEventListener("click", function () {
      document.querySelectorAll(".developments__item").forEach(function (developmentsItem) {
        developmentsItem.classList.add("visible")
      })
      document.querySelectorAll(".developments__btn").forEach(function (developmentsBtnDisabled) {
        developmentsBtnDisabled.classList.add("btn__disabled")
      })
      document.querySelectorAll(".developments__btn-adaptive").forEach(function (developmentsBtnADisabled) {
        developmentsBtnADisabled.classList.add("btn__disabled")
      })
    })
  })
})

// При нажатии кнопки появляются другие события 

            // Editions //

// Слайдер в editions
const swiper2 = new Swiper('.editions-slider', {
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    590: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1251: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
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
// Слайдер в editions

// Фильтр в editions 

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".editions__dropdown-select").forEach(function (editionsSelect) {
    editionsSelect.addEventListener("click", function () {
        document.querySelector(".editions__dropdown-select").classList.toggle("editions__dropdown-select-active")
        document.querySelector(".editions__dropdown-list").classList.toggle("editions__dropdown-list-active")
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".editions-category-adaptive").forEach(function (editionsCategoryAdap) {
    editionsCategoryAdap.addEventListener("click", function (editCategoryAdap) {
      const editions_categoryadap = editCategoryAdap.currentTarget.dataset.editions_categoryadap
      document.querySelector(".editions__dropdown-select").classList.remove("editions__dropdown-select-active")
      document.querySelector(".editions__dropdown-list").classList.remove("editions__dropdown-list-active")

      document.querySelectorAll(".editions-category-adap").forEach(function (editCategoryAdap) {
        editCategoryAdap.classList.remove("editions-category-adap-active")
      })
      document.querySelector(`[data-target-editionscategoryadap="${editions_categoryadap}"]`).classList.add("editions-category-adap-active")
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".editions-category-adaptive").forEach(function (editionsCategoryAdaptive) {
    editionsCategoryAdaptive.addEventListener("click", function (editCategoryAdaptiv) {
      const editions_categorylist = editCategoryAdaptiv.currentTarget.dataset.editions_categorylist
      document.querySelectorAll(".editions__list-adaptive").forEach(function (editCategoryAdap) {
        editCategoryAdap.classList.remove("editions__list-adaptive-active")
      })
      document.querySelector(`[data-target-editionscategorylist="${editions_categorylist}"]`).classList.add("editions__list-adaptive-active")
    })
  })
})

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".editions-active-close").forEach(function (editionsCategoryClose) {
    editionsCategoryClose.addEventListener("click", function () {
      document.querySelectorAll(".editions-category-adap").forEach(function (editCategoryAdapClose) {
        editCategoryAdapClose.classList.remove("editions-category-adap-active")
      })
      document.querySelectorAll(".editions__list-adaptive").forEach(function (editCategoryAdapCloseList) {
        editCategoryAdapCloseList.classList.remove("editions__list-adaptive-active")
      })
    })
  })
})

// Фильтр в editions

            // Projects //

// Слайдер в projects
const swiper1 = new Swiper('.projects-slider', {
  breakpoints: {
    250: {
      slidesPerView: 1,
      spaceBetween: 50,
      },
    592: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      },
    1251: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 45,
    },
    1431: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: '.swiper-pagination-projects',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-projects-next',
    prevEl: '.swiper-button-projects-prev',
  },
});
// Слайдер в projects

// Tooltip в projects
const project_btn = document.querySelectorAll(".projects__btn");

tippy(project_btn, {
  placement: 'top',
  allowHTML: true,
  role: 'tooltip',
  trigger: 'mouseenter focus click',
  hideOnClick: true,
  theme: "colorToolp",
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btnClickable").addEventListener("click" , function () {
    document.querySelector(".project-svg").classList.toggle("project-svg-disabled")
    document.querySelector(".project-svg-active").classList.toggle("project-svg-active-visible")
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btnTWoClickable").addEventListener("click" , function () {
    document.querySelector(".project-svgTwo").classList.toggle("project-svg-disabled")
    document.querySelector(".project-svgTwo-active").classList.toggle("project-svg-active-visible")
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btnThreeClickable").addEventListener("click" , function () {
    document.querySelector(".project-svgThree").classList.toggle("project-svg-disabled")
    document.querySelector(".project-svgThree-active").classList.toggle("project-svg-active-visible")
  })
});
// Tooltip в projects

            // Contacts //

// Валидация и маскирование формы

// Маскирование формы
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);
// Маскирование формы

// Валидация формы
new JustValidate('.contacts__form', {
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
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Введите ваше имя',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    tel: 'Введите ваш телефон'
  },
  submitHandler: function(form, values, ajax) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    }

    xhr.open("POST", "mail.php", true);
    xhr.send(formData)

    form.reset();
  }
});
// Валидация формы

// Валидация и маскирование формы

// Maps в contacts
let flag = 0;

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  let mapOffset = this.document.querySelector("#map").offsetTop;
  if (scrollY >= mapOffset - 1000 && flag == 0) {
    ymaps.ready(init);

      function init() {

      var myMap = new ymaps.Map("map", {
        center: [55.759861, 37.610557],
        zoom: 14,
      });

      var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/marker-map.svg',
        iconImageSize: [20, 20],
      });

      myMap.geoObjects.add(myPlacemark);
    }
    flag = 1;
  }

})
// Maps в contacts
