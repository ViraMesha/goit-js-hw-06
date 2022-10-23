let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');

const incrementBtnEl = document.querySelector('[data-action="increment"]');


decrementBtnEl.addEventListener("click", handleDecrement)

function handleDecrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}


incrementBtnEl.addEventListener('click', handleIncrement)

function handleIncrement() {
counterValue += 1;
    valueEl.textContent = counterValue;
}

