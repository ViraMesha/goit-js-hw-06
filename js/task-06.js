const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener("blur", handleInputValidation);

function handleInputValidation() {
    let length = textInputEl.value.length;
    if (length === Number(textInputEl.dataset.length)) {
        textInputEl.classList.add('valid');
        textInputEl.classList.remove('invalid')
    } else if (!textInputEl.value.length) {
        textInputEl.remove('valid', 'invalid');
    } else {
         textInputEl.classList.add('invalid');
        textInputEl.classList.remove('valid');
    }
}