// Анимация появления формы

let formGreenshockAnimation = gsap.timeline({
  paused: true
})

formGreenshockAnimation
  .to(".form-block", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".form-block__close", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".form-block__content", {
    duration: .5,
    transform: "translateY(0)"
  })
// Анимация появления формы

// Анимация появления скрытого меню в хеадере
let headerMenuGreenshockAnimation = gsap.timeline({
  paused: true
})

headerMenuGreenshockAnimation
  .to(".header-menu", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".header-menu__close", {
    duration: .3,
    opacity: 1,
    visibility: "visible"
  })
  .to(".header-menu__content", {
    duration: .5,
    transform: "translateX(0)"
  })
// Анимация появления скрытого меню в хеадере

document.addEventListener("mouseover", function (e) {

  const elementTarget = e.target; // Элемент принимающий на сетя таргет

  // Выпадающий список
  if (document.body.clientWidth >= 991) {
    if (elementTarget.closest(".init-show-list")) {
      elementTarget.closest(".init-show-list").classList.add("init-show-list-active")
    }
    if (!elementTarget.closest(".init-show-list-active")) {
      document.querySelectorAll(".init-show-list").forEach(function (initShow) {
        initShow.classList.remove("init-show-list-active")
      })
    }
  }
  // Выпадающий список
  // Форма инпуты
  if (elementTarget.closest(".input-tel")) {
    elementTarget.closest(".input-tel").setAttribute("placeholder", "+7-(999)-999-99-99")
  }
  if (!elementTarget.closest(".input-tel")) {
    document.querySelector(".input-tel").setAttribute("placeholder", "Телефон")
  }
  // Форма инпуты

  // if()

})

function timerInit() {
  function timerRemove() {
    document.querySelector(".timer").remove()
  }
  let timerRemoveFun = setInterval(timerRemove, 10000, );

  function timerCreate() {
    const createTimer = `<svg class="timer" width="24" height="24" viewBox="0 0 24 24">
    <circle class="path" cx="4" cy="12" r="10" transform="rotate(-90 8 8)"
    stroke-width="1px" stroke="#ff862f" fill="transparent"></circle>
    </svg>`;
    document.querySelector(".hero-button-next").insertAdjacentHTML("beforeend", createTimer)
  }
  let timerCreateFun = setInterval(timerCreate, 11000, );
}

// Калькулятор

// Стоимость автомобиля

document.querySelector(".cost-input").addEventListener("change", function () {
  if (document.querySelector(".cost-input").value < 1000000) {
    document.querySelector(".cost-input").value = 1000000
  }
  document.querySelector(".installment-symm-input").value = Math.round((document.querySelector(".installment-input").value / 100) * document.querySelector(".cost-input").value)

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
})

// Стоимость автомобиля

// Функция ежемесячный платеж

  function createMonthlyPayment() {
    document.querySelector(".calculator-form__amount").innerHTML = Math.round((Number(document.querySelector(".cost-input").value) - Number(document.querySelector(".installment-symm-input").value)) / Number(document.querySelector(".term-input").value)) + " ₽"
  }

// Функция ежемесячный платеж

// Функция сумма договора лизинга

function createAmountDeal() {
  document.querySelector(".calculator-form__payment").innerHTML = Math.round(Number(document.querySelector(".installment-symm-input").value) + (parseInt(document.querySelector(".calculator-form__amount").innerText) * Number(document.querySelector(".term-input").value))) + " ₽";

  if (parseInt(document.querySelector(".calculator-form__payment").innerHTML) < document.querySelector(".cost-input").value || parseInt(document.querySelector(".calculator-form__payment").innerHTML) > document.querySelector(".cost-input").value) {
    document.querySelector(".calculator-form__payment").innerHTML = document.querySelector(".cost-input").value + " ₽";
  }
}

// Функция сумма договора лизинга

// Калькулятор

