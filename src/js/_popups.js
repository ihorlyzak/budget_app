//! register to login popup
const login = document.getElementById('login');
const register = document.getElementById('register');
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
//! register to login popup


//! open register popup
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
//! open register popup


//! open expenses popup
const addExpense = document.querySelectorAll('.expenses__element');
const addExpensePopup = document.getElementById('expenses__popup');
// open popup
addExpense.forEach(element => {
    element.onclick = function() {
        addExpensePopup.classList.add('active');
    }
});

// close popup
addExpensePopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close')) {
        addExpensePopup.classList.remove('active');
    }
    if (!e.target.closest('.popup__content')) {
        addExpensePopup.classList.remove('active');
    }
});

//! open expenses popup


//! open income popup
const addIncome = document.querySelectorAll('.income__element');
const addIncomePopup = document.getElementById('income__popup');
// open popup
addIncome.forEach(element => {
    element.onclick = function() {
        addIncomePopup.classList.add('active');
    }
});

// close popup
addIncomePopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close')) {
        addIncomePopup.classList.remove('active');
    }
    if (!e.target.closest('.popup__content')) {
        addIncomePopup.classList.remove('active');
    }
});

//! open expenses popup