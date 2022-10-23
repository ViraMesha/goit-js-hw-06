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


for (const ingredient of ingredients) {
  const itemsEl = document.createElement('li');
  itemsEl.textContent = ingredient;
  itemsEl.classList.add('item');
  listEl.append(itemsEl);
}



