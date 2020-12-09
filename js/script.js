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

// кнопки слайдера отзывов для планшетной/десктопной версии
let sliderInput1 = document.getElementById('reviews-input-1'),
    sliderInput2 = document.getElementById('reviews-input-2'),
    sliderInput3 = document.getElementById('reviews-input-3'),
    buttonPrev = document.querySelector('.reviews__prev'),
    buttonNext = document.querySelector('.reviews__next');

buttonPrev.onclick = () => {
    if (sliderInput1.checked) {
        sliderInput1.checked = false;
        sliderInput3.checked = true;
    } else if (sliderInput2.checked) {
        sliderInput2.checked = false;
        sliderInput1.checked = true;
    } else if (sliderInput3.checked) {
        sliderInput3.checked = false;
        sliderInput2.checked = true;
    }
};

buttonNext.onclick = () => {
    if (sliderInput1.checked) {
        sliderInput1.checked = false;
        sliderInput2.checked = true;
    } else if (sliderInput2.checked) {
        sliderInput2.checked = false;
        sliderInput3.checked = true;
    } else if (sliderInput3.checked) {
        sliderInput3.checked = false;
        sliderInput1.checked = true;
    }
};

//механика для открытия/закрытия модального окна входа в личный кабинет

let loginButton = document.querySelector(".user-list__login"),
    loginForm = document.querySelector(".login-form"),
    loginformClose = loginForm.querySelector(".login-form__close");

loginButton.onclick = () => {
    event.preventDefault();
    loginForm.classList.add("login-form--opened");
};

loginformClose.onclick = () => {
    loginForm.classList.remove("login-form--opened");
};
