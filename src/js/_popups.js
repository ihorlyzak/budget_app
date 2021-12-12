    //! register form
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


        // register form
        // const login = document.getElementById("login");
        // const register = document.getElementById("register");
    
    
        // let registerFormBtn = document.querySelector(".popup__buttons-background");
        // console.log(registerFormBtn);
    
        // const loginBtn = document.querySelector('.popup__form-button_login');
        // const registerBtn = document.querySelector('.popup__form-button_register');
        // const popupContent = document.getElementById('register-popup');
        // console.log(loginBtn);
        // console.log(registerBtn);
    
        // registerBtn.onclick = function () {
        //     login.style.left = "-500px";
        //     register.style.left = "20px";
        //     registerFormBtn.style.left = "50%";
        // }
    
        // loginBtn.onclick = function () {
        //     login.style.left = "20px";
        //     register.style.left = "500px";
        //     registerFormBtn.style.left = "0";
        // }
    