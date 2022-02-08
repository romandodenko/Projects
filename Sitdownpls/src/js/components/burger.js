const main = document.querySelector("main")

document.querySelectorAll(".header__burger").forEach(function(burgerWrapper) {
  burgerWrapper.addEventListener("click", function() {
    burgerWrapper.classList.toggle("burger-active")
    document.querySelector(".nav-list-menu").classList.toggle("nav-active")
    document.querySelector("body").classList.toggle("body-block")
  })
})

main.addEventListener("click", function() {
  document.querySelectorAll(".header__burger").forEach(function(closeBur) {
    closeBur.classList.remove("burger-active")
  })
  document.querySelector(".nav-list-menu").classList.remove("nav-active")
  document.querySelector("body").classList.remove("body-block")
})