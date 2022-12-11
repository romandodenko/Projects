const menu = document.querySelector(".header__menu");
const burger = document.querySelector(".burger");
document.addEventListener("click", function (e) {
  const elementTarget = e.target;

  if (elementTarget.closest(".burger")) {
    menu.classList.toggle("menu-active")
    burger.classList.toggle("burger-menu-active")
  }
  if (elementTarget.closest(".nav__link")) {
    burger.classList.remove("burger-menu-active")
    menu.classList.remove("menu-active")
  }
  if (elementTarget.closest(".warning__button")) {
    elementTarget.closest(".warning_hero").classList.add("warning-disabled")
  }
})

// ======================================================================================================================================================

// Header

document.addEventListener("scroll", function (e) {

  const elementTarget = e.target;

  let scrollHeight = Math.floor(scrollY);

  const header = document.querySelector(".header");

  if (scrollHeight > 10) {
    header.classList.add("header-scroll")

  } else {
    header.classList.remove("header-scroll")
  }
})