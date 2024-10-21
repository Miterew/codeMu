"use strict"

const form = document.querySelector('squarePS');
const input = document.querySelector('#side');
const button = document.querySelector('button');

button.addEventListener('click', function getSandP() {

    let par = document.createElement('p');
    let perimeter = input.value * 4;
    par.textContent = 'Периметр: ' + perimeter;
    button.insertAdjacentElement('beforeBegin', par);

    let par2 = document.createElement('p');
    let square = input.value ** 2;
    par2.textContent = 'Площадь: ' + square;
    button.insertAdjacentElement('beforeBegin', par2);

    button.removeEventListener('click', getSandP);
})
