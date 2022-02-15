"use strict"

const callForm = document.querySelector(".form-call");
const exit = document.querySelector(".form-call__exit");
const callClose = document.querySelector(".form-call__close");
const callBtn = document.querySelector(".page-buttons__phone");
const callBody = document.querySelector(".form-call__body");
const body = document.querySelector("body");

export function formCall() {
  callBtn.addEventListener("click", function() {
    callForm.classList.toggle("form-call-active")
    body.classList.toggle("body-block")
    callBody.classList.toggle("body-active")
  })
  exit.addEventListener("click", function() {
    callForm.classList.remove("form-call-active")
    body.classList.remove("body-block")
    callBody.classList.remove("body-active")
  })
  callClose.addEventListener("click", function() {
    callForm.classList.remove("form-call-active")
    body.classList.remove("body-block")
    callBody.classList.remove("body-active")
  })
}