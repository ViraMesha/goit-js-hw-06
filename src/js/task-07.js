const range = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

range.addEventListener("input", handleTextSize);


function handleTextSize() {
    const value = range.value;
    textEl.style.fontSize = `${value}px`;
}

