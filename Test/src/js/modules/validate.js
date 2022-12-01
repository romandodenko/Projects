// Валидация и маскирование
const initForm = document.querySelector(".form-block-form");
if (initForm) {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask({
    "mask": "+7-(999)-999-99-99",
  });
  im.mask(selector);
  new JustValidate('.form-block-form', {
    colorWrong: "#D53234",
    rules: {
      name: {
        required: true,
        minLength: 0,
        strength: {
          custom: '[а-яА-Я\d]',
        },
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      },
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        strength: 'Недопустимый формат',
      },
      tel: 'Введите ваш телефон'
    },

  });
}

// Валидация и маскирование