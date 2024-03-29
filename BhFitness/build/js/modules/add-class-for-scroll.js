"use strict"

const body = document.querySelector("body");
const headerElement = document.querySelector(".header")

export function scrollAddClass() {

  if (body.offsetWidth >= 1024) {

    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        headerElement.classList.remove("scroll")
      } else {
        headerElement.classList.add("scroll")
      } 
    }
  
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);
  }
}

/* 
    Рекомендуемое строение

 <div class="header">
  <div class="header__wrapper">
    <ul>
        <li>
            <a href="#">adsadsadsads</a>
        </li>
        <li>
            <a href="#">adsadsadsads</a>
        </li>
        <li>
            <a href="#">adsadsadsads</a>
        </li>
        <li>
            <a href="#">adsadsadsads</a>
        </li>
    </ul>
  </div>
</div> 
*/