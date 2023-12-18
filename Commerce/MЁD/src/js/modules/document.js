"use strict"

function reserForm() {
  document.querySelectorAll("form").forEach(function (e) {
    e.reset();
  })
}

// Открытие и закрытие бургера

const menu = document.querySelector(".header__menu");

const reviewsButtons = document.querySelectorAll('.calculate__button');

const calculateWeek = document.querySelector('.calculate-week');

const calculateMonth = document.querySelector(".calculate-month");

const states = document.querySelectorAll(".states");

const statesOkay = document.querySelector(".states-okay");

const statesError = document.querySelector(".states-error");

const statesLoader = document.querySelector(".states-loader");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
    menu.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".reviews__button")) { // Добавление/удаление активного класса у кнопок в блоке reviews
    const reviewsButtons = document.querySelectorAll('.reviews__button');
    reviewsButtons.forEach(function (e) {
      e.classList.remove("active");
    })
    elementInteractive.closest(".reviews__button").classList.add("active");
  }

  if (elementInteractive.closest(".questions__button")) { // Открытие и закрытие бургера

    const questionsItem = elementInteractive.closest(".questions__item");

    const questionsItemBottom = questionsItem.querySelector(".questions__item-bottom");

    if (!questionsItem.classList.contains("active")) {

      document.querySelectorAll(".questions__item").forEach(function (e) {
        e.classList.remove("active");
        gsap.to(e.querySelector(".questions__item-bottom"), {
          height: 0,
        });
      })

      questionsItem.classList.add("active");

      gsap.to(questionsItemBottom, {
        height: 'auto',
      });

    } else if (questionsItem.classList.contains("active")) {

      questionsItem.classList.remove("active");

      gsap.to(questionsItemBottom, {
        height: 0,
      });
    }

  }

  if (elementInteractive.closest(".calculate__button")) { // Добавление/удаление активного класса у кнопок в блоке calculate

    reviewsButtons.forEach(function (e) {
      e.classList.remove("active");
    })

    elementInteractive.closest(".calculate__button").classList.add("active");

    if (calculateWeek.classList.contains("active")) {

      calculatePrice.innerHTML = (allValuesSum * 3.5) + " руб.";

    } else if (calculateMonth.classList.contains("active")) {

      calculatePrice.innerHTML = (allValuesSum * 8) + " руб."

    } else {

      calculatePrice.innerHTML = (allValuesSum * 100) + " руб."

    }
  }

  if (elementInteractive.closest(".reviews-pag")) { // Сокрытие пагинации в слайдере reviews-slider
    let elpag = elementInteractive.closest(".reviews-pag");

    const reviewsPagAll = document.querySelectorAll(".reviews-pag");

    let elpagNext = elpag.nextElementSibling;

    let elpagPrev = elpag.previousElementSibling;

    if (elpagNext) {

      reviewsPagAll.forEach(function (pag) {
        pag.classList.remove("reviews-pag-next");
      })

      elpagNext.classList.add("reviews-pag-next");

      let elpagNextNext = elpagNext.nextElementSibling;

      if (elpagNextNext) {
        elpagNextNext.classList.add("reviews-pag-next");
      }

    }

    if (elpagPrev) {

      reviewsPagAll.forEach(function (pag) {
        pag.classList.remove("reviews-pag-prev");
      })

      elpagPrev.classList.add("reviews-pag-prev");

      let elpagPrevPrev = elpagPrev.previousElementSibling;

      if (elpagPrevPrev) {
        elpagPrevPrev.classList.add("reviews-pag-prev");
      }

    }
  }

  if (elementInteractive.closest(".about-slider-pag")) { // Сокрытие пагинации в слайдере about-slider
    let elpag = elementInteractive.closest(".about-slider-pag");

    const aboutSliderPagAll = document.querySelectorAll(".about-slider-pag");

    let elpagNext = elpag.nextElementSibling;

    let elpagPrev = elpag.previousElementSibling;

    if (elpagNext) {

      aboutSliderPagAll.forEach(function (pag) {
        pag.classList.remove("about-slider-pag-next");
      })

      elpagNext.classList.add("about-slider-pag-next");

      let elpagNextNext = elpagNext.nextElementSibling;

      if (elpagNextNext) {
        elpagNextNext.classList.add("about-slider-pag-next");
      }

    }

    if (elpagPrev) {

      aboutSliderPagAll.forEach(function (pag) {
        pag.classList.remove("about-slider-pag-prev");
      })

      elpagPrev.classList.add("about-slider-pag-prev");

      let elpagPrevPrev = elpagPrev.previousElementSibling;

      if (elpagPrevPrev) {
        elpagPrevPrev.classList.add("about-slider-pag-prev");
      }

    }
  }

  if (elementInteractive.closest(".states__close")) { // Закрытие состояние отправки
    states.forEach(function (e) {
      e.classList.remove("active");
    })
  }

  if (elementInteractive.closest(".states__exit")) { // Закрытие состояние отправки
    states.forEach(function (e) {
      e.classList.remove("active");
    })
  }

  if (elementInteractive.closest(".bring-form__button")) { // Закрытие состояние отправки
    statesLoader.classList.add("active");
  }

  if (elementInteractive.closest(".work-form__button")) { // Закрытие состояние отправки
    statesLoader.classList.add("active");
  }

  if (elementInteractive.closest(".reviews-form__button")) { // Закрытие состояние отправки
    const requestUrl = "https://jsonplaceholder.typicode.com/users"; // Для проверки работает всё или нет, выступает в качестве сервера

    function sendRequest(method, url, body = null) {
      const headers = {
        'Content-Type': 'application/json',
      };

      return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
      }).then(response => {
        return response.json()
      })

    }

    const body = { // то что передается
      carCost: reviewsFormName.value,
      anInitialFee: reviewsFormCommentary.value, 
    }

    sendRequest("POST", requestUrl, body)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

})

