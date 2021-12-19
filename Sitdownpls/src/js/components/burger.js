document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".header__burger").classList.toggle("burger-active")
  document.querySelector(".nav-list-menu").classList.toggle("nav-active")
})