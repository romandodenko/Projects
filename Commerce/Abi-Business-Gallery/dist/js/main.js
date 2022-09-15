"use strict"

window.onload = function () {
  document.addEventListener("click", function(q) {
    if(q.target.closest(".block-gallery__button_1")) {
      document.querySelectorAll(".block-gallery__button").forEach(function(q) {
        q.classList.remove("block-gallery-button-active")
      })
      document.querySelector(".block-gallery__button_1").classList.add("block-gallery-button-active")
    }
    if(q.target.closest(".block-gallery__button_2")) {
      document.querySelectorAll(".block-gallery__button").forEach(function(q) {
        q.classList.remove("block-gallery-button-active")
      })
      document.querySelector(".block-gallery__button_2").classList.add("block-gallery-button-active")
    }
  })


}