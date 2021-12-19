// Кастомный селект в header
const headerSelectRegion = document.querySelector('.region-select');

const choices = new Choices(headerSelectRegion, {
  searchEnabled: false,
});

// Кастомный селект в header
// Кастомный селект в header
const headerSelect = document.querySelector('.category-select');

const choices2 = new Choices(headerSelect, {
  searchEnabled: false,
  classNames: {
    containerOuter: 'choices2',
  },
});

// Кастомный селект в header