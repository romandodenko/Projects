const headerBtn = document.querySelector(".header__btn")
const searchWrapper = document.querySelector(".searchwrapper")
const searchExitBtn = document.querySelector(".searchwrapper__exit")
const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")
const body = document.querySelector("body")

headerBtn.addEventListener("click", function () {
  searchWrapper.classList.add("search-active")
  body.classList.add("body-block")
})

searchExitBtn.addEventListener("click", function () {
  searchWrapper.classList.remove("search-active")
  body.classList.remove("body-block")
})

burger.addEventListener("click", function () {
  nav.classList.toggle("nav-active")
  burger.classList.toggle("burger-active")
  body.classList.toggle("body-block")
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

$(function () {
  $(".questions__accordion").accordion({
    heightStyle: "content",
    active: false,
    collapsible: true,
  });
});

const navbarToggler = document.querySelector(".header__nav");
const navbarMenu = document.querySelector(".header__list");
const navbarLinks = document.querySelectorAll(".header__link");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

  smoothScroll(event);

  if (navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }

}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing Functions

function linear(t, b, c, d) {
  return c * t / d + b;
};

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};


navbarLinks.forEach(function (links) {
  links.addEventListener("click", function () {
    nav.classList.remove("nav-active")
    burger.classList.remove("burger-active")
    body.classList.remove("body-block")
  })
})