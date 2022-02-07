"use strict"

import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

const element = document.querySelector('.gallery-select__select');
const popup = document.querySelectorAll(".popup")
const popupItem = document.querySelectorAll(".gallery-swiper__popup")
const popupExit = document.querySelectorAll(".popup__close")
const popupBtn = document.querySelectorAll(".popup__btn")
const body = document.querySelector("body")

export function gallery() {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: "auto",
    direction: 'horizontal',
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
    pagination: {
      el: '.gallery__pagination',
      clickable: true,
      type: 'fraction',
    },
  });



  const choices = new Choices(element, {
    searchEnabled: false,
  });

  document.querySelectorAll(".gallery-swiper__popup").forEach(function (popupBtn) {
    popupBtn.addEventListener("click", function (event) {
      const path3 = event.currentTarget.dataset.path3

      document.querySelectorAll(".content").forEach(function (popupContent) {
        popupContent.classList.remove("popup-active")
      })
      document.querySelector(`[data-target3="${path3}"]`).classList.add("popup-active")
    })
  })

  popupExit.forEach(function(popupExit) {
    popupExit.addEventListener("click", function() {
      popup.forEach(function(popup) {
        popup.classList.remove("popup-active")
        body.classList.remove("body-hidden")
      })
    })
  })
  popupBtn.forEach(function(popupBtn) {
    popupBtn.addEventListener("click", function() {
      popup.forEach(function(popup) {
        popup.classList.remove("popup-active")
        body.classList.remove("body-hidden")
      })
    })
  })
  popupItem.forEach(function(popupItem) {
    popupItem.addEventListener("click", function() {
      body.classList.add("body-hidden")
    })
  })
}