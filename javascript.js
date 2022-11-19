const password = document.querySelector('[name="password"]');
const confirmPassword = document.querySelector('[name="confirm_password"]');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

button.addEventListener('click',checkSubmission);
password.addEventListener('keyup',matchPassword);
confirmPassword.addEventListener('keyup',matchPassword);

function matchPassword() {
    if (password.value === "" || confirmPassword.value === "") {
        return;
    } else if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        password.classList.remove('match');
        confirmPassword.classList.remove('match');
    } else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        password.classList.add('match');
        confirmPassword.classList.add('match');
    }
}

function checkSubmission(e) {
    let invalid = false;
    inputs.forEach(input => {
        if (input.matches(':invalid')) {
            invalid = true;
        }
    });
    if (invalid) return;
    if (password.value !== confirmPassword.value) e.preventDefault();
}