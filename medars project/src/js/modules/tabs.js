"use strict";

export function tabs() {
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
}

/* 
            HTML


  <button class="btn" data-path="germany">Germany</button>

  <div class="content" data-target="germany">
      <div">
          <span>
            Что мы о нём знаем?
          </span>
          <p>
            Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
          </p>
          <a href="">
            В галерею
          </a>
      </div>
  </div>
          
              CSS

  .content {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .content-active {
    opacity: 1;
    pointer-events: visible;
    visibility: visible;
  } 

*/
