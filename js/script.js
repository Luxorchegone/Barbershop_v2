"use strict"
// выпадающее меню для мобильной версии
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

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
let sliderInput1 = document.getElementById('reviews-input-1');
let sliderInput2 = document.getElementById('reviews-input-2');
let sliderInput3 = document.getElementById('reviews-input-3');
let buttonPrev = document.querySelector('.reviews__prev');
let buttonNext = document.querySelector('.reviews__next');

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