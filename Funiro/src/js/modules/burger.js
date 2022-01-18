"use strict"

const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")

export function burgerOpen() {
  burger.addEventListener("click", function() {
    burger.classList.toggle("burger-active")
    nav.classList.toggle("nav-active")
  })

}