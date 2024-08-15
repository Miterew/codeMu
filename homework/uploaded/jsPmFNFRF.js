"use strict"
// ⊗jsPmFNFRF



// #1

// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1() {
    return function() {
        return 1;
    }
}


function func2() {
    return function() {
        return 2;
    }
}

function sum(functi1, functi2) {
    console.log( functi1()() + functi2()() );
}

sum(func1, func2);