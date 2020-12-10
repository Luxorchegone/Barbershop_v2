"use strict"
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
