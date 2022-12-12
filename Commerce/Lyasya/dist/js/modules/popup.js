"use strict"

export function popup() {
  document.addEventListener("DOMContentLoaded", function () {
    const clickerRequest = document.querySelectorAll(".popup-request-clicker") // класс вызывающий попапы
    const clickerProduct = document.querySelectorAll(".popup-product-clicker") // класс вызывающий попапы
    const popupRequest = document.querySelector(".popup-request");
    const popupRequestClose = document.querySelector(".popup-request__close");
    const popupRequestExit = document.querySelector(".popup-request__exit");
    const popupProduct = document.querySelector(".popup-product");
    const popupProductClose = document.querySelector(".popup-product__close");
    const popupProductExit = document.querySelector(".popup-product__exit");
    const inputProduct = document.querySelector(".popup-product__quantity-input");
    const buttonPlus = document.querySelector(".popup-product__quantity-plus")
    const buttonMinus = document.querySelector(".popup-product__quantity-minus")
    let numInput = 0;
    inputProduct.setAttribute("value", numInput)
    buttonPlus.addEventListener("click", function () {
      numInput++
      inputProduct.setAttribute("value", numInput)
    })
    buttonMinus.addEventListener("click", function () {
      if (numInput === 0) {
        numInput = 0
      } else {
        numInput--
        inputProduct.setAttribute("value", numInput)
      }
    })
    clickerRequest.forEach(function (clickerRequest) {
      clickerRequest.addEventListener("click", function () {
        popupRequest.classList.add("popup-request-active")
      })
    })
    popupRequestClose.addEventListener("click", function () {
      popupRequest.classList.remove("popup-request-active")
    })
    popupRequestExit.addEventListener("click", function () {
      popupRequest.classList.remove("popup-request-active")
    })
    clickerProduct.forEach(function (clickerProduct) {
      clickerProduct.addEventListener("click", function () {
        popupProduct.classList.add("popup-product-active")
      })
    })
    popupProductClose.addEventListener("click", function () {
      popupProduct.classList.remove("popup-product-active")
    })
    popupProductExit.addEventListener("click", function () {
      popupProduct.classList.remove("popup-product-active")
    })
  })
}