"use strict"

// ⊗jsPmTmLE

// #1 
function isLeap(year) {
    let date = new Date(year, 2, 0);
    return date.getDate() === 29 ? true: false; // решил вспомнить конструкцию
}

// Проверки
console.log(isLeap(2017))
console.log(isLeap(2020))