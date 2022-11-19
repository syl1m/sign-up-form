const password = document.querySelector('[name="password"]');
const confirmPassword = document.querySelector('[name="confirm_password"]');
const button = document.querySelector('button');
button.addEventListener('click',matchPassword);

function matchPassword(e) {
    if (password.value === "" || confirmPassword.value === "") {
        return;
    } else if (password.value !== confirmPassword.value) {
        e.preventDefault();
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
