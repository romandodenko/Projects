"use strict"

window.onload = function () {
function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt("max");
da.init();


/*
       Как работает: 
       1) пишешь атрибут data-da в нём указываешь элемент куда он должен перейти 
       2) разрешение, на котором это должно произойти 
       3) и место куда оно перейдёт


<div data-da=".div2, 1280, 1" class="div three">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque!</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque reiciendis quidem accusantium dolor sed eveniet doloribus ex impedit odit.</p>
</div> 

<div class="div2"></div>

*/
const html = document.querySelector('html');
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
if(sidebar) {
	window.onscroll = function() {
		let top = this.scrollY
		showSidebar()
	}
	
	function showSidebar () {
		
		if (html.scrollTop > 100) {
			sidebar.classList.add('_active');
		} else {
			sidebar.classList.remove('_active');
		}
		
	}
}

const burgerBtn = document.querySelectorAll('.menu__burger');
const burgerCloseBtn = document.querySelector('.menu__close');
const burgerMenu = document.querySelector('.menu');
if (burgerBtn) {
	burgerBtn.forEach(item => {
		item.addEventListener("click", () => {
			burgerMenu.classList.add('_active');
			// body.classList.add('_scroll-lock');

		});
	})
}
if (burgerCloseBtn) {
	burgerCloseBtn.addEventListener("click", () => {
		burgerMenu.classList.remove('_active');
		// body.classList.remove('_scroll-lock');

	});


	
 {
	const lineEq = (y2, y1, x2, x1, currentVal) => {
			// y = mx + b 
			var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
			return m * currentVal + b;
	};

	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

	const setRange = (obj) => {
			for(let k in obj) {
					if( obj[k] == undefined ) {
							obj[k] = [0,0];
					}
					else if( typeof obj[k] === 'number' ) {
							obj[k] = [-1*obj[k],obj[k]];
					}
			}
	};

	// from http://www.quirksmode.org/js/events_properties.html#position
const getMousePos = (e) => {
			let posx = 0;
			let posy = 0;
	if (!e) e = window.event;
	if (e.pageX || e.pageY) 	{
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) 	{
		posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return { x : posx, y : posy }
};
	
	class Item {
	constructor(el, options) {
					this.DOM = {el: el};

					this.options = {   
							image: {
									translation : {x: -10, y: -10, z: 0},
									rotation : {x: 0, y: 0, z: 0}
							},
							title: {
									translation : {x: 20, y: 10, z: 0}
							},
							text: {
									translation : {x: 20, y: 50, z: 0},
									rotation : {x: 0, y: 0, z: -20}
							},
							deco: {
									translation : {x: -20, y: 0, z: 0},
									rotation : {x: 0, y: 0, z: 3}
							},
							shadow: {
									translation : {x: 30, y: 20, z: 0},
									rotation : {x: 0, y: 0, z: -2},
									reverseAnimation : {duration: 2, ease: 'Back.easeOut'}
							},
							content: {
									translation : {x: 5, y: 3, z: 0}
							}
					};
					Object.assign(this.options, options);

					this.DOM.animatable = {};
					this.DOM.animatable.image = this.DOM.el.querySelector('.box__img');
					this.DOM.animatable.title = this.DOM.el.querySelector('.box__title');
					this.DOM.animatable.text = this.DOM.el.querySelector('.box__text');
					this.DOM.animatable.deco = this.DOM.el.querySelector('.box__deco');
					this.DOM.animatable.shadow = this.DOM.el.querySelector('.box__shadow');
					this.DOM.animatable.content = this.DOM.el.querySelector('.box__content');
					
					this.initEvents();
			}
			initEvents() { 
					let enter = false;
					this.mouseenterFn = () => {
							if ( enter ) {
									enter = false;
							};
							clearTimeout(this.mousetime);
							this.mousetime = setTimeout(() => enter = true, 40);
					};
					this.mousemoveFn = ev => requestAnimationFrame(() => {
							if ( !enter ) return;
							this.tilt(ev);
					});
					this.mouseleaveFn = (ev) => requestAnimationFrame(() => {
							if ( !enter || !allowTilt ) return;
							enter = false;
							clearTimeout(this.mousetime);

							for (let key in this.DOM.animatable ) {
									if( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {continue;}
									TweenMax.to(this.DOM.animatable[key],
											this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.duration || 0 : 1.5, {
											ease: this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.ease || 'Power2.easeOut' : 'Power2.easeOut',
											x: 0,
											y: 0,
											z: 0,
											rotationX: 0,
											rotationY: 0,
											rotationZ: 0
									});
							}
					});
					this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
					this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
					this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
			}
			tilt(ev) {
					if ( !allowTilt ) return;
					const mousepos = getMousePos(ev);
					// Document scrolls.
					const docScrolls = {
							left : document.body.scrollLeft + document.documentElement.scrollLeft, 
							top : document.body.scrollTop + document.documentElement.scrollTop
					};
					const bounds = this.DOM.el.getBoundingClientRect();
					// Mouse position relative to the main element (this.DOM.el).
					const relmousepos = { 
							x : mousepos.x - bounds.left - docScrolls.left, 
							y : mousepos.y - bounds.top - docScrolls.top 
					};
					
					// Movement settings for the animatable elements.
					for (let key in this.DOM.animatable) {
							if ( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {
									continue;
							}
							
							let t = this.options[key] != undefined ? this.options[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
									r = this.options[key] != undefined ? this.options[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0};

							setRange(t);
							setRange(r);
							
							const transforms = {
									translation : {
											x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
											y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
											z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
									},
									rotation : {
											x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
											y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
											z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
									}
							};

							TweenMax.to(this.DOM.animatable[key], 1.5, {
									ease: 'Power1.easeOut',
									x: transforms.translation.x,
									y: transforms.translation.y,
									z: transforms.translation.z,
									rotationX: transforms.rotation.x,
									rotationY: transforms.rotation.y,
									rotationZ: transforms.rotation.z
							});
					}
			}
	}

	class Grid {
			constructor(el) {
					this.DOM = {el: el};
					this.items = [];
					let gridItems = document.querySelectorAll('.grid__item');
					if (gridItems) {
						Array.from(gridItems).forEach((item) => {
							const itemObj = new Item(item);
							this.items.push(itemObj);	
					});
					}
			}
	}

	let allowTilt = true;
	new Grid(document.querySelector('.grid'));
	}
}
const accordionItems = document.querySelectorAll('.accordion-item')

if (accordionItems.length > 0) {
  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-init')

    accordionHeader.addEventListener('click', () => {

      const openItem = document.querySelector('.accordion-open')

      toggleItem(item)

      if (openItem && openItem !== item) {
        toggleItem(openItem)
      }
    })
  })
}
const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion-content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}




/* 

                HTML  

<div class="accordion__list">

<div class="accordion__item">
    <div class="accordion__header">
        <h3 class="accordion__title">What's an accordion?</h3>
    </div>

    <div class="accordion__content">
        <p class="accordion__description">
            An accordion always contains the category title, an expanded and a collapsed state, 
            an icon indicating expansion, and the spacing between them.
        </p>
    </div>
</div>



<div class="accordion__item">
  <div class="accordion__header">
      <h3 class="accordion__title">What's an accordion?</h3>
  </div>

  <div class="accordion__content">
      <p class="accordion__description">
          An accordion always contains the category title, an expanded and a collapsed state, 
          an icon indicating expansion, and the spacing between them.
      </p>
  </div>
</div>


</div> 


               CSS

.accordion__list {
  display: grid;
  row-gap: .75rem;
  padding: 2rem 1rem;
  background-color: var(--container-color);
  border-radius: .5rem;
  box-shadow: 0 12px 32px rgba(51, 51, 51, 0.1);
}

.accordion__title {
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: 400;
  margin-top: .15rem;
  transition: .2s;
}

.accordion__header {
  display: flex;
  column-gap: .5rem;
  padding: 1.25rem 1.25rem 1.25rem 1rem;
  cursor: pointer;
  justify-content: space-between;
}

.accordion__description {
  padding: 0 1.25rem 1.25rem 3rem;
  font-size: var(--smaller-font-size);
}

.accordion__content {
  overflow: hidden;
  height: 0;
  transition: all .25s ease;
}
.accordion-open.accordion__icon {
    transform: rotate(45 deg);
  }

  .accordion-open.accordion__title {
    font-weight: 600;
  }

*/
}