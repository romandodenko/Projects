const showInit = document.querySelector(".show-init");

if(showInit) {
  function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
    const show = document.querySelector(`.${showBtn}`); // кнопка показать ещё
    const collapse = document.querySelector(`.${collapseBtn}`); // кнопка скрывает показанные элементы
    const itemsList = document.querySelectorAll(`.${listItem}`);
    const list = document.querySelector(`.${lists}`);
    const productsLength = itemsList.length; // получаем количество карточек
    let items = itemsNum; // элементы которые изначально показаны на странице, у меня в примере 6 , если меняем здесь чисто то и меняем число в items ниже, где вешаем событие на collapse
    console.log(productsLength)
    if (productsLength > items) { // проверка, если элементов больше чем показано, то кнопка показать ещё появляется
      show.classList.add("is-visible")
      show.addEventListener("click", function () {
        items += 4; // число элементов которые будут добавляться при клике на кнопку показать ещё
  
        const array = Array.from(list.children); // собираем массив элементов в списке
  
        const visibleItems = array.slice(0, items) // видимые элементы
  
        visibleItems.forEach(function (visibleItems) {
          visibleItems.classList.add("is-visible")
        })
  
        if (items === productsLength) { // если элементов больше нет которые нужно показать кнопка скрывается
          show.classList.remove("is-visible")
          collapse.classList.add("is-visible")
        } else if (items > productsLength) {
          show.classList.remove("is-visible")
          collapse.classList.add("is-visible")
        }
      })
    }
  
    collapse.addEventListener("click", function () {
      itemsList.forEach(function (it) {
        it.classList.remove("is-visible")
      })
      items = itemsNum;
      show.classList.remove("is-hidden")
      collapse.classList.remove("is-visible")
      if (productsLength > items) {
        show.classList.add("is-visible")
      }
    })
  }
  showCode("button-show-italbio", 4, "button-collapse-italbio", "italbio-item", "italbio-list")
  showCode("button-show-biodevicepro", 4, "button-collapse-biodevicepro", "biodevicepro-item", "biodevicepro-list")
  showCode("button-show-biodeviceeco", 4, "button-collapse-biodeviceeco", "biodeviceeco-item", "biodeviceeco-list")
  showCode("button-show-biodevicegorizont", 4, "button-collapse-biodevicegorizont", "biodevicegorizont-item", "biodevicegorizont-list")
}

// showCode("класс кнопки которая показывает элементы", "число элементов которое показывается", "класс кнопки которая скрывает элементы", "класс элементов списка", "класс списка")
