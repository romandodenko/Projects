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
    document.querySelector(".header__content").classList.toggle("header__content-active")
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
    // document.querySelector(".header__content").classList.toggle("header__content-active")header__content-bottom
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".adaptive-search-click-320").addEventListener("click" , function () {
    document.querySelector(".adaptive-search-click-320").classList.toggle("adaptive-search-click-320-active")
    document.querySelector(".header__search-320").classList.toggle("header__search-320-active")
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

function galleryOneSlide1() {
  document.querySelector(".gallery-popup-slide1").classList.add("gallery-popup-slide-active")
}

 function galleryOneSlide2() {
  document.querySelector(".gallery-popup-slide2").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide3() {
  document.querySelector(".gallery-popup-slide3").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide4() {
  document.querySelector(".gallery-popup-slide4").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide5() {
  document.querySelector(".gallery-popup-slide5").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide6() {
  document.querySelector(".gallery-popup-slide6").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide7() {
  document.querySelector(".gallery-popup-slide7").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide8() {
  document.querySelector(".gallery-popup-slide8").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide9() {
  document.querySelector(".gallery-popup-slide9").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide10() {
  document.querySelector(".gallery-popup-slide10").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide11() {
  document.querySelector(".gallery-popup-slide11").classList.add("gallery-popup-slide-active")
}

function galleryOneSlide12() {
  document.querySelector(".gallery-popup-slide12").classList.add("gallery-popup-slide-active")
}

function removeModal1() {
  document.querySelector(".gallery-popup-slide1").classList.remove("gallery-popup-slide-active")
}

function removeModal2() {
  document.querySelector(".gallery-popup-slide2").classList.remove("gallery-popup-slide-active")
}

function removeModal3() {
  document.querySelector(".gallery-popup-slide3").classList.remove("gallery-popup-slide-active")
}

function removeModal4() {
  document.querySelector(".gallery-popup-slide4").classList.remove("gallery-popup-slide-active")
}

function removeModal5() {
  document.querySelector(".gallery-popup-slide5").classList.remove("gallery-popup-slide-active")
}

function removeModal6() {
  document.querySelector(".gallery-popup-slide6").classList.remove("gallery-popup-slide-active")
}

function removeModal7() {
  document.querySelector(".gallery-popup-slide7").classList.remove("gallery-popup-slide-active")
}

function removeModal8() {
  document.querySelector(".gallery-popup-slide8").classList.remove("gallery-popup-slide-active")
}

function removeModal9() {
  document.querySelector(".gallery-popup-slide9").classList.remove("gallery-popup-slide-active")
}

function removeModal10() {
  document.querySelector(".gallery-popup-slide10").classList.remove("gallery-popup-slide-active")
}

function removeModal11() {
  document.querySelector(".gallery-popup-slide11").classList.remove("gallery-popup-slide-active")
}

function removeModal12() {
  document.querySelector(".gallery-popup-slide12").classList.remove("gallery-popup-slide-active")
}

function galleryTwoSlide1() {
  document.querySelector(".gallery-popup-slidetwo1").classList.add("gallery-popup-slide-active")
}

function galleryTwoSlide2() {
  document.querySelector(".gallery-popup-slidetwo2").classList.add("gallery-popup-slide-active")
}

function galleryTwoSlide3() {
  document.querySelector(".gallery-popup-slidetwo3").classList.add("gallery-popup-slide-active")
}

function galleryTwoSlide4() {
  document.querySelector(".gallery-popup-slidetwo4").classList.add("gallery-popup-slide-active")
}

function galleryTwoSlide5() {
  document.querySelector(".gallery-popup-slidetwo5").classList.add("gallery-popup-slide-active")
}

function galleryTwoSlide6() {
  document.querySelector(".gallery-popup-slidetwo6").classList.add("gallery-popup-slide-active")
}

function removeModalTwo1() {
  document.querySelector(".gallery-popup-slidetwo1").classList.remove("gallery-popup-slide-active")
}

function removeModalTwo2() {
  document.querySelector(".gallery-popup-slidetwo2").classList.remove("gallery-popup-slide-active")
}

function removeModalTwo3() {
  document.querySelector(".gallery-popup-slidetwo3").classList.remove("gallery-popup-slide-active")
}

function removeModalTwo4() {
  document.querySelector(".gallery-popup-slidetwo4").classList.remove("gallery-popup-slide-active")
}

function removeModalTwo5() {
  document.querySelector(".gallery-popup-slidetwo5").classList.remove("gallery-popup-slide-active")
}

function removeModalTwo6() {
  document.querySelector(".gallery-popup-slidetwo6").classList.remove("gallery-popup-slide-active")
}

function galleryThreeSlide1() {
  document.querySelector(".gallery-popup-slidethree1").classList.add("gallery-popup-slide-active")
}

function galleryThreeSlide2() {
  document.querySelector(".gallery-popup-slidethree2").classList.add("gallery-popup-slide-active")
}

function galleryThreeSlide3() {
  document.querySelector(".gallery-popup-slidethree3").classList.add("gallery-popup-slide-active")
}

function galleryThreeSlide4() {
  document.querySelector(".gallery-popup-slidethree4").classList.add("gallery-popup-slide-active")
}

function galleryThreeSlide5() {
  document.querySelector(".gallery-popup-slidethree5").classList.add("gallery-popup-slide-active")
}

function galleryThreeSlide6() {
  document.querySelector(".gallery-popup-slidethree6").classList.add("gallery-popup-slide-active")
}

function removeModalThree1() {
  document.querySelector(".gallery-popup-slidethree1").classList.remove("gallery-popup-slide-active")
}

function removeModalThree2() {
  document.querySelector(".gallery-popup-slidethree2").classList.remove("gallery-popup-slide-active")
}

function removeModalThree3() {
  document.querySelector(".gallery-popup-slidethree3").classList.remove("gallery-popup-slide-active")
}

function removeModalThree4() {
  document.querySelector(".gallery-popup-slidethree4").classList.remove("gallery-popup-slide-active")
}

function removeModalThree5() {
  document.querySelector(".gallery-popup-slidethree5").classList.remove("gallery-popup-slide-active")
}

function removeModalThree6() {
  document.querySelector(".gallery-popup-slidethree6").classList.remove("gallery-popup-slide-active")
}

// Селект в gallery
const element = document.querySelector('.gallery__dropdown-select');
const choices = new Choices(element, {
  searchEnabled: false,
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
      spaceBetween: 25,
      grid: {
        rows: 2
      },
    },
    1323: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 45,
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
      spaceBetween: 25,
      grid: {
        rows: 2
      },
    },
    1320: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 55,
      grid: {
        rows: 2
      },
    },
  },
  pagination: {
    el: '.swiper-pagination-gallery-two',
    clickable: true,
    // type: 'fraction',
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
      spaceBetween: 25,
      grid: {
        rows: 2
      },
    },
    1320: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 55,
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
  
        document.querySelectorAll(".tab-content").forEach(function (tabContent) {
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
  slidesPerView : 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-developments',
    clickable: true,
  },
});
// Слайдер в developments

// При нажатии кнопки появляются другие события 

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
  document.querySelector('#developments__btn-adaptive').addEventListener('click', function () {
    document.querySelector('#developments__item-adaptive').classList.toggle('visible')
    document.querySelector('#developments__item-2-adaptive').classList.toggle('visible')
    document.querySelector('#developments__item-3-adaptive').classList.toggle('visible')
    document.querySelector('#developments__item-4-adaptive').classList.toggle('visible')
    document.querySelector('#developments__item-5-adaptive').classList.toggle('visible')
    document.querySelector('#developments__btn-adaptive').classList.toggle('btn__disabled')
  })
})

// При нажатии кнопки появляются другие события 

            // Editions //

// Слайдер в editions
const swiper2 = new Swiper('.editions-slider', {
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
    590: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 49,
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

// Editions input

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".bestsellers").addEventListener("click", function() {
    document.querySelector(".bestsellers").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".art").addEventListener("click", function() {
    document.querySelector(".art").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".architecture").addEventListener("click", function() {
    document.querySelector(".architecture").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".design").addEventListener("click", function() {
    document.querySelector(".design").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".fashion").addEventListener("click", function() {
    document.querySelector(".fashion").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".child").addEventListener("click", function() {
    document.querySelector(".child").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".imaginativeliterature").addEventListener("click", function() {
    document.querySelector(".imaginativeliterature").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".journalism").addEventListener("click", function() {
    document.querySelector(".journalism").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".guidebook").addEventListener("click", function() {
    document.querySelector(".guidebook").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".philosophy").addEventListener("click", function() {
    document.querySelector(".philosophy").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".educationalliterature").addEventListener("click", function() {
    document.querySelector(".educationalliterature").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".newspapers").addEventListener("click", function() {
    document.querySelector(".newspapers").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".bestsellers-adaptive").addEventListener("click", function() {
    document.querySelector(".bestsellers-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".art-adaptive").addEventListener("click", function() {
    document.querySelector(".art-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".architecture-adaptive").addEventListener("click", function() {
    document.querySelector(".architecture-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".design-adaptive").addEventListener("click", function() {
    document.querySelector(".design-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".fashion-adaptive").addEventListener("click", function() {
    document.querySelector(".fashion-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".child-adaptive").addEventListener("click", function() {
    document.querySelector(".child-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".imaginativeliterature-adaptive").addEventListener("click", function() {
    document.querySelector(".imaginativeliterature-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".journalism-adaptive").addEventListener("click", function() {
    document.querySelector(".journalism-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".guidebook-adaptive").addEventListener("click", function() {
    document.querySelector(".guidebook-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".philosophy-adaptive").addEventListener("click", function() {
    document.querySelector(".philosophy-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".educationalliterature-adaptive").addEventListener("click", function() {
    document.querySelector(".educationalliterature-adaptive").classList.toggle("editions-category-active")
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".newspapers-adaptive").addEventListener("click", function() {
    document.querySelector(".newspapers-adaptive").classList.toggle("editions-category-active")
  })
})

// Editions input

// Фильтр в editions 

function editionsSelect() {
  document.getElementById("editions-dropdown").classList.toggle("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.toggle("editions__dropdown-select-active");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("editions-dropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }art
}

function bestsellers() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-bestsellers").classList.add("editions-category-bestsellers-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function art() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-art").classList.add("editions-category-art-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function architecture() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-architecture").classList.add("editions-category-architecture-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function design() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-design").classList.add("editions-category-design-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.add("editions__list-design-active")
}

function fashion() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-fashion").classList.add("editions-category-fashion-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function child() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-child").classList.add("editions-category-child-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function imaginativeliterature() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.add("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function journalism() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-journalism").classList.add("editions-category-journalism-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function travelguides() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-travelguides").classList.add("editions-category-travelguides-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function philosophy() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-philosophy").classList.add("editions-category-philosophy-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function educationalliterature() {
  document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-educationalliterature").classList.add("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function newspapers() {
 document.getElementById("editions-dropdown").classList.remove("editions__dropdown-list-active");
  document.getElementById("editionssel").classList.remove("editions__dropdown-select-active");
  document.querySelector(".editions-category-newspapers").classList.add("editions-category-newspapers-active");
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active");
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active");
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active");
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active");
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active");
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active");
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active");
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active");
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active");
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active");
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active");
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".editions__dropdown-list").forEach(function (editionsList) {
    editionsList.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(".editions-category").forEach(function (editionsCategory) {
        editionsCategory.classList.remove("editions-category-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("editions-category-active")
    })
  })
})

function bestsellersActiveClose() {
  document.querySelector(".editions-category-bestsellers").classList.remove("editions-category-bestsellers-active")
}

function artActiveClose() {
  document.querySelector(".editions-category-art").classList.remove("editions-category-art-active")
}

function architectureActiveClose() {
  document.querySelector(".editions-category-architecture").classList.remove("editions-category-architecture-active")
}

function designActiveClose() {
  document.querySelector(".editions-category-design").classList.remove("editions-category-design-active")
  document.querySelector(".editions__list-design").classList.remove("editions__list-design-active")
}

function fashionActiveClose() {
  document.querySelector(".editions-category-fashion").classList.remove("editions-category-fashion-active")
}

function childActiveClose() {
  document.querySelector(".editions-category-child").classList.remove("editions-category-child-active")
}

function imaginativeliteratureActiveClose() {
  document.querySelector(".editions-category-imaginativeliterature").classList.remove("editions-category-imaginativeliterature-active")
}

function journalismActiveClose() {
  document.querySelector(".editions-category-journalism").classList.remove("editions-category-journalism-active")
}

function travelguidesActiveClose() {
  document.querySelector(".editions-category-travelguides").classList.remove("editions-category-travelguides-active")
}

function philosophyActiveClose() {
  document.querySelector(".editions-category-philosophy").classList.remove("editions-category-philosophy-active")
}

function educationalliteratureActiveClose() {
  document.querySelector(".editions-category-educationalliterature").classList.remove("editions-category-educationalliterature-active")
}

function newspapersActiveClose() {
  document.querySelector(".editions-category-newspapers").classList.remove("editions-category-newspapers-active")
}

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
      spaceBetween: 35,
      },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    1324: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 45,
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
const buttonOne = document.querySelector('#buttonOne');
const tooltipOne = document.querySelector('#tooltipOne');
const buttonTwo = document.querySelector('#buttonTwo');
const tooltipTwo = document.querySelector('#tooltipTwo');
const buttonThree = document.querySelector('#buttonThree');
const tooltipThree = document.querySelector('#tooltipThree');

Popper.createPopper(buttonOne, tooltipOne, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
});
Popper.createPopper(buttonTwo, tooltipTwo, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
});
Popper.createPopper(buttonThree, tooltipThree, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#buttonOne").addEventListener("click" , function () {
    document.querySelector(".project-svg").classList.toggle("project-svg-disabled")
    document.querySelector(".project-svg-active").classList.toggle("project-svg-active-visible")
    document.querySelector("#tooltipOne").classList.toggle("tooltip-active")
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#buttonTwo").addEventListener("click" , function () {
    document.querySelector(".project-svgTwo").classList.toggle("project-svg-disabled")
    document.querySelector(".project-svgTwo-active").classList.toggle("project-svg-active-visible")
    document.querySelector("#tooltipTwo").classList.toggle("tooltip-active")
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#buttonThree").addEventListener("click" , function () {
    document.querySelector(".project-svgThree").classList.toggle("project-svg-disabled")
    document.querySelector(".project-svgThree-active").classList.toggle("project-svg-active-visible")
    document.querySelector("#tooltipThree").classList.toggle("tooltip-active")
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
// Maps в contacts
