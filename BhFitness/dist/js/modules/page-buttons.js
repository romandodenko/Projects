"use strict"

const topBtn = document.querySelector(".page-buttons__top") 

export function page() {
  function top() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }
  topBtn.addEventListener("click", function() {
    top()
  })
}