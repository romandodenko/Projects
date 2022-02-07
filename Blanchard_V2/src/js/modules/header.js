"use strict"

const nav = document.querySelector(".header__nav");
const burger = document.querySelector(".header__burger");
const body = document.querySelector("body")
const searchClicker = document.querySelector(".header__searchclicker")
const search = document.querySelector(".header-bottom__form")

export function burgerClick() {
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active")
    body.classList.toggle("body-hidden")
    burger.classList.toggle("burger-active")
  })

  searchClicker.addEventListener("click", function () {
    search.classList.toggle("search-active")
  })
}