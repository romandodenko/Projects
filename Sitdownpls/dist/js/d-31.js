"use strict";document.addEventListener("DOMContentLoaded",(function(){new Swiper(".d31-swp",{slidesPerGroup:4,slidesPerView:"auto",breakpoints:{210:{slidesPerGroup:2},1010:{slidesPerGroup:3},1325:{slidesPerGroup:4}},lazy:{loadPrevNext:!0},navigation:{nextEl:".d-31-button-next",prevEl:".d-31-button-prev"}});var e=document.querySelector(".modal-swiper");function t(){window.innerWidth<=1350&&"false"==e.dataset.mobile&&(new Swiper(e,{slidesPerGroup:1,slidesPerView:"auto",lazy:{loadPrevNext:!0},navigation:{nextEl:".modal-d31__next",prevEl:".modal-d31__prev"}}),e.dataset.mobile="true"),t()}window.addEventListener("resize",(function(){t()})),document.querySelector(".modal-btn").addEventListener("click",(function(){document.querySelector(".modal-d31").classList.add("modal-active"),document.querySelector("body").classList.add("body-block")})),document.querySelector(".modal-d31__btn").addEventListener("click",(function(){document.querySelector(".modal-d31").classList.remove("modal-active"),document.querySelector("body").classList.remove("body-block"),document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active"),document.querySelector(".oneclick__content").classList.remove("oneclick-dis")})),document.querySelector(".modal-d31__close").addEventListener("click",(function(){document.querySelector(".modal-d31").classList.remove("modal-active"),document.querySelector("body").classList.remove("body-block"),document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active"),document.querySelector(".oneclick__content").classList.remove("oneclick-dis")})),document.querySelector(".oneclick-btn").addEventListener("click",(function(){document.querySelector(".oneclick").classList.add("oneclick-active"),document.querySelector("body").classList.add("body-block")})),document.querySelector(".oneclick__btn").addEventListener("click",(function(){document.querySelector(".oneclick").classList.remove("oneclick-active"),document.querySelector("body").classList.remove("body-block"),document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active"),document.querySelector(".oneclick__content").classList.remove("oneclick-dis")})),document.querySelector(".thanks-btn").addEventListener("click",(function(){document.querySelector(".oneclick").classList.remove("oneclick-active"),document.querySelector("body").classList.remove("body-block"),document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active"),document.querySelector(".oneclick__content").classList.remove("oneclick-dis")})),document.querySelector(".oneclick__close").addEventListener("click",(function(){document.querySelector(".oneclick").classList.remove("oneclick-active"),document.querySelector("body").classList.remove("body-block"),document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active"),document.querySelector(".oneclick__content").classList.remove("oneclick-dis")})),new JustValidate(".oneclick-form",{colorWrong:"#D11616",rules:{name:{required:!0,minLength:2,strength:{custom:"[а-яА-Яd]"}},tel:{required:!0}},messages:{name:{required:"Введите ваше имя",minLength:"Минимальное количество букв - 2",strength:"Недопустимый формат"},tel:"Введите ваш телефон"},submitHandler:function(e,t,c){var o=new FormData(e),n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(document.querySelector(".oneclick__content").classList.add("oneclick-dis"),document.querySelector(".oneclick__wrapthanks").classList.add("wrapthanks-active"))},n.open("POST","./resources/mail.php",!0),n.send(o),e.reset()}})}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImQtMzEuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1Blckdyb3VwIiwiYnJlYWtwb2ludHMiLCJsYXp5IiwibG9hZFByZXZOZXh0IiwibmV4dEVsIiwibmF2aWdhdGlvbiIsIm1vZGFsU2xpZGVyIiwicXVlcnlTZWxlY3RvciIsIm1vYmlsZVNsaWRlciIsIndpbmRvdyIsImRhdGFzZXQiLCJtb2JpbGUiLCJpbm5lcldpZHRoIiwibW9kYWxTd2lwZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJKdXN0VmFsaWRhdGUiLCJjb2xvcldyb25nIiwicnVsZXMiLCJzdHJlbmd0aCIsImN1c3RvbSIsIm5hbWUiLCJ0ZWwiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInN1Ym1pdEhhbmRsZXIiLCJ4aHIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJ2YWx1ZXMiLCJhamF4IiwiZm9ybSIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VuZCIsImZvcm1EYXRhIiwicmVzZXQiLCJzdGF0dXMiLCJvcGVuIl0sIm1hcHBpbmdzIjoiYUFBQUEsU0FBU0MsaUJBQWlCLG9CQUFvQixXQUNoQyxJQUFJQyxPQUFPLFdBQVksQ0FEckNGLGVBQVNDLEVBQ1BFLGNBQWdCRCxPQUNkRSxZQUFBQSxDQUNBRCxJQUFBQSxDQUNBRSxlQUFhLEdBRVRELEtBQUFBLENBRlNBLGVBQUEsR0FLVEEsS0FBQUEsQ0FMU0EsZUFBQSxJQU9MRSxLQUFBLENBVnlCQyxjQUFBLEdBZS9CQSxXQUFBQSxDQWYrQkMsT0FBQSxvQkFpQmpDQyxPQUFVLHVCQWpCWixJQUFBQyxFQUFBVixTQUFBVyxjQUFBLGlCQTBCQSxTQUFTQyxJQUFUQyxPQUFTRCxZQUFlLE1BQUEsU0FBQUYsRUFBQUksUUFBQUMsU0FDWEMsSUFBUGQsT0FBQVEsRUFBNkJBLENBQzdCTyxlQUFrQmYsRUFDbEJFLGNBQWMsT0FDZEQsS0FBQUEsQ0FDQUcs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RXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZDMxID0gbmV3IFN3aXBlcignLmQzMS1zd3AnLCB7XHJcbiAgICBzbGlkZXNQZXJHcm91cDogNCxcclxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMjEwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMTA6IHtcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgfSxcclxuICAgICAgMTMyNToge1xyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGF6eToge1xyXG4gICAgICBsb2FkUHJldk5leHQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuZC0zMS1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5kLTMxLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgbW9kYWxTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc3dpcGVyJyk7XHJcbiAgbGV0IG1vZGFsU3dpcGVyO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIG1vYmlsZVNsaWRlcigpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMzUwICYmIG1vZGFsU2xpZGVyLmRhdGFzZXQubW9iaWxlID09ICdmYWxzZScpIHtcclxuICAgICAgICBtb2RhbFN3aXBlciA9IG5ldyBTd2lwZXIobW9kYWxTbGlkZXIsIHtcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgICBsYXp5OiB7XHJcbiAgICAgICAgICBsb2FkUHJldk5leHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICBuZXh0RWw6ICcubW9kYWwtZDMxX19uZXh0JyxcclxuICAgICAgICAgIHByZXZFbDogJy5tb2RhbC1kMzFfX3ByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBtb2RhbFNsaWRlci5kYXRhc2V0Lm1vYmlsZSA9ICd0cnVlJztcclxuICAgIH1cclxuICBcclxuICAgIG1vYmlsZVNsaWRlcigpXHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICBtb2JpbGVTbGlkZXIoKTtcclxuICB9KTtcclxuICBcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWQzMVwiKS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYWN0aXZlXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiYm9keS1ibG9ja1wiKVxyXG4gIH0pXHJcbiAgXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kMzFfX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWQzMVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYWN0aXZlXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1ibG9ja1wiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja19fd3JhcHRoYW5rc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwid3JhcHRoYW5rcy1hY3RpdmVcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lY2xpY2tfX2NvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9uZWNsaWNrLWRpc1wiKVxyXG4gIH0pXHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZDMxX19jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWQzMVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYWN0aXZlXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1ibG9ja1wiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja19fd3JhcHRoYW5rc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwid3JhcHRoYW5rcy1hY3RpdmVcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lY2xpY2tfX2NvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9uZWNsaWNrLWRpc1wiKVxyXG4gIH0pXHJcbiAgXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGljay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja1wiKS5jbGFzc0xpc3QuYWRkKFwib25lY2xpY2stYWN0aXZlXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiYm9keS1ibG9ja1wiKVxyXG4gIH0pXHJcbiAgXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja19fYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lY2xpY2tcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9uZWNsaWNrLWFjdGl2ZVwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktYmxvY2tcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lY2xpY2tfX3dyYXB0aGFua3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIndyYXB0aGFua3MtYWN0aXZlXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZWNsaWNrX19jb250ZW50XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvbmVjbGljay1kaXNcIilcclxuICB9KVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoYW5rcy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwib25lY2xpY2stYWN0aXZlXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1ibG9ja1wiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja19fd3JhcHRoYW5rc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwid3JhcHRoYW5rcy1hY3RpdmVcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lY2xpY2tfX2NvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9uZWNsaWNrLWRpc1wiKVxyXG4gIH0pXHJcbiAgXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja19fY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwib25lY2xpY2stYWN0aXZlXCIpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1ibG9ja1wiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja19fd3JhcHRoYW5rc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwid3JhcHRoYW5rcy1hY3RpdmVcIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lY2xpY2tfX2NvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9uZWNsaWNrLWRpc1wiKVxyXG4gIH0pXHJcbiAgXHJcbiAgLy8gVmFsaWRhdGlvbiBmb3JtXHJcbiAgbmV3IEp1c3RWYWxpZGF0ZSgnLm9uZWNsaWNrLWZvcm0nLCB7XHJcbiAgICBjb2xvcldyb25nOiAnI0QxMTYxNicsXHJcbiAgICBydWxlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWluTGVuZ3RoOiAyLFxyXG4gICAgICAgIHN0cmVuZ3RoOiB7XHJcbiAgICAgICAgICBjdXN0b206ICdb0LAt0Y/QkC3Qr1xcZF0nLFxyXG4gICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdGVsOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiAn0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPJyxcclxuICAgICAgICBtaW5MZW5ndGg6ICfQnNC40L3QuNC80LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INCx0YPQutCyIC0gMicsXHJcbiAgICAgICAgc3RyZW5ndGg6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgICAgfSxcclxuICAgICAgdGVsOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9J1xyXG4gICAgfSxcclxuICBcclxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0sIHZhbHVlcywgYWpheCkge1xyXG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcbiAgXHJcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICBcclxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZWNsaWNrX19jb250ZW50XCIpLmNsYXNzTGlzdC5hZGQoXCJvbmVjbGljay1kaXNcIilcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVjbGlja19fd3JhcHRoYW5rc1wiKS5jbGFzc0xpc3QuYWRkKFwid3JhcHRoYW5rcy1hY3RpdmVcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiLi9yZXNvdXJjZXMvbWFpbC5waHBcIiwgdHJ1ZSk7XHJcbiAgICAgIHhoci5zZW5kKGZvcm1EYXRhKVxyXG4gIFxyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gVmFsaWRhdGlvbiBmb3JtXHJcbn0pIl19