// Плагин webp. Скрипт для проверки , поддерживает ли браузер webp 

function testWebP(callback) {
  let webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

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
            let elementEntryBackgroundImageDataWebp = elementEntry.dataset.rdImageWebp;

            if (body.classList.contains("webp")) {
              elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataWebp})`;
            } else {
              elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataImage})`;
            }

          }

          if (rdUploadBackgroundImage) {
            rdUploadBackgroundImage.forEach(function (rdUploadBackgroundImage) {

              let rdUploadBackgroundImageDataImage = rdUploadBackgroundImage.dataset.rdImage;
              let rdUploadBackgroundImageDataWebp = rdUploadBackgroundImage.dataset.rdImageWebp;


              if (body.classList.contains("webp")) {
                rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataWebp})`;
              } else {
                rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataImage})`;
              }

            })
          }

          if (rdUploadImage) {
            rdUploadImage.forEach(function (rdUploadImage) {

              if (!rdUploadImage.closest("picture")) {
                let rdUploadImageDataImage = rdUploadImage.dataset.rdImage;
                let rdUploadImageDataWebp = rdUploadImage.dataset.rdImageWebp;


                if (body.classList.contains("webp")) {
                  rdUploadImage.setAttribute("src", `${rdUploadImageDataWebp}`);
                } else {
                  rdUploadImage.setAttribute("src", `${rdUploadImageDataImage}`);
                }
              }

            })
          }

          if (rdUploadPicture) {
            rdUploadPicture.forEach(function (rdUploadPicture) {

              let rdUploadPictureSource = rdUploadPicture.querySelectorAll("source");

              rdUploadPictureSource.forEach(function (rdUploadPictureSource) {

                let rdUploadPictureSourceImage = rdUploadPictureSource.dataset.rdImage;
                let rdUploadPictureSourceWebp = rdUploadPictureSource.dataset.rdImageWebp;

                if (body.classList.contains("webp")) {
                  rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceWebp}`);
                } else {
                  rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceImage}`);
                }

              })

            })
          }

          if (rdUploadVideo) {
            rdUploadVideo.forEach(function (rdUploadVideo) {

              let rdUploadVideoDataVideo = rdUploadVideo.dataset.rdVideo;
              let rdUploadVideoDataImage = rdUploadVideo.dataset.rdImage;
              let rdUploadVideoDataWebp = rdUploadVideo.dataset.rdImageWebp;

              rdUploadVideo.setAttribute("src", `${rdUploadVideoDataVideo}`);

              if (body.classList.contains("webp")) {
                rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataWebp}`);
              } else {
                rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataImage}`);
              }

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

// Работа с формой work-form

const workForm = document.querySelector('.work-form');

const workFormText = document.querySelector("#work_form_text");

const workFormPhone = document.querySelector("#work_form_phone");

const workFormButton = document.querySelector(".work-form__button");

if (workForm) {
  let workFormPhone = workForm.querySelector("input[type='tel']");

  let workFormPhoneInputmask = new Inputmask("+7(999)999-99-99");

  workFormPhoneInputmask.mask(workFormPhone);
}

async function submitFormWork(event) {
  event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
  try {
    // Формируем запрос
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target)
    });
    // проверяем, что ответ есть
    if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw ('Ошибка обработки. Ответ не JSON');
    }
    // обрабатываем запрос
    const json = await response.json();
    if (json.result === "success") {

      statesLoader.classList.remove("active");

      document.querySelectorAll('.work-done').forEach(function (e) {
        e.classList.remove('work-done');
      })

      setTimeout(reserForm, 1000);

      workFormButton.classList.remove("active");

      document.querySelectorAll(".work-form__icon").forEach(function (e) {
        e.remove();
      })

      workFormFileValues.classList.remove("active");

      statesOkay.classList.add("active");

    } else {

      statesLoader.classList.remove("active");

      document.querySelectorAll('.work-done').forEach(function (e) {
        e.classList.remove('work-done');
      })

      setTimeout(reserForm, 1000);

      workFormButton.classList.remove("active");

      document.querySelectorAll(".work-form__icon").forEach(function (e) {
        e.remove();
      })

      workFormFileValues.classList.remove("active");

      statesError.classList.add("active");

    }
  } catch (error) { // обработка ошибки
    alert(error);
  }
}

