"use strict"

  document.addEventListener("DOMContentLoaded", function () {

    const openBtnOne = document.querySelector(".more-item-1")
    const collapseBtnOne = document.querySelector(".collapse-item-1")
    const itemHiddenOne = document.querySelectorAll(".item-hidden-1")
    const openBtnTwo = document.querySelector(".more-item-2")
    const collapseBtnTwo = document.querySelector(".collapse-item-2")
    const itemHiddenTwo = document.querySelectorAll(".item-hidden-2")
    const openBtnThird = document.querySelector(".more-item-3")
    const collapseBtnThird = document.querySelector(".collapse-item-3")
    const itemHiddenThird = document.querySelectorAll(".item-hidden-3")
    let itemOne = gsap.timeline({
      paused: true
    })
    let itemTwo = gsap.timeline({
      paused: true
    })
    let itemThird = gsap.timeline({
      paused: true
    })

    itemOne
      .to(itemHiddenOne, {
        duration: .4,
        opacity: 1,
        visibility: "visible",
        display: "block"
      })

      itemTwo
      .to(itemHiddenTwo, {
        duration: .4,
        opacity: 1,
        visibility: "visible",
        display: "block"
      })

      itemThird
      .to(itemHiddenThird, {
        duration: .4,
        opacity: 1,
        visibility: "visible",
        display: "block"
      })

    openBtnOne.addEventListener("click", () => {
      collapseBtnOne.classList.add("collapse-btn-active")
      openBtnOne.classList.add("open-btn-disabled")
      itemOne.timeScale(1).play()
    })

    collapseBtnOne.addEventListener("click", () => {
      collapseBtnOne.classList.remove("collapse-btn-active")
      openBtnOne.classList.remove("open-btn-disabled")
      itemOne.timeScale(2).reverse()
    })

    openBtnTwo.addEventListener("click", () => {
      collapseBtnTwo.classList.add("collapse-btn-active")
      openBtnTwo.classList.add("open-btn-disabled")
      itemTwo.timeScale(1).play()
    })

    collapseBtnTwo.addEventListener("click", () => {
      collapseBtnTwo.classList.remove("collapse-btn-active")
      openBtnTwo.classList.remove("open-btn-disabled")
      itemTwo.timeScale(2).reverse()
    })

    openBtnThird.addEventListener("click", () => {
      collapseBtnThird.classList.add("collapse-btn-active")
      openBtnThird.classList.add("open-btn-disabled")
      itemThird.timeScale(1).play()
    })

    collapseBtnThird.addEventListener("click", () => {
      collapseBtnThird.classList.remove("collapse-btn-active")
      openBtnThird.classList.remove("open-btn-disabled")
      itemThird.timeScale(2).reverse()
    })
  })
