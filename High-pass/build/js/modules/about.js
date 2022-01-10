"use strict";

import JustValidate from 'just-validate';
const validate = new JustValidate('.about__form');

export function aboutForm() {
  validate
  .addField('#email', [
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