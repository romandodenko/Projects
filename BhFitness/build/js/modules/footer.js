"use strict"

const check = document.querySelector(".footer-top__check");
const btn = document.querySelector(".footer-top__btn")

export function footer() {
  check.addEventListener("change", function() {
    btn.classList.toggle("btn-disabled")
  })
}