if (workFormText) {
  workFormText.addEventListener("change", function () {
    let length = workFormText.value.length;
    if (length >= 0) {
      workFormText.classList.add("work-done");
    } else {
      workFormText.classList.remove("work-done");
    }
    if (document.querySelectorAll(".work-done").length == 2) {
      workFormButton.classList.add("active");
    }
  })
}

if (workFormPhone) {
  workFormPhone.addEventListener("change", function () {
    if ((workFormPhone.value.indexOf('_') == -1) && workFormPhone.value != 0) {
      workFormPhone.classList.add("work-done");
    } else {
      workFormPhone.classList.remove("work-done");
    }
    if (document.querySelectorAll(".work-done").length == 2) {
      workFormButton.classList.add("active");
    }
  })
}

// Добавление значения инпута типа файл в форме work-form

const workFormFileValues = document.querySelector(".work-form__file-values");

const workFormFile = document.querySelector(".work-form__file");

if (workFormFile && workFormFileValues) {
  workFormFile.addEventListener("input", function () {

    document.querySelectorAll(".work-form__icon").forEach(function (e) {
      e.remove();
    })

    workFormFileValues.classList.add("active");

    let template = `
    <div class="work-form__icon tx-16">
      <svg width="32" height="32">
        <use xlink:href="./img/svg/sprites.svg#okay"></use>
      </svg>
      Добавлено!
    </div>
    `;

    workFormFileValues.insertAdjacentHTML('afterbegin', template);
  })
}

//  Слайдер в блоке about

const aboutSlider = document.querySelector('.about-slider');

if (aboutSlider) {
  if (document.body.clientWidth < 992) {
    const aboutSwiper = new Swiper(aboutSlider, {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
      direction: 'horizontal',
      pagination: {
        el: '.about-slider-pagination',
        clickable: true,
      }
    });
  }
}

// Перекидывание кнопки из 1 элемента в другой в блоке conditions

const conditionsContainer = document.querySelector(".conditions__container");

const conditionsButton = document.querySelector(".conditions__button");

if (conditionsContainer && conditionsButton) {

  if (document.body.clientWidth < 991) {
    conditionsContainer.append(conditionsButton);
  }

}

// Нумерование карточек в блоке steps

const stepsItems = document.querySelectorAll(".steps__item");

if (stepsItems) {
  stepsItems.forEach(function (e, i) {
    const stepsItemsNums = e.querySelector('.steps__num');
    if ((i + 1) < 10) {
      stepsItemsNums.innerHTML = "0" + (i + 1);
    } else {
      stepsItemsNums.innerHTML = i + 1;
    }

  })
}

