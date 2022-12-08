// Дается класс при скроле
const header = document.querySelector(".header");
console.log(header.clientHeight)
// const headerElement = document.querySelector(".header")

// const callback = function (entries, observer) {
//   if (entries[0].isIntersecting) {
//     headerElement.classList.remove("header-scroll")
//   } else {
//     headerElement.classList.add("header-scroll")
//   }
// }

// const headerObserver = new IntersectionObserver(callback);
// headerObserver.observe(headerElement);

// Дается класс при скроле

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