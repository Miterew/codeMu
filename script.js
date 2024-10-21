"use strict"

const sideA = document.querySelector('#side');
const sideB = document.querySelector('#side2');
const button = document.querySelector('button');

button.addEventListener('click', function RectPS() {
    let s = document.createElement('p');
    s.textContent = 'Площадь: ' + sideA.value * sideB.value;
    button.insertAdjacentElement('beforeBegin', s);


    let p = document.createElement('p');
    p.textContent = 'Периметр: ' + (Number(sideA.value) + Number(sideB.value)) * 2;
    button.insertAdjacentElement('beforeBegin', p);

    button.removeEventListener('click', RectPS);
});
