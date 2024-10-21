"use strict"

const r = document.querySelector('#Radius');
const button = document.querySelector('button');

button.addEventListener('click', function calculateCircleArea() {
    
    // площадь окружности
    let s = document.createElement('p');
    let radius = parseFloat(r.value);
    s.textContent = Math.PI * (radius ** 2);
    button.insertAdjacentElement('beforeBegin', s);

    // длина окружности
    let c = document.createElement('p');
    c.textContent = 2 * Math.PI * radius;
    button.insertAdjacentElement('beforeBegin', c);

    button.removeEventListener('click', calculateCircleArea);
});