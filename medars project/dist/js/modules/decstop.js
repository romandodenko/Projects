"use strict"

  const searchBtn = document.querySelector(".decstop-burger__search-btn");
  const search = document.querySelector(".decstop-burger__wrapper-search"); 
  const searchExit = document.querySelector(".decstop-burger__search-exit");
  const decstopMenuExit = document.querySelector(".decstop-burger__exit");
  const decstopMenu = document.querySelector(".decstop-burger");
  const decstopBtnInit = document.querySelector(".header__burger-decstop");
  const body = document.querySelector("body");


  decstopBtnInit.addEventListener("click", function() {
    decstopMenu.classList.add("decstop-menu-active")
    body.classList.add("body-block")
  })

  decstopMenuExit.addEventListener("click", function() {
    decstopMenu.classList.remove("decstop-menu-active")
    body.classList.remove("body-block")
  })

  searchBtn.addEventListener("click", function() {
    search.classList.toggle("search-active")
  })

  searchExit.addEventListener("click", function() {
    search.classList.remove("search-active")
  })