// Слайдер в блоке reviews

const reviewsSlider = document.querySelector('.reviews-slider');

if (reviewsSlider) {
  const reviewsSwiper = new Swiper(reviewsSlider, {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    direction: 'horizontal',
    navigation: {
      nextEl: '.reviews-slider-next',
      prevEl: '.reviews-slider-prev',
    },
    pagination: {
      el: '.reviews-slider-pagination',
      clickable: true,
    }
  });
}

// Валидация формы reviews-form

const reviewsForm = document.querySelector('.reviews-form');

const reviewsFormName = document.querySelector("#reviews_form_name");

const reviewsFormCommentary = document.querySelector("#reviews_form_commentary");

const reviewsFormButton = document.querySelector(".reviews-form__button");

async function submitFormReviews(event) {
  event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
  try {
    // Формируем запрос
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target)
    });
    // проверяем, что ответ есть
    if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw ('Ошибка обработки. Ответ не JSON');
    }
    // обрабатываем запрос
    const json = await response.json();
    if (json.result === "success") {

      statesLoader.classList.remove("active");

      document.querySelectorAll('.reviews-done').forEach(function (e) {
        e.classList.remove('reviews-done');
      })

      setTimeout(reserForm, 1000);

      reviewsFormButton.classList.remove("active");

      statesOkay.classList.add("active");
    } else {

      statesLoader.classList.remove("active");

      document.querySelectorAll('.reviews-done').forEach(function (e) {
        e.classList.remove('reviews-done');
      })

      setTimeout(reserForm, 1000);

      reviewsFormButton.classList.remove("active");

      statesError.classList.add("active");
    }
  } catch (error) { // обработка ошибки
    alert(error);
  }
}

if (reviewsFormName) {
  reviewsFormName.addEventListener("change", function () {
    let length = reviewsFormName.value.length;
    if (length >= 0) {
      reviewsFormName.classList.add("reviews-done");
    } else {
      reviewsFormName.classList.remove("reviews-done");
    }
    if (document.querySelectorAll(".reviews-done").length == 2) {
      reviewsFormButton.classList.add("active");
    }
  })
}

if (reviewsFormCommentary) {
  reviewsFormCommentary.addEventListener("change", function () {
    let length = reviewsFormCommentary.value.length;
    if (length >= 0) {
      reviewsFormCommentary.classList.add("reviews-done");
    } else {
      reviewsFormCommentary.classList.remove("reviews-done");
    }
    if (document.querySelectorAll(".reviews-done").length == 2) {
      reviewsFormButton.classList.add("active");
    }
  })
}

// Работа с формой bring-form

const bringForm = document.querySelector('.bring-form');

const bringFormText = document.querySelector("#bring_form_text");

const bringFormPhone = document.querySelector("#bring_form_phone");

const bringFormButton = document.querySelector(".bring-form__button");

const bringFormFileValues = document.querySelector(".bring-form__file-values");

const bringFormFile = document.querySelector(".bring-form__file");

if (bringForm) {
  let bringFormPhone = bringForm.querySelector("input[type='tel']");

  let bringFormPhoneInputmask = new Inputmask("+7(999)999-99-99");

  bringFormPhoneInputmask.mask(bringFormPhone);
}

async function submitFormBring(event) {
  event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
  try {
    // Формируем запрос
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target)
    });
    // проверяем, что ответ есть
    if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw ('Ошибка обработки. Ответ не JSON');
    }
    // обрабатываем запрос
    const json = await response.json();
    if (json.result === "success") {

      statesLoader.classList.remove("active");

      document.querySelectorAll('.bring-done').forEach(function (e) {
        e.classList.remove('bring-done');
      })

      setTimeout(reserForm, 1000);

      bringFormButton.classList.remove("active");

      document.querySelectorAll(".bring-form__icon").forEach(function (e) {
        e.remove();
      })

      bringFormFileValues.classList.remove("active");

      statesOkay.classList.add("active");
    } else {

      statesLoader.classList.remove("active");

      document.querySelectorAll('.bring-done').forEach(function (e) {
        e.classList.remove('bring-done');
      })

      setTimeout(reserForm, 1000);

      bringFormButton.classList.remove("active");

      document.querySelectorAll(".bring-form__icon").forEach(function (e) {
        e.remove();
      })

      bringFormFileValues.classList.remove("active");

      statesError.classList.add("active");
    }
  } catch (error) { // обработка ошибки
    alert(error);
  }
}

