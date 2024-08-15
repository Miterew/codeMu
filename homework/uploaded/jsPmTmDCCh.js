"use strict"

// ⊗jsPmTmDCCh

// #1 // Проверяем корректность введенных дат
function checkDate(year, month, day) {
    let date = new Date(year, month, day);

    if(
        year == date.getFullYear() &&
        month == date.getMonth() &&
        day == date.getDate()
    ){
        return true
    } else {
        return false
    }
}

// Проверки
console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false