const form = document.querySelector('.login-form')
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const formOutput = { email: email.value, password: password.value };
    
    if (!email.value.length || !password.value.length) {
        alert("Всі поля повинні бути заповнені!!!");
    } console.log(formOutput);
    form.reset();
}

