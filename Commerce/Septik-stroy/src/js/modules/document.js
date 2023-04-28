document.documentElement.classList.add("loaded");

const menu = document.querySelector(".header__menu");

const popupCalculate = document.querySelector(".popup-calculate");

const popupCalculateFormItemLength = document.querySelectorAll(".popup-calculate-form__item").length;

const popupCalculateFormItems = document.querySelectorAll(".popup-calculate-form__item");

const popupCalculateFormItem = document.querySelector(".popup-calculate-form__item");

const popupCalculateNumOne = document.querySelector(".popup-calculate__num_one");

const popupCalculateNumTwo = document.querySelector(".popup-calculate__num_two");

const popupCalculateFormChoices = document.querySelectorAll(".popup-calculate-form__choice");

const popupForm = document.querySelector(".popup-form");

const okay = document.querySelector(".okay");

if (popupCalculate) {
  popupCalculateNumTwo.innerHTML = popupCalculateFormItemLength;
  popupCalculateFormItems.forEach(function (e, i) {
    const activeElement = e.classList.contains("calculate-form-item-active")
    if (activeElement) {
      popupCalculateNumOne.innerHTML = i + 1;
      return;
    }
  })
}


document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) {
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".header__exit-menu")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".nav__link")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".sublist-init")) {
    elementInteractive.closest(".sublist-init").classList.toggle("nav-item-active")
  }
  if (!elementInteractive.closest(".sublist-init")) {
    document.querySelectorAll(".sublist-init").forEach(function (q) {
      q.classList.remove("nav-item-active")
    })
  }
  if (elementInteractive.closest(".header-sublist__exit")) {
    document.querySelectorAll(".sublist-init").forEach(function (q) {
      q.classList.remove("nav-item-active")
    })
  }
  if (elementInteractive.closest(".header__menu-back")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".popup-calculate-form__choice")) {
    elementInteractive.closest(".popup-calculate-form__choice").classList.add(`calculate-form-input-choice-active-${popupCalculateNumOne.innerHTML}`)
    if (elementInteractive.closest(".calculate-form-item-active").nextElementSibling) {
      elementInteractive.closest(".calculate-form-item-active").nextElementSibling.classList.add("calculate-form-item-active")
      elementInteractive.closest(".calculate-form-item-active").classList.remove("calculate-form-item-active")
      popupCalculateFormItems.forEach(function (e, i) {
        const activeElement = e.classList.contains("calculate-form-item-active")
        if (activeElement) {
          popupCalculateNumOne.innerHTML = i + 1;
          return;
        }
      })
    }
  }
  if (elementInteractive.closest(".popup-calculate__back")) {
    popupCalculateFormItems.forEach(function (e) {
      e.classList.remove("calculate-form-item-active")
    })
    popupCalculateFormItem.classList.add("calculate-form-item-active");
    popupCalculateNumOne.innerHTML = 1;
    document.querySelectorAll(".popup-calculate-form__choice").forEach(function (e) {
      e.classList.remove("calculate-form-input-choice-active-1");
      e.classList.remove("calculate-form-input-choice-active-2");
      e.classList.remove("calculate-form-input-choice-active-3");
      e.classList.remove("calculate-form-input-choice-active-4");
    })

  }
  if (elementInteractive.closest(".calculator-init")) {
    popupCalculate.classList.add("popup-calculate-active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".popup-calculate__close")) {
    popupCalculate.classList.remove("popup-calculate-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".popup-calculate__exit")) {
    popupCalculate.classList.remove("popup-calculate-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".popup-form-init")) {
    popupForm.classList.add("popup-form-active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".popup-form__close")) {
    popupForm.classList.remove("popup-form-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".popup-form__exit")) {
    popupForm.classList.remove("popup-form-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".okay__close")) {
    okay.classList.remove("okay-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".okay__exit")) {
    okay.classList.remove("okay-active")
    document.body.style.overflow = "";
  }
})


document.addEventListener("mouseover", function (e) {

  const elementInteractive = e.target;

  if (document.body.clientWidth > 992) {
    if (elementInteractive.closest(".sublist-init")) {
      document.querySelectorAll(".sublist-init").forEach(function (q) {
        q.classList.remove("nav-item-active")
      })
      elementInteractive.closest(".sublist-init").classList.add("nav-item-active")
    }
    if (!elementInteractive.closest(".sublist-init")) {
      document.querySelectorAll(".sublist-init").forEach(function (q) {
        q.classList.remove("nav-item-active")
      })
    }
  }

})