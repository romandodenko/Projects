"use strict"

export function burgerOpen() {
  document.addEventListener("DOMContentLoaded", function () {
    const headerSelectRegion = document.querySelector('.region-select');
    const burger = document.querySelector(".header__burger");
    const headerWrapperNav = document.querySelector(".header__middle");
    const headerLoup = document.querySelector(".header__loup");
    const search = document.querySelector(".search");
    const linkAnchor = document.querySelectorAll(".link-anchor");
    const body = document.querySelector("body");
    const main = document.querySelector("main");

    linkAnchor.forEach(function(linkAnchor) {
      linkAnchor.addEventListener("click", function() {
        headerWrapperNav.classList.remove("nav-active")
        burger.classList.remove("burger-active")
        body.classList.remove("body-block")
      })
    })

    burger.addEventListener("click", function () {
      headerWrapperNav.classList.toggle("nav-active")
      burger.classList.toggle("burger-active")
      body.classList.toggle("body-block")
    })

    main.addEventListener("click", function() {
      search.classList.remove("search-active")
      body.classList.remove("body-block")
    })

    headerLoup.addEventListener("click", function() {
      search.classList.toggle("search-active")
      body.classList.toggle("body-block")
    })

    const choices = new Choices(headerSelectRegion, {
      searchEnabled: false,
    });










      var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    
      var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
      }
    
      var onPhonePaste = function (e) {
        var input = e.target,
          inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
          var pastedText = pasted.getData('Text');
          if (/\D/g.test(pastedText)) {
            // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
            // formatting will be in onPhoneInput handler
            input.value = inputNumbersValue;
            return;
          }
        }
      }
    
      var onPhoneInput = function (e) {
        var input = e.target,
          inputNumbersValue = getInputNumbersValue(input),
          selectionStart = input.selectionStart,
          formattedInputValue = "";
    
        if (!inputNumbersValue) {
          return input.value = "";
        }
    
        if (input.value.length != selectionStart) {
          // Editing in the middle of input, not last symbol
          if (e.data && /\D/g.test(e.data)) {
            // Attempt to input non-numeric symbol
            input.value = inputNumbersValue;
          }
          return;
        }
    
        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
          if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
          var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
          formattedInputValue = input.value = firstSymbols + " ";
          if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
          }
          if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
          }
          if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
          }
          if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
          }
        } else {
          formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
      }
      var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
          e.target.value = "";
        }
      }
      for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
      }

  })
}