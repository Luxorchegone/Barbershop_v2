"use strict"

// выпадающее меню для мобильной версии

let navMain = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.onclick = () => {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
    }
};

//механика для открытия/закрытия модального окна входа в личный кабинет
// параллельно устанавливаем фокус на поле ввода логина 

let loginButton = document.querySelector(".user-list__login"),
    loginForm = document.querySelector(".login-form"),
    loginFormClose = loginForm.querySelector(".login-form__close"),
    loginInput = loginForm.querySelector("[name=login]");

loginButton.onclick = (evt) => {
    evt.preventDefault();
    loginForm.classList.add("login-form--opened");
    loginInput.focus();
};

loginFormClose.onclick = () => {
    loginForm.classList.remove("login-form--opened");
};


