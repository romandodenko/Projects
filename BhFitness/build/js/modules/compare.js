"use strict"

const compareElem = document.querySelector(".page-buttons__cart");
const compareMain = document.querySelector(".compare");
const pageButtons = document.querySelector(".page-buttons");
const compareBtn = document.querySelector(".compare__btn");
const compareClose = document.querySelector(".compare-close");
const compareCloseBtn = document.querySelector(".compare__close");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const clients = document.querySelector(".clients");
const products = document.querySelector(".products");
const catalog = document.querySelector(".catalog");
const ultimas = document.querySelector(".ultimas");
const footer = document.querySelector(".footer");

export function compare() {
  compareElem.addEventListener("click", function() {
    compareMain.classList.toggle("compare-active")
    compareClose.classList.toggle("compare-close-active")
    body.classList.toggle("body-block")
    header.classList.toggle("transform")
    hero.classList.toggle("transform")
    clients.classList.toggle("transform")
    products.classList.toggle("transform")
    catalog.classList.toggle("transform")
    ultimas.classList.toggle("transform")
    footer.classList.toggle("transform")
    pageButtons.classList.toggle("page-left")
  })
  compareCloseBtn.addEventListener("click", function() {
    compareMain.classList.remove("compare-active")
    compareClose.classList.remove("compare-close-active")
    body.classList.remove("body-block")
    header.classList.remove("transform")
    hero.classList.remove("transform")
    clients.classList.remove("transform")
    products.classList.remove("transform")
    catalog.classList.remove("transform")
    ultimas.classList.remove("transform")
    footer.classList.remove("transform")
    pageButtons.classList.remove("page-left")
  })
  compareBtn.addEventListener("click", function() {
    compareMain.classList.remove("compare-active")
    compareClose.classList.remove("compare-close-active")
    body.classList.remove("body-block")
    header.classList.remove("transform")
    hero.classList.remove("transform")
    clients.classList.remove("transform")
    products.classList.remove("transform")
    catalog.classList.remove("transform")
    ultimas.classList.remove("transform")
    footer.classList.remove("transform")
    pageButtons.classList.remove("page-left")
  })
  compareClose.addEventListener("click", function() {
    compareMain.classList.remove("compare-active")
    compareClose.classList.remove("compare-close-active")
    body.classList.remove("body-block")
    header.classList.remove("transform")
    hero.classList.remove("transform")
    clients.classList.remove("transform")
    products.classList.remove("transform")
    catalog.classList.remove("transform")
    ultimas.classList.remove("transform")
    footer.classList.remove("transform")
    pageButtons.classList.remove("page-left")
  })
}