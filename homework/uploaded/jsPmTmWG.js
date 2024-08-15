"use strict"

// ⊗jsPmTmWG

let data = new Date();
console.log(data.getDay()); // #1

// #2
function isWeekend(date) {
    if(date.getDay() === 0 || date.getDay() === 6) {
        return true;
    }
    return false;
}

console.log(isWeekend(data));

// #3

function getDaysForSunday(date) {

    let arr = [0, 6, 5, 4, 3, 2, 1];  // усвоил урок из вашего ревью :)
    return arr[date.getDay()]

}

console.log(getDaysForSunday(data));