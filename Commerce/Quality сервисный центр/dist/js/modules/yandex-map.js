"use strict";

export function contactsMap() {
  document.addEventListener("DOMContentLoaded", function () {


    const mapClass = document.querySelector(".contacts__map")
    if (mapClass) {
      ymaps.ready(init);

      function init() {
        const myMap = new ymaps.Map(
          "map", {
            center: [55.345002554189634,86.07912534358597],
            zoom: 17,
          },
        );
        var myPlacemark = new ymaps.Placemark([55.345002554189634,86.07912534358597], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../../img/svg/marker-map.svg',
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
    }



    // для позднего появления карты 

    // let flag = 0; 

    // window.addEventListener("scroll", function () { 
    //   let scrollY = window.scrollY;
    //   let mapOffset = this.document.querySelector("#map").offsetTop;
    //   if (scrollY >= mapOffset - 1000 && flag == 0) {
    //     ymaps.ready(init);

    //       function init() {
    //       const myMap = new ymaps.Map(
    //         "map",
    //         { 
    //           center: [55.76963601332982,37.63668850000002],
    //           zoom: 14,
    //         },
    //       );
    //       var myPlacemark = new ymaps.Placemark([55.76963601332982,37.63668850000002], {}, {
    //         iconLayout: 'default#image',
    //         iconImageHref: '../../img/baloon.png',
    //         iconImageSize: [12, 12],
    //       });

    //       myMap.geoObjects.add(myPlacemark);
    //     }
    //     flag = 1;
    //   }

    // })
  })
}


// html

/* 
        <div class="contacts__map" id="map"></div>
<script src="https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU"></script>

*/