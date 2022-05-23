"use strict";

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".decstop-burger__main-btn").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll(".decstop-burger__list").forEach(function (tabContent) {
          tabContent.classList.remove("decstop-burger__list-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("decstop-burger__list-active")
      })
    })
  })