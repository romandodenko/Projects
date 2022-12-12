"use strict"

  document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__wrapper-menu");
    const exitMenu = document.querySelector(".header__menu-exit");
    const regionInitialButton = document.querySelector(".header-regions__region");
    const regionPopup = document.querySelector(".header-regions__wrapper-popup");
    const regionExit = document.querySelector(".header-regions__exit");
    const regionClose = document.querySelector(".header-regions__close");
    const body = document.querySelector("body");
    const phoneElem = document.querySelector(".header-phones__phone");
    const phoneElemBody = document.querySelector(".header-phones__body");
    const phoneElemExit = document.querySelector(".header-phones__cls");
    const menuOneBody = document.querySelector(".menu-one-body");
    const menuOneBodyClose = document.querySelector(".menu-one-body-close");
    const menuOneBodyInit = document.querySelector(".menu-one-body-init");
    const menuTwoBodyClose = document.querySelector(".menu-two-body-close");
    const menuTwoBody = document.querySelector(".menu-two-body");
    const menuTwoBodyInit = document.querySelector(".menu-two-body-init");
    const menuThirdBody = document.querySelector(".menu-third-body")
    const menuThirdBodyInit = document.querySelector(".menu-third-body-init");
    const menuThirdBodyClose = document.querySelector(".menu-third-body-close");
    const menuFourBody = document.querySelector(".menu-four-body")
    const menuFourBodyInit = document.querySelector(".menu-four-body-init");
    const menuFourBodyClose = document.querySelector(".menu-four-body-close");
    const menuOneBodyItemOne = document.querySelector(".menu-one-body-item-1");
    const menuOneBodyItemOneInit = document.querySelector(".menu-one-body-item-1-init");
    const menuOneBodyItemOneClose = document.querySelector(".menu-one-body-item-1-clos");
    const menuOneBodyItemTwo = document.querySelector(".menu-one-body-item-2");
    const menuOneBodyItemTwoInit = document.querySelector(".menu-one-body-item-2-init");
    const menuOneBodyItemTwoClose = document.querySelector(".menu-one-body-item-2-clos");
    const menuOneBodyItemThird = document.querySelector(".menu-one-body-item-3");
    const menuOneBodyItemThirdInit = document.querySelector(".menu-one-body-item-3-init");
    const menuOneBodyItemThirdClose = document.querySelector(".menu-one-body-item-3-clos");
    const menuOneBodyItemFour = document.querySelector(".menu-one-body-item-4");
    const menuOneBodyItemFourInit = document.querySelector(".menu-one-body-item-4-init");
    const menuOneBodyItemFourClose = document.querySelector(".menu-one-body-item-4-clos");
    const menuOneBodyItemFive = document.querySelector(".menu-one-body-item-5");
    const menuOneBodyItemFiveInit = document.querySelector(".menu-one-body-item-5-init");
    const menuOneBodyItemFiveClose = document.querySelector(".menu-one-body-item-5-clos");
    const menuOneBodyItemSix= document.querySelector(".menu-one-body-item-6");
    const menuOneBodyItemSixInit = document.querySelector(".menu-one-body-item-6-init");
    const menuOneBodyItemSixClose = document.querySelector(".menu-one-body-item-6-clos");
    const menuOneBodyItemSeven = document.querySelector(".menu-one-body-item-7");
    const menuOneBodyItemSevenInit = document.querySelector(".menu-one-body-item-7-init");
    const menuOneBodyItemSevenClose = document.querySelector(".menu-one-body-item-7-clos");
    const menuOneBodyItemEight = document.querySelector(".menu-one-body-item-8");
    const menuOneBodyItemEightInit = document.querySelector(".menu-one-body-item-8-init");
    const menuOneBodyItemEightClose = document.querySelector(".menu-one-body-item-8-clos");

    main.addEventListener("click", function() {
      menu.classList.remove("menu-active")
      body.classList.remove("body-block")
    })

    menuOneBodyItemOneInit.addEventListener("click", function() {
      menuOneBodyItemOne.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemOneClose.addEventListener("click", function() {
      menuOneBodyItemOne.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyItemTwoInit.addEventListener("click", function() {
      menuOneBodyItemTwo.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemTwoClose.addEventListener("click", function() {
      menuOneBodyItemTwo.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyItemThirdInit.addEventListener("click", function() {
      menuOneBodyItemThird.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemThirdClose.addEventListener("click", function() {
      menuOneBodyItemThird.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyItemFourInit.addEventListener("click", function() {
      menuOneBodyItemFour.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemFourClose.addEventListener("click", function() {
      menuOneBodyItemFour.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyItemFiveInit.addEventListener("click", function() {
      menuOneBodyItemFive.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemFiveClose.addEventListener("click", function() {
      menuOneBodyItemFive.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyItemSixInit.addEventListener("click", function() {
      menuOneBodyItemSix.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemSixClose.addEventListener("click", function() {
      menuOneBodyItemSix.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyItemSevenInit.addEventListener("click", function() {
      menuOneBodyItemSeven.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemSevenClose.addEventListener("click", function() {
      menuOneBodyItemSeven.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyItemEightInit.addEventListener("click", function() {
      menuOneBodyItemEight.classList.add("menu-one-body-item-active")
    })

    menuOneBodyItemEightClose.addEventListener("click", function() {
      menuOneBodyItemEight.classList.remove("menu-one-body-item-active")
    })

    menuOneBodyInit.addEventListener("click", function() {
      menuOneBody.classList.add("menu-body-active")
    })

    menuOneBodyClose.addEventListener("click", function() {
      menuOneBody.classList.remove("menu-body-active")
    })

    menuTwoBodyInit.addEventListener("click", function() {
      menuTwoBody.classList.add("menu-body-active")
    })

    menuTwoBodyClose.addEventListener("click", function() {
      menuTwoBody.classList.remove("menu-body-active")
    })

    menuFourBodyInit.addEventListener("click", function() {
      menuFourBody.classList.add("menu-body-active")
    })

    menuFourBodyClose.addEventListener("click", function() {
      menuFourBody.classList.remove("menu-body-active")
    })

    menuThirdBodyInit.addEventListener("click", function() {
      menuThirdBody.classList.add("menu-body-active")
    })

    menuThirdBodyClose.addEventListener("click", function() {
      menuThirdBody.classList.remove("menu-body-active")
    })
    function stopDefAction(evt) {
      evt.preventDefault();
  }

    phoneElem.addEventListener("click", stopDefAction) 

    phoneElem.addEventListener("click", function() {
      phoneElemBody.classList.add("phone-wrapper-active")
    })

    phoneElemExit.addEventListener("click", function() {
      phoneElemBody.classList.remove("phone-wrapper-active")
    })

    regionInitialButton.addEventListener("click", function () {
      regionPopup.classList.add("region-wrapper-active")
      body.classList.add("body-block")
    })
    regionExit.addEventListener("click", function () {
      regionPopup.classList.remove("region-wrapper-active")
      body.classList.remove("body-block")
    })
    regionClose.addEventListener("click", function () {
      regionPopup.classList.remove("region-wrapper-active")
      body.classList.remove("body-block")
    })

    burger.addEventListener("click", function() {
      menu.classList.add("menu-active")
      body.classList.add("body-block")
    })

    exitMenu.addEventListener("click", function() {
      menu.classList.remove("menu-active")
      body.classList.remove("body-block")
    })
  })