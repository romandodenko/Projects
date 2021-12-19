const headerBtn = document.querySelector(".header__btn")
const searchWrapper = document.querySelector(".searchwrapper")
const searchExitBtn = document.querySelector(".searchwrapper__exit")

headerBtn.addEventListener("click", function(){
  searchWrapper.classList.add("search-active")
})

searchExitBtn.addEventListener("click", function() {
  searchWrapper.classList.remove("search-active")
})
