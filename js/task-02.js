const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const itemsEl = document.createElement('li');

const arr = [];

for (const ingredient of ingredients) {
  const itemsEl = document.createElement('li');
  itemsEl.textContent = ingredient;
  itemsEl.classList.add('item');
  arr.push(itemsEl)
}

 listEl.append(...arr);


