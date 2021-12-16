//! register to login form
const login = document.getElementById("login");
const register = document.getElementById("register");
const loginBtn = document.querySelector('.popup__form-button_login');
const registerBtn = document.querySelector('.popup__form-button_register');

let registerFormBtn = document.querySelector(".popup__buttons-background");

registerBtn.onclick = function () {
    login.style.left = "-500px";
    register.style.left = "20px";
    registerFormBtn.style.left = "50%";
}

loginBtn.onclick = function () {
    login.style.left = "20px";
    register.style.left = "500px";
    registerFormBtn.style.left = "0";
}
//! register to login form








//! open login popup
const loginbtn = document.querySelectorAll('.login-container');
const popupRegister = document.getElementById('register-popup');
const popupCloseBtn = document.querySelector('.popup__close');

for (let i = 0; i < loginbtn.length; i++) {

    loginbtn[i].addEventListener('click', (e) => {
        if (popupRegister.classList.contains('active')) {
            popupRegister.classList.remove('active');
        }

        popupRegister.classList.add('active');
    });

    popupRegister.addEventListener('click', (e) => {
        if (!e.target.closest('.popup__content')) {
            popupRegister.classList.remove('active');
        }
    });

    popupCloseBtn.addEventListener('click', () => {
        popupRegister.classList.remove('active');
    })
}

//* get started btn
document.querySelector('.get_started_btn').onclick = function () {
    popupRegister.classList.add('active');
}
    