document.addEventListener("DOMContentLoaded", function() {
  const d31 = new Swiper('.d31-swp', {
    slidesPerGroup: 4,
    slidesPerView: "auto",
    breakpoints: {
      210: {
        slidesPerGroup: 2,
      },
      1010: {
        slidesPerGroup: 3,
      },
      1325: {
        slidesPerGroup: 4,
      }
    },
    lazy: {
      loadPrevNext: true,
    },
    navigation: {
      nextEl: '.d-31-button-next',
      prevEl: '.d-31-button-prev',
    },
  });
  
  const modalSlider = document.querySelector('.modal-swiper');
  let modalSwiper;
  
  function mobileSlider() {
    if (window.innerWidth <= 1350 && modalSlider.dataset.mobile == 'false') {
        modalSwiper = new Swiper(modalSlider, {
        slidesPerGroup: 1,
        slidesPerView: "auto",
        lazy: {
          loadPrevNext: true,
        },
        navigation: {
          nextEl: '.modal-d31__next',
          prevEl: '.modal-d31__prev',
        },
      });
      modalSlider.dataset.mobile = 'true';
    }
  
    mobileSlider()
  }
  window.addEventListener('resize', () => {
    mobileSlider();
  });
  
  document.querySelector(".modal-btn").addEventListener("click", function() {
    document.querySelector(".modal-d31").classList.add("modal-active")
    document.querySelector("body").classList.add("body-block")
  })
  
  document.querySelector(".modal-d31__btn").addEventListener("click", function() {
    document.querySelector(".modal-d31").classList.remove("modal-active")
    document.querySelector("body").classList.remove("body-block")
    document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active")
    document.querySelector(".oneclick__content").classList.remove("oneclick-dis")
  })

  document.querySelector(".modal-d31__close").addEventListener("click", function() {
    document.querySelector(".modal-d31").classList.remove("modal-active")
    document.querySelector("body").classList.remove("body-block")
    document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active")
    document.querySelector(".oneclick__content").classList.remove("oneclick-dis")
  })
  
  document.querySelector(".oneclick-btn").addEventListener("click", function() {
    document.querySelector(".oneclick").classList.add("oneclick-active")
    document.querySelector("body").classList.add("body-block")
  })
  
  document.querySelector(".oneclick__btn").addEventListener("click", function() {
    document.querySelector(".oneclick").classList.remove("oneclick-active")
    document.querySelector("body").classList.remove("body-block")
    document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active")
    document.querySelector(".oneclick__content").classList.remove("oneclick-dis")
  })

  document.querySelector(".thanks-btn").addEventListener("click", function() {
    document.querySelector(".oneclick").classList.remove("oneclick-active")
    document.querySelector("body").classList.remove("body-block")
    document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active")
    document.querySelector(".oneclick__content").classList.remove("oneclick-dis")
  })
  
  document.querySelector(".oneclick__close").addEventListener("click", function() {
    document.querySelector(".oneclick").classList.remove("oneclick-active")
    document.querySelector("body").classList.remove("body-block")
    document.querySelector(".oneclick__wrapthanks").classList.remove("wrapthanks-active")
    document.querySelector(".oneclick__content").classList.remove("oneclick-dis")
  })
  
  // Validation form
  new JustValidate('.oneclick-form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
        strength: {
          custom: '[а-яА-Я\d]',
       },
      },
      tel: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        minLength: 'Минимальное количество букв - 2',
        strength: 'Недопустимый формат',
      },
      tel: 'Введите ваш телефон'
    },
  
    submitHandler: function(form, values, ajax) {
      let formData = new FormData(form);
  
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function() {
  
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".oneclick__content").classList.add("oneclick-dis")
            document.querySelector(".oneclick__wrapthanks").classList.add("wrapthanks-active")
          }
        }
      }
  
      xhr.open("POST", "./resources/mail.php", true);
      xhr.send(formData)
  
      form.reset();
    }
  });
  // Validation form
})