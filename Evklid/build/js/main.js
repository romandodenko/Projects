"use strict";var e=document.querySelector(".header__btn"),t=document.querySelector(".searchwrapper"),c=document.querySelector(".searchwrapper__exit"),r=document.querySelector(".header__burger"),n=document.querySelector(".header__nav"),a=document.querySelector("body");e.addEventListener("click",(function(){t.classList.add("search-active"),a.classList.add("body-block")})),c.addEventListener("click",(function(){t.classList.remove("search-active"),a.classList.remove("body-block")})),r.addEventListener("click",(function(){n.classList.toggle("nav-active"),r.classList.toggle("burger-active"),a.classList.toggle("body-block")})),new Swiper(".hero-swiper",{direction:"horizontal",pagination:{el:".hero-swiper__pagination",clickable:!0}}),document.querySelectorAll(".btn-tabs").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;document.querySelectorAll(".content-tabs").forEach((function(e){e.classList.remove("tab-content-active")})),document.querySelector('[data-target="'.concat(t,'"]')).classList.add("tab-content-active")}))})),document.querySelectorAll(".btn-tabs").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path1;document.querySelectorAll(".btn-tabs").forEach((function(e){e.classList.remove("btn-active")})),document.querySelector('[data-target1="'.concat(t,'"]')).classList.add("btn-active")}))})),$((function(){$(".questions__accordion").accordion({heightStyle:"content",active:!1,collapsible:!0})}));var o=document.querySelector(".header__nav"),i=document.querySelector(".header__list"),s=document.querySelectorAll(".header__link");o.addEventListener("click",(function(){o.classList.toggle("open-navbar-toggler"),i.classList.toggle("open")}));for(var l=0;l<s.length;l++)s[l].addEventListener("click",d);function d(e){!function(e){e.preventDefault();var t="#"===e.currentTarget.getAttribute("href")?"header":e.currentTarget.getAttribute("href"),c=document.querySelector(t).offsetTop,r=window.pageYOffset,n=c-r,a=null;window.requestAnimationFrame((function e(t){a||(a=t);var c,o,i,s=t-a;window.scrollTo(0,(c=s,o=r,i=n,(c/=500)<1?i/2*c*c*c+o:i/2*((c-=2)*c*c+2)+o)),s<1e3&&window.requestAnimationFrame(e)}))}(e),i.classList.contains("open")&&o.click()}s.forEach((function(e){e.addEventListener("click",(function(){n.classList.remove("nav-active"),r.classList.remove("burger-active"),a.classList.remove("body-block")}))}));