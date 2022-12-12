"use strict"

export function header() {
  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelectorAll(".burger");
    const menu = document.querySelector(".header__menu");
    const exitMenu = document.querySelector(".header__exit-menu");
    const body = document.querySelector("body");
    const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach(function(navLinks) {
      navLinks.addEventListener("click", function() {
        menu.classList.remove("menu-active")
        body.classList.remove("body-block")
        exitMenu.classList.remove("exit-menu-active")
      })
    })

    burger.forEach(function(burger) {
      burger.addEventListener("click",function() {
        menu.classList.toggle("menu-active")
        body.classList.toggle("body-block")
        exitMenu.classList.toggle("exit-menu-active")
      })
    })

    // burger.addEventListener("click", function () {
    //   menu.classList.add("menu-active")
    //   body.classList.add("body-block")
    //   exitMenu.classList.add("exit-menu-active")
    // })

    exitMenu.addEventListener("click", function () {
      menu.classList.remove("menu-active")
      body.classList.remove("body-block")
      exitMenu.classList.remove("exit-menu-active")
    })
  })
}