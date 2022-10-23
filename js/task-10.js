function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxEl = document.getElementById('boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');

const initialSize = 30;

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', onDestroy);


function createBoxes(amount) {
  amount = inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    const upgradedSize = initialSize + i * 10;
    const markup = document.createElement("div");
    markup.style.width = `${upgradedSize}px`;
    markup.style.height = `${upgradedSize}px`;
    markup.style.backgroundColor = getRandomHexColor();
    boxEl.appendChild(markup);
  }
}

function onDestroy() {
  boxEl.innerHTML = "";
}





