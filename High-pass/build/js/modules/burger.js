"use strict";

const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")
const exitBurger = document.querySelector(".header__btn")
const body = document.querySelector("body")
const links = document.querySelectorAll(".header__link")
const loop = document.querySelector(".header__loop")
const search = document.querySelector(".header-form")

export function header() {
  burger.addEventListener("click", function () {
    nav.classList.add("nav-active")
    body.classList.add("body-scroll")
  })

  exitBurger.addEventListener("click", function () {
    nav.classList.remove("nav-active")
    body.classList.remove("body-scroll")
  })

  links.forEach(function (links) {
    links.addEventListener("click", function () {
      nav.classList.remove("nav-active")
      body.classList.remove("body-scroll")
    })
  })

  loop.addEventListener("click", function () {
    search.classList.toggle("search-active")
  })
}