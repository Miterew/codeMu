"use strict"

const side1 = document.querySelector('#side1');
const side2 = document.querySelector('#side2');
const side3 = document.querySelector('#side3');
const button = document.querySelector('button');

button.addEventListener('click', function calcS() {
    let sideValue1 = Number(side1.value);
    let sideValue2 = Number(side2.value);
    let sideValue3 = Number(side3.value);


    let p = sideValue1 + sideValue2 + sideValue3;
    let halfP = p / 2;

    let geronFormula = Math.sqrt(halfP * ((halfP - sideValue1) * (halfP - sideValue2) * (halfP - sideValue3)));

    let par = document.createElement('p');
    par.textContent = geronFormula;
    button.insertAdjacentElement('beforebegin', par);

    button.removeEventListener('click', calcS);
})