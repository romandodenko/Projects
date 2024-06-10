document.documentElement.classList.add("loaded"); // когда страница загрузилась

window.addEventListener("DOMContentLoaded", windowLoad); // для анимации для первых экранов, чтобы ничего не дергалось

function windowLoad() {}; // для анимации для первых экранов, чтобы ничего не дергалось


// Открытие и закрытие бургера

const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".header__link_menu")) { // Открытие и закрытие бургера
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".wrapper-states__close")) {
    wrapperStates.classList.remove("active");
    wrapperStates.querySelectorAll("wrapper-states__item").forEach(function (e) {
      e.classList.remove("active")
    })
  }
  if (elementInteractive.closest(".wrapper-states__exit")) {
    wrapperStates.classList.remove("active");
    wrapperStates.querySelectorAll("wrapper-states__item").forEach(function (e) {
      e.classList.remove("active")
    })
  }
  if (elementInteractive.closest(".tabs-btn")) {
    const path = elementInteractive.closest(".tabs-btn").dataset.path;

    document.querySelectorAll(".tabs-btn").forEach(function (e) {
      e.classList.remove("active");
    })

    elementInteractive.closest(".tabs-btn").classList.add("active");

    document.querySelectorAll(".tabs-content").forEach(function (tabContent) {
      tabContent.classList.remove("active");
    })

    document.querySelector(`[data-target="${path}"]`).classList.add("active");
  } 
  if (elementInteractive.closest(".faq__button")) {

    const casinoItem = elementInteractive.closest(".faq__item");

    const casinoItemPays = casinoItem.querySelector(".faq__bottom");

    if (!casinoItem.classList.contains("active")) {

      document.querySelectorAll(".faq__item").forEach(function (e) {
        e.classList.remove("active");
        gsap.to(e.querySelector(".faq__bottom"), {
          height: 0,
        });
      })

      casinoItem.classList.add("active");

      gsap.to(casinoItemPays, {
        height: 'auto',
      });

    } else if (casinoItem.classList.contains("active")) {

      casinoItem.classList.remove("active");

      gsap.to(casinoItemPays, {
        height: 0,
      });
    }

  }
  if (elementInteractive.closest(".specialists__link")) {
    const dataValue = elementInteractive.closest(".specialists__link").dataset.name;

    document.querySelector(".specialists-name").value = dataValue;
  } 
})

// Плагин загрузки изображений и видео

const rdUpload = document.querySelectorAll(".rd-upload");

const body = document.body;

if (rdUpload) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  const callback = function (entries, observer) {

    entries.forEach(entry => {
      const elementEntry = entry.target;
      if (entry.isIntersecting) {

        if (!elementEntry.classList.contains("rd-load")) {
          elementEntry.classList.add("rd-load");

          let rdUploadBackgroundImage = elementEntry.querySelectorAll(".rd-background");

          let rdUploadImage = elementEntry.querySelectorAll("img");

          let rdUploadVideo = elementEntry.querySelectorAll("video");

          let rdUploadPicture = elementEntry.querySelectorAll("picture");

          if (elementEntry.classList.contains("rd-background")) {

            let elementEntryBackgroundImageDataImage = elementEntry.dataset.rdImage;

            elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataImage})`;
          }

          if (rdUploadBackgroundImage) {
            rdUploadBackgroundImage.forEach(function (rdUploadBackgroundImage) {

              let rdUploadBackgroundImageDataImage = rdUploadBackgroundImage.dataset.rdImage;

              rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataImage})`;

            })
          }

          if (rdUploadImage) {
            rdUploadImage.forEach(function (rdUploadImage) {

              if (!rdUploadImage.closest("picture")) {
                let rdUploadImageDataImage = rdUploadImage.dataset.rdImage;

                rdUploadImage.setAttribute("src", `${rdUploadImageDataImage}`);
              }

            })
          }

          if (rdUploadPicture) {
            rdUploadPicture.forEach(function (rdUploadPicture) {

              let rdUploadPictureSource = rdUploadPicture.querySelectorAll("source");

              rdUploadPictureSource.forEach(function (rdUploadPictureSource) {

                let rdUploadPictureSourceImage = rdUploadPictureSource.dataset.rdImage;

                rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceImage}`);

              })

            })
          }

          if (rdUploadVideo) {
            rdUploadVideo.forEach(function (rdUploadVideo) {

              let rdUploadVideoDataVideo = rdUploadVideo.dataset.rdVideo;
              let rdUploadVideoDataImage = rdUploadVideo.dataset.rdImage;

              rdUploadVideo.setAttribute("src", `${rdUploadVideoDataVideo}`);

              rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataImage}`);

            })
          }
        }

      }

    })

  }

  const observer = new IntersectionObserver(callback, options);

  rdUpload.forEach(i => {
    observer.observe(i);
  })
}

const headerLinkMenu = document.querySelector(".header__link_menu");

const headerLinkBottom = document.querySelector(".header__link_bottom");

const headerContainerBottom = document.querySelector(".header__container_bottom");

if (document.body.clientWidth < 992) {
  headerContainerBottom.append(headerLinkBottom);
  menu.append(headerLinkMenu);
}

const mapClass = document.querySelector(".contacts__map")

if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [44.745914600836116, 37.72873256812283],
        zoom: 18,
      },
    );

    var myPlacemark = new ymaps.Placemark([44.745914600836116, 37.72873256812283], {}, { // Если нужно чтобы точка была слегка смещена 
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark);
  }
}

const recordingCheckbox = document.querySelector("#recording_checkbox");

const recordingFormButton = document.querySelector(".recording-form__button");

if (recordingCheckbox) {
  recordingCheckbox.addEventListener("change", function () {
    if (recordingCheckbox.checked) {
      if (recordingFormButton) {
        recordingFormButton.classList.remove("disabled")
      }
    } else {
      if (recordingFormButton) {
        recordingFormButton.classList.add("disabled")
      }
    }
  })
}

const recordingForm = document.querySelector(".recording-form");

const wrapperStates = document.querySelector(".wrapper-states");

const statusOkay = document.querySelector(".status-okay");

const statusError = document.querySelector(".status-error");

const statusSend = document.querySelector(".status-send");

if (recordingForm) {
  let recordingFormTel = recordingForm.querySelector("input[type='tel']");
  let recordingFormTelInputMask = new Inputmask("+7(999)999-99-99");
  recordingFormTelInputMask.mask(recordingFormTel);

  const validator = new JustValidate(recordingForm, {});

  validator
    .addField('#recording_name', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    }])
    .addField('#recording_phone', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите ваш телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = recordingFormTel.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
      wrapperStates.classList.add("active");

      statusOkay.classList.remove("active");

      statusError.classList.remove("active");

      statusSend.classList.add("active");
 
      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            statusSend.classList.remove("active");

            statusOkay.classList.add("active");

            recordingFormButton.classList.add("disabled");
          } else {

            statusSend.classList.remove("active");

            statusError.classList.add("active");

            recordingFormButton.classList.add("disabled");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

const specialistsSlider = document.querySelector(".specialists-slider");

if (specialistsSlider) {
  const specialistsSwiper = new Swiper(specialistsSlider, {
    observer: true,
    observeParents: true,
    watchOverflow: true, 
    mousewheel: {
      sensitivity: 1,
    },
    pagination: {
      el: '.specialists-slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.specialists-slider-next',
      prevEl: '.specialists-slider-prev',
    },
    breakpoints: { 
      320: {
        spaceBetween: 24,
        slidesPerView: 'auto',
        direction: 'horizontal',
      },
      1221: {
        spaceBetween: 32,
        direction: 'vertical',
        slidesPerView: 4,
      }
    },
    on: {
      slideChange() {
        interactivePagination();
      },
    }
  });
}

function interactivePagination() {
  let elpag = document.querySelector(".specialists-slider-pagination .swiper-pagination-bullet-active");

  const reviewsPagAll = document.querySelectorAll(".specialists-slider-pagination .swiper-pagination-bullet");

  let elpagNext = elpag.nextElementSibling;

  let elpagPrev = elpag.previousElementSibling;

  if (elpagNext) {

    reviewsPagAll.forEach(function (pag) {
      pag.classList.remove("pag-next");
      pag.classList.remove("pag-next-small");
    })

    elpagNext.classList.add("pag-next");

    let elpagNextNext = elpagNext.nextElementSibling;

    if (elpagNextNext) {
      elpagNextNext.classList.add("pag-next-small");
    }

  }

  if (elpagPrev) {

    reviewsPagAll.forEach(function (pag) {
      pag.classList.remove("pag-prev");
      pag.classList.remove("pag-prev-small");
    })

    elpagPrev.classList.add("pag-prev");

    let elpagPrevPrev = elpagPrev.previousElementSibling;

    if (elpagPrevPrev) {
      elpagPrevPrev.classList.add("pag-prev-small");
    }

  }
}

interactivePagination();