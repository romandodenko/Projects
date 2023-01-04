const contactsFormInit = document.querySelector(".contacts-form");

if (contactsFormInit) {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  // const contactsButton = document.querySelector(".contacts-form__button");
  // const contactsInputEmail = document.getElementById("email");
  // const contactsInputTel = document.getElementById("tem");
  // const contactsInputText = document.getElementById("text");
  // const contactsLabelEmail = document.querySelector(".contacts-form__label_email");
  // const contactsInputs = document.querySelectorAll(".contacts-form__input");
  // contactsInputEmail.addEventListener("input", function () {
  //   if (contactsInputEmail.value.indexOf("@") == -1 && contactsInputEmail.value.indexOf(".com") == -1 && contactsInputEmail.value.indexOf(".ru") == -1) {
  //     const template = `
  //    <div class="js-validate-error-label" style="color: #FF6972" bis_skin_checked="1">Введите ваш e-mail</div>
  //    `
  //    if (!contactsLabelEmail.querySelector(".js-validate-error-label")) {
  //     contactsLabelEmail.insertAdjacentHTML("beforeend", template)
  //    }
  //     console.log("da")

  //   } else {
  //     contactsLabelEmail.querySelector(".js-validate-error-label").remove()
  //     console.log("das")
  //   }

  // })
  // contactsInputs.forEach(function(e) {
  //   e.addEventListener("input", function() {
  //     if(!document.querySelector(".js-validate-error-label") && contactsInputEmail.value != 0 && contactsInputTel.value != 0 && contactsInputText.value != 0) {
  //       contactsButton.classList.remove("disabled")
  //     } else {
  //       contactsButton.classList.add("disabled")
  //     }
  //   })
  // })
  // contactsButton.addEventListener("click", function () {
  //   if (contactsInputEmail.value.indexOf("@") == -1) {
  //     const template = `
  //     <div class="js-validate-error-label" style="color: #FF6972" bis_skin_checked="1">Введите ваш e-mail</div>
  //     `
  //     contactsLabelEmail.insertAdjacentHTML("beforeend", template)

  //   } else {
  //     contactsLabelEmail.querySelector(".js-validate-error-label").remove()
  //   }
  // })
  im.mask(selector);
  new JustValidate('.contacts-form', {
    colorWrong: "#FF6972",
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
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Введите ваше имя',
        minLength: 'Минимальное количество букв - 2',
        strength: 'Недопустимый формат',
      },
      tel: 'Введите ваш телефон',
      email: 'Введите ваш e-mail'
    },

  });
}

/* Обязательно инпутам добавить name и проверь пути к mail.php в js и html


<form action="mail.php" class="contacts__form" method="post" enctype="multipart/form-data">
<h3 class="contacts__form-subtitle">Заказать обратный звонок</h3>
<input type="hidden" name="admin_email[]" value="exigonyashka@yandex.ru">
<input type="hidden" name="form_subject" value="Заявка с сайта">
<label class="form-label margin-top"><input type="text" name="name" placeholder="Имя*" required
    data-validate-field="name" id="name" aria-label="Введите своё имя"></label>
<label class="form-label"><input type="tel" name="phone" placeholder="Телефон*" required
    data-validate-field="tel" data-validate-rules="phone" id="tel"
    aria-label="Введите свой телефон"></label>
<button class="contacts__form-btn" type="submit">Заказать</button>
</form> 


*/