const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav-list-menu");
const body = document.querySelector("body");

burger.addEventListener("click", function() {
  burger.classList.toggle("burger-active")
  nav.classList.toggle("nav-active")
  body.classList.toggle("body-block")
})