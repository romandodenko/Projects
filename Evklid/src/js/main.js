const headerBtn = document.querySelector(".header__btn")
const searchWrapper = document.querySelector(".searchwrapper")
const searchExitBtn = document.querySelector(".searchwrapper__exit")
const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")

headerBtn.addEventListener("click", function(){
  searchWrapper.classList.add("search-active")
})

searchExitBtn.addEventListener("click", function() {
  searchWrapper.classList.remove("search-active")
})

burger.addEventListener("click", function() {
  nav.classList.toggle("nav-active")
  burger.classList.toggle("burger-active")
})

const swiper = new Swiper('.hero-swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.hero-swiper__pagination',
    clickable: true,
  },
});

document.querySelectorAll(".btn-tabs").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".content-tabs").forEach(function (tabContent) {
      tabContent.classList.remove("tab-content-active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
  })
})

document.querySelectorAll(".btn-tabs").forEach(function (btns) {
  btns.addEventListener("click", function (event) {
    const path1 = event.currentTarget.dataset.path1

    document.querySelectorAll(".btn-tabs").forEach(function (btnsActive) {
      btnsActive.classList.remove("btn-active")
    })
    document.querySelector(`[data-target1="${path1}"]`).classList.add("btn-active")
  })
})

$( function() {
  $( ".questions__accordion" ).accordion({
    heightStyle: "content",
    active: false,
    collapsible: true,
  });
} );


