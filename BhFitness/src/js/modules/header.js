"use strict"

const burgerBtn = document.querySelector(".header__burger");
const headerBottom = document.querySelector(".header__bottom");
const headerClose = document.querySelector(".header__close");
const closeBtn = document.querySelector(".header__subtitle button");
const pageBut = document.querySelector(".page-buttons");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const clients = document.querySelector(".clients");
const products = document.querySelector(".products");
const catalog = document.querySelector(".catalog");
const ultimas = document.querySelector(".ultimas");
const footer = document.querySelector(".footer");

export function burger() {
  burgerBtn.addEventListener("click", function() {
    headerClose.classList.toggle("headerclose-active")
    headerBottom.classList.toggle("headerbottom-active")
    body.classList.toggle("body-block")
    pageBut.classList.toggle("page-buttons-left")
    header.classList.toggle("transform-left")
    hero.classList.toggle("transform-left")
    clients.classList.toggle("transform-left")
    products.classList.toggle("transform-left")
    catalog.classList.toggle("transform-left")
    ultimas.classList.toggle("transform-left")
    footer.classList.toggle("transform-left")
  })
  closeBtn.addEventListener("click", function() {
    headerClose.classList.remove("headerclose-active")
    body.classList.remove("body-block")
    pageBut.classList.toggle("page-buttons-left")
    headerBottom.classList.remove("headerbottom-active")
    header.classList.remove("transform-left")
    hero.classList.remove("transform-left")
    clients.classList.remove("transform-left")
    products.classList.remove("transform-left")
    catalog.classList.remove("transform-left")
    ultimas.classList.remove("transform-left")
    footer.classList.remove("transform-left")
  })
  headerClose.addEventListener("click", function() {
    headerClose.classList.remove("headerclose-active")
    body.classList.remove("body-block")
    pageBut.classList.toggle("page-buttons-left")
    headerBottom.classList.remove("headerbottom-active")
    header.classList.remove("transform-left")
    hero.classList.remove("transform-left")
    clients.classList.remove("transform-left")
    products.classList.remove("transform-left")
    catalog.classList.remove("transform-left")
    ultimas.classList.remove("transform-left")
    footer.classList.remove("transform-left")
  })
}