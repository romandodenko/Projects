
const footerMap = document.querySelector(".footer__map");

if (footerMap) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "footer-map", {
        center: [45.035808074596346,38.97368699999997],
        zoom: 17,
      },
    );
    // var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.76932, 37.63952), {}, { // Если нужно чтобы точка была всегда по центру
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(45.035808074596346,38.97368699999997), {}, {
      iconLayout: 'default#image',
      iconImageHref: '../../img/baloon.png',
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
  }


  // для позднего появления карты 

  // let flag = 0; 

  // window.addEventListener("scroll", function () { 
  //   let scrollY = window.scrollY;
  //   let mapOffset = this.document.querySelector("#map").offsetTop;
  //   if (scrollY >= mapOffset - 1000 && flag == 0) {
  //     ymaps.ready(init);

  //     function init() {
  //       const myMap = new ymaps.Map(
  //         "map", {
  //           center: [59.94, 30.31],
  //           zoom: 14,
  //         },
  //       );
  //       // var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.76932, 37.63952), {}, { // Если нужно чтобы точка была всегда по центру
  //       var myPlacemark = new ymaps.Placemark([59.9431223132132, 30.321231321], {}, { // Если нужно чтобы точка была слегка смещена
  //         iconLayout: 'default#image',
  //         iconImageHref: '../../img/baloon.png',
  //         iconImageSize: [20, 20],
  //       });

  //       myMap.geoObjects.add(myPlacemark);
  //       myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  //       myMap.controls.remove('searchControl'); // удаляем поиск
  //       myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  //       myMap.controls.remove('typeSelector'); // удаляем тип
  //       myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  //       myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  //       myMap.controls.remove('rulerControl'); // удаляем контрол правил
  //     }
  //   }

  // })
}

const coontactsMap = document.querySelector(".contacts__map");

if (coontactsMap) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "contacts-map", {
        center: [45.035808074596346,38.97368699999997],
        zoom: 17,
      },
    );
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(45.035808074596346,38.97368699999997), {}, {
      iconLayout: 'default#image',
      iconImageHref: '../../img/baloon.png',
      iconImageSize: [30, 30],
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
  }
}