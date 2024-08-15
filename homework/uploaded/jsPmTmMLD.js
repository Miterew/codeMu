"use strict"

// ⊗jsPmTmMLD

// #1 
function getLastDayMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log( getLastDayMonth(1996, 6) ); // сколько дней в месяце


// #2

function getDayWeek(year, month, day) {
    let date = new Date(year, month, day);

    return date.getDay();
}

console.log( getDayWeek(2025, 6, 0) ); // узнаем день недели

