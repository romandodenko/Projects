"use strict";
import JustValidate from 'just-validate';

let infoContacts = document.querySelector(".contacts__info");
let closeBtn = document.querySelector(".contacts__close");
let openBtn = document.querySelector(".contacts__open");

export function contactsBtn() {
  closeBtn.addEventListener("click", function() {
    infoContacts.classList.add("info-disabled")
    openBtn.classList.add("open-btn-active")
    closeBtn.classList.add("close-btn-disabled")
  })
  
  openBtn.addEventListener("click", function() {
    infoContacts.classList.remove("info-disabled")
    openBtn.classList.remove("open-btn-active")
    closeBtn.classList.remove("close-btn-disabled")
  })
}

const validate = new JustValidate('.contacts__form');

export function contactsForm() {

  validate
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимальное количество символов - 3',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимальное количество символов - 30',
    },
  ])
  .addField('#mail', [
    {
      rule: 'required',
      errorMessage: 'Введите ваш e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Введите рабочий e-mail',
    },
  ]);

}