if (bringFormText) {
  bringFormText.addEventListener("change", function () {
    let length = bringFormText.value.length;
    if (length >= 0) {
      bringFormText.classList.add("bring-done");
    } else {
      bringFormText.classList.remove("bring-done");
    }
    if (document.querySelectorAll(".bring-done").length == 2) {
      bringFormButton.classList.add("active");
    }
  })
}

if (bringFormPhone) {
  bringFormPhone.addEventListener("change", function () {
    if ((bringFormPhone.value.indexOf('_') == -1) && bringFormPhone.value != 0) {
      bringFormPhone.classList.add("bring-done");
    } else {
      bringFormPhone.classList.remove("bring-done");
    }
    if (document.querySelectorAll(".bring-done").length == 2) {
      bringFormButton.classList.add("active");
    }
  })
}

// Добавление значения инпута типа файл в форме bring-form

if (bringFormFile && bringFormFileValues) {
  bringFormFile.addEventListener("input", function () {

    document.querySelectorAll(".bring-form__icon").forEach(function (e) {
      e.remove();
    })

    bringFormFileValues.classList.add("active");

    let template = `
    <div class="bring-form__icon tx-16">
      <svg width="32" height="32">
        <use xlink:href="./img/svg/sprites.svg#okay"></use>
      </svg>
      Добавлено!
    </div>
    `;

    bringFormFileValues.insertAdjacentHTML('afterbegin', template);
  })
}

// Калькулятор

const calculate = document.querySelector(".calculate");

const daysAWeek = document.querySelector("#days_a_week");

const hoursADay = document.querySelector("#hours_a_day");

const levelEnglish = document.querySelector("#level_english");

const daysWeekInner = document.querySelector('.days-week-inner');

const hoursDayInner = document.querySelector(".hours-day-inner");

const levelEnglishInner = document.querySelector(".level-english-inner");

const calculatePrice = document.querySelector(".calculate__price");

let allValuesUi;

let allValuesSum;

const defaultCalculatePrice = 10000;

if (calculate) {
  noUiSlider.create(daysAWeek, {
    start: [0],
    animationDuration: 0,
    connect: [true, true],
    step: 1.35,
    handleAttributes: [{
        'aria-label': 'Уменьшить значение на 1'
      },
      {
        'aria-label': 'Увеличить значение на 1'
      },
    ],
    behaviour: 'tap',
    decimals: 0,
    range: {
      'min': 0,
      'max': 4,
    }
  });

  daysAWeek.noUiSlider.on('update', function (values, handle) {
    reviewsButtons.forEach(function (e) {
      e.classList.remove("active");
    })

    let daysAWeekUi = daysAWeek.querySelector('.noUi-handle-lower');

    let daysAWeekUiAttr = daysAWeekUi.getAttribute('aria-valuenow');

    daysWeekInner.innerHTML = Number(daysAWeekUiAttr);

    allValuesUi = (Number(daysWeekInner.innerHTML) + Number(hoursDayInner.innerHTML) + Number(levelEnglishInner.innerHTML)) / 10;

    allValuesSum = Math.ceil(defaultCalculatePrice + (defaultCalculatePrice * allValuesUi));

    calculatePrice.innerHTML = allValuesSum + " руб.";

  });

  noUiSlider.create(hoursADay, {
    start: [0],
    animationDuration: 0,
    connect: [true, true],
    step: 1.50,
    handleAttributes: [{
        'aria-label': 'Уменьшить значение на 1'
      },
      {
        'aria-label': 'Увеличить значение на 1'
      },
    ],
    behaviour: 'tap',
    decimals: 0,
    range: {
      'min': 0,
      'max': 3,
    }
  });

  hoursADay.noUiSlider.on('update', function (values, handle) {
    reviewsButtons.forEach(function (e) {
      e.classList.remove("active");
    })

    let hoursADayUi = hoursADay.querySelector('.noUi-handle-lower');

    let hoursADayUiiAttr = hoursADayUi.getAttribute('aria-valuenow');

    hoursDayInner.innerHTML = Number(hoursADayUiiAttr);

    allValuesUi = (Number(daysWeekInner.innerHTML) + Number(hoursDayInner.innerHTML) + Number(levelEnglishInner.innerHTML)) / 10;

    allValuesSum = Math.ceil(defaultCalculatePrice + (defaultCalculatePrice * allValuesUi));

    calculatePrice.innerHTML = allValuesSum + " руб.";

  });

  noUiSlider.create(levelEnglish, {
    start: [0],
    animationDuration: 0,
    connect: [true, true],
    step: 1.50,
    handleAttributes: [{
        'aria-label': 'Уменьшить значение на 1'
      },
      {
        'aria-label': 'Увеличить значение на 1'
      },
    ],
    behaviour: 'tap',
    decimals: 0,
    range: {
      'min': 0,
      'max': 3,
    }
  });

  levelEnglish.noUiSlider.on('update', function (values, handle) {
    reviewsButtons.forEach(function (e) {
      e.classList.remove("active");
    })

    let levelEnglishUi = levelEnglish.querySelector('.noUi-handle-lower');

    let levelEnglishUiAttr = levelEnglishUi.getAttribute('aria-valuenow');

    levelEnglishInner.innerHTML = Number(levelEnglishUiAttr);

    allValuesUi = (Number(daysWeekInner.innerHTML) + Number(hoursDayInner.innerHTML) + Number(levelEnglishInner.innerHTML)) / 10;

    allValuesSum = Math.ceil(defaultCalculatePrice + (defaultCalculatePrice * allValuesUi));

    calculatePrice.innerHTML = allValuesSum + " руб.";

  });

  calculatePrice.innerHTML = defaultCalculatePrice + " руб.";
}

// Перекидывание кнопки в блоке salary

const salaryContainer = document.querySelector(".salary__container");

const calculateLink = document.querySelector(".calculate__link");

if (salaryContainer && calculateLink) {
  if (document.body.clientWidth < 991) {
    salaryContainer.append(calculateLink);
  }
}

// Даем индивидуальные классы пагинации в блоке reviews

document.querySelectorAll(".reviews__pagination span").forEach(function (q) {
  q.classList.add("reviews-pag")
})

// Даем индивидуальные классы пагинации в блоке  wrapper-about-slider 

document.querySelectorAll(".wrapper-about-slider__pagination span").forEach(function (q) {
  q.classList.add("about-slider-pag")
})

// Включаем анимацию

const aosInit = document.querySelector(".aos-init");

if (aosInit) {
  AOS.init({
    duration: 900,
  });
}

// Задержка для анимация у элементов

let timerAboutSliderSlides = 0.15;

const aboutSliderSlides = document.querySelectorAll(".about-slider__slide");

if (aboutSliderSlides) {

  aboutSliderSlides.forEach(function (e) {
    timerAboutSliderSlides += 0.05;
    e.style.transitionDelay = timerAboutSliderSlides + "s";
  })

}

let timerConditionsItems = 0.15;

const conditionsItems = document.querySelectorAll(".conditions__item");

if (conditionsItems) {

  conditionsItems.forEach(function (e) {
    timerConditionsItems += 0.02;
    e.style.transitionDelay = timerConditionsItems + "s";
  })

}

let timerdifferencesItems = 0.15;

const differencesItems = document.querySelectorAll(".differences__item");

if (differencesItems) {

  differencesItems.forEach(function (e) {
    timerdifferencesItems += 0.02;
    e.style.transitionDelay = timerdifferencesItems + "s";
  })

}

let timerstepsItems = 0.20;

if (stepsItems) {
  stepsItems.forEach(function (e) {
    timerstepsItems += 0.02;
    e.style.transitionDelay = timerstepsItems + "s";
  })
}

let timerquestionsItems = 0.20;

const questionsItems = document.querySelectorAll(".questions__item");

if (questionsItems) {
  questionsItems.forEach(function (e) {
    timerquestionsItems += 0.02;
    e.style.transitionDelay = timerquestionsItems + "s";
  })
}

let timerheroScIconsIcon = 0.20;

const heroScIconsIcon = document.querySelectorAll(".hero .sc-icons__icon");

if (heroScIconsIcon) {
  heroScIconsIcon.forEach(function (e) {
    timerquestionsItems += 0.02;
    e.style.transitionDelay = timerquestionsItems + "s";
  })
}