"use strict";

export function tabs() {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".works__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll(".works__body").forEach(function (tabContent) {
          tabContent.classList.remove("works-body-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("works-body-active")
      })
    })

    document.querySelectorAll(".works__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path1 = event.currentTarget.dataset.path1

        document.querySelectorAll(".works__button").forEach(function (tabContent) {
          tabContent.classList.remove("works-button-active")
        })
        document.querySelector(`[data-target1="${path1}"]`).classList.add("works-button-active")
      })
    })

    document.querySelectorAll(".popup-item-clicker").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path2 = event.currentTarget.dataset.path2

        document.querySelectorAll(".popup-item").forEach(function (tabContent) {
          tabContent.classList.remove("works-item-active")
        })
        document.querySelector(`[data-target2="${path2}"]`).classList.add("popup-item-active")
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