document.addEventListener("click", function (e) {

  const elementTarget = e.target; // Элемент принимающий на сетя таргет

  // Бургер

  if (elementTarget.closest(".okay__exit")) {
    document.querySelector(".okay").classList.remove("okay-visible")
  }
  if (elementTarget.closest(".okay")) {
    document.querySelector(".okay").classList.remove("okay-visible")
  }
  const menu = document.querySelector(".header-menu");

  if (elementTarget.closest(".burger")) {
    document.body.style.overflow = "hidden";
    headerMenuGreenshockAnimation.timeScale(1).play()
  }

  if (elementTarget.closest(".header-menu__exit")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".header-menu__close")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".show-list__link")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".init-form")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".nav__link")) {
    document.body.style.overflow = "";
    headerMenuGreenshockAnimation.timeScale(2).reverse()
  }
  // Бургер

  // Слайдер кнопки disabled , loading

  if (elementTarget.closest(".init-disabled")) {
    elementTarget.closest(".init-disabled").classList.add("disabled")
  }
  if (elementTarget.closest(".init-loading")) {
    elementTarget.closest(".init-loading").classList.add("loading")
  }
  // Слайдер кнопки disabled , loading

  // Вызывание формы

  if (elementTarget.closest(".init-form")) {
    document.body.style.overflow = "hidden";
    formGreenshockAnimation.timeScale(1).play()
  }
  if (elementTarget.closest(".form-block__close")) {
    document.body.style.overflow = "";
    formGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".form-block__exit")) {
    document.body.style.overflow = "";
    formGreenshockAnimation.timeScale(2).reverse()
  }
  if (elementTarget.closest(".form-block-form__button")) {
    function checkedErrorValidateForm() {
      if (document.querySelectorAll(".js-validate-error-label").length == 0) {
        document.body.style.overflow = "";
        formGreenshockAnimation.timeScale(2).reverse()
        document.querySelectorAll(".form-block-form__label").forEach(function (e) {
          e.classList.remove("form-label-done")
        })
        document.querySelector(".form-block-form__button").classList.add("disabled")
      }
    }
    setTimeout(checkedErrorValidateForm, 500);

  }

  // Вызывание формы

})

// Дается класс хеадеру при скроле

const header = document.querySelector(".header");
const headerContent = document.querySelector(".header__content")

document.addEventListener("scroll", function () {
  let checkingHeight = Math.floor(scrollY);

  if (checkingHeight >= header.clientHeight) {
    header.classList.add("header-scroll")
    header.style.minHeight = `${headerContent.clientHeight}px`;
  } else {
    header.classList.remove("header-scroll")
    header.style.minHeight = "";
  }
})

// Дается класс хеадеру при скроле

// Форма

document.querySelector(".input-name").addEventListener("focus", function () {
  document.querySelector(".label-name").classList.add("form-label-interaction");
})

document.querySelector(".input-name").addEventListener("focusout", function () {
  document.querySelector(".label-name").classList.remove("form-label-interaction");
})

document.querySelector(".input-tel").addEventListener("focus", function () {
  document.querySelector(".label-tel").classList.add("form-label-interaction");
  document.querySelector(".input-tel").setAttribute("placeholder", "+7-(999)-999-99-99")
})

document.querySelector(".input-tel").addEventListener("focusout", function () {
  document.querySelector(".label-tel").classList.remove("form-label-interaction");
  document.querySelector(".input-tel").setAttribute("placeholder", "Телефон")
})

// Форма

// Форма done
const inputName = document.querySelector(".input-name");
let banNumber = /[0-9]/g;
let banEnglishLetter = /[A-Za-zA]/g;
inputName.oninput = function () {
  this.value = this.value.replace(banNumber, "")
  this.value = this.value.replace(banEnglishLetter, "")
}
inputName.addEventListener("change", function () {
  let length = inputName.value.length
  if (length >= 0) {
    document.querySelector(".label-name").classList.add("form-label-done");
  } else {
    document.querySelector(".label-name").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form-block-form__button").classList.remove("disabled")
  }
})

document.querySelector(".input-tel").addEventListener("change", function () {
  if ((document.querySelector(".input-tel").value.indexOf('_') == -1) && document.querySelector(".input-tel").value != 0) {
    document.querySelector(".label-tel").classList.add("form-label-done");
  } else {
    document.querySelector(".label-tel").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form-block-form__button").classList.remove("disabled")
  }
})

// Форма done


// Запрос на сервер при отправке формы   
const form = document.querySelector(".calculator-form");

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

document.querySelector(".calculator-form__button").addEventListener("click", function (e) {
  e.preventDefault()
  const body = {
    carCost: form.querySelector(".cost-input").value + " ₽",
    anInitialFee: form.querySelector(".installment-symm-input").value + " ₽",
    leasingTerm: form.querySelector(".term-input").value,
    amountOfTheLeaseAgreement: form.querySelector(".calculator-form__payment").innerHTML,
    monthlyPaymentFrom: form.querySelector(".calculator-form__amount").innerHTML,
  }
  sendRequest("POST", requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

// Запрос на сервер при отправке формы 