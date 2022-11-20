const password = document.querySelector('[name="password"]');
const confirmPassword = document.querySelector('[name="confirm_password"]');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

button.addEventListener('click',checkSubmission);
password.addEventListener('keyup',matchPassword);
confirmPassword.addEventListener('keyup',matchPassword);
password.addEventListener('keyup',validatePassword);

function validatePassword() {
    if (password.value === "") {
        password.classList.remove('pattern_match');
        password.classList.remove('pattern_mismatch');
        return;
    }

    const pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}/;
    const result = pattern.test(password.value);
    if (!result) {
        password.classList.add('pattern_mismatch');
        password.classList.remove('pattern_match')
    } else {
        password.classList.remove('pattern_mismatch');
        password.classList.add('pattern_match')
    }
}

function matchPassword() {
    if (password.value === "" || confirmPassword.value === "") {
        confirmPassword.classList.remove('match');
        confirmPassword.classList.remove('error');
        return;
    } else if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('match');
    } else {
        confirmPassword.classList.remove('error');
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