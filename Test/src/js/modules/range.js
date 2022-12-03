// Калькулятор
// Стоимость
const costRangeSlider = document.querySelector(".cost-range");

const installmentRangeSlider = document.querySelector(".installment-range");

const termRangeSlider = document.querySelector(".term-range");

noUiSlider.create(costRangeSlider, {
  start: [0],
  animationDuration: 100,
  connect: [true,true],
  step: 1,
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 1000000,
    'max': 6000000,
  }
});

const costInput = document.querySelector(".cost-input");

costRangeSlider.noUiSlider.on('update', function (values, handle) {
  costInput.value = Math.round(values[handle]);

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
});

const setRangeSliderCost = (i, value) => {
  let arr = [null, null]
  arr[i] = value;
  costRangeSlider.noUiSlider.set(arr)
}

costInput.addEventListener('change', function () {
  costRangeSlider.noUiSlider.set(this.value);
});
// Стоимость

// Взнос

noUiSlider.create(installmentRangeSlider, {
  start: [0],
  animationDuration: 100,
  connect: [true,true],
  step: 1,
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 10,
    'max': 60,
  }
});

const installmentInput = document.querySelector(".installment-input");

installmentRangeSlider.noUiSlider.on('update', function (values, handle) {
  installmentInput.value = Math.round(values[handle]);
  if (installmentInput.value == 10) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.10)
  } else if (installmentInput.value == 11) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.11)
  } else if (installmentInput.value == 12) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.12)
  } else if (installmentInput.value == 13) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.13)
  } else if (installmentInput.value == 14) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.14)
  } else if (installmentInput.value == 15) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.15)
  } else if (installmentInput.value == 16) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.16)
  } else if (installmentInput.value == 17) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.17)
  } else if (installmentInput.value == 18) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.18)
  } else if (installmentInput.value == 19) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.19)
  } else if (installmentInput.value == 20) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.20)
  } else if (installmentInput.value == 21) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.21)
  } else if (installmentInput.value == 22) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.22)
  } else if (installmentInput.value == 23) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.23)
  } else if (installmentInput.value == 24) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.24)
  } else if (installmentInput.value == 25) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.25)
  } else if (installmentInput.value == 26) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.26)
  } else if (installmentInput.value == 27) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.27)
  } else if (installmentInput.value == 28) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.28)
  } else if (installmentInput.value == 29) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.29)
  } else if (installmentInput.value == 30) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.30)
  } else if (installmentInput.value == 31) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.31)
  } else if (installmentInput.value == 32) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.32)
  } else if (installmentInput.value == 33) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.33)
  } else if (installmentInput.value == 34) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.34)
  } else if (installmentInput.value == 35) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.35)
  } else if (installmentInput.value == 36) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.36)
  } else if (installmentInput.value == 37) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.37)
  } else if (installmentInput.value == 38) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.38)
  } else if (installmentInput.value == 39) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.39)
  } else if (installmentInput.value == 40) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.40)
  } else if (installmentInput.value == 41) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.41)
  } else if (installmentInput.value == 42) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.42)
  } else if (installmentInput.value == 43) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.43)
  } else if (installmentInput.value == 44) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.44)
  } else if (installmentInput.value == 45) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.45)
  } else if (installmentInput.value == 46) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.46)
  } else if (installmentInput.value == 47) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.47)
  } else if (installmentInput.value == 48) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.48)
  } else if (installmentInput.value == 49) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.49)
  } else if (installmentInput.value == 50) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.50)
  } else if (installmentInput.value == 51) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.51)
  } else if (installmentInput.value == 52) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.52)
  } else if (installmentInput.value == 53) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.53)
  } else if (installmentInput.value == 54) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.54)
  } else if (installmentInput.value == 55) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.55)
  } else if (installmentInput.value == 56) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.56)
  } else if (installmentInput.value == 57) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.57)
  } else if (installmentInput.value == 58) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.58)
  } else if (installmentInput.value == 59) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.59)
  } else if (installmentInput.value == 60) {
    document.querySelector(".installment-symm-input").value = Math.round(document.querySelector(".cost-input").value * 0.60)
  }

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
});

const setRangeSliderInstallment = (i, value) => {
  let arr = [null, null]
  arr[i] = value;
  installmentRangeSlider.noUiSlider.set(arr)
}

installmentInput.addEventListener('change', function () {
  installmentRangeSlider.noUiSlider.set(this.value);
});

// Взнос

// Срок

noUiSlider.create(termRangeSlider, {
  start: [0],
  animationDuration: 100,
  connect: [true,true],
  step: 1,
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 1,
    'max': 60,
  }
});

const termInput = document.querySelector(".term-input");

termRangeSlider.noUiSlider.on('update', function (values, handle) {
  termInput.value = Math.round(values[handle]);

  // Ежемесячный платеж

  createMonthlyPayment()

  // Ежемесячный платеж

  // Сумма договора лизинга

  createAmountDeal()

  // Сумма договора лизинга
});

const setRangeSliderTerm = (i, value) => {
  let arr = [null, null]
  arr[i] = value;
  termRangeSlider.noUiSlider.set(arr)
}

termInput.addEventListener('change', function () {
  termRangeSlider.noUiSlider.set(this.value);
});
// Срок

// Мин - макс у инпута

const inp = document.querySelectorAll('input[type=number]');
Array.from(inp).forEach(input => {
  const min = +input.min;
  const max = +input.max;

  input.addEventListener('input', (e) => {
    const value = input.value;
    if (value > max) {
      input.value = max
    } else if (value < min) {
      input.value = min
    }
  })
});

// Мин - макс у инпута