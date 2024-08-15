"use strict"

// ⊗jsPmTmMPr

// #1
let now = new Date();
let todayZeroHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);

console.log( (now - todayZeroHour) / 1000 );


// #2
let secondDayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log( (secondDayEnd - now) / 1000 );

// #3
let lostNewYear = new Date(now.getFullYear(), 11, 31, 24);
console.log( (lostNewYear - now) / 1000 / 60 / 60 / 24 );

// #4
function getCountOfFriday13(year) {
    let counter = 0;

    for(let month = 0; month <= 11; month++) {
        let date = new Date(year, month, 13);

        if( date.getDay() == 5) {
            counter++;
        }
    }

    return counter;
}

console.log( getCountOfFriday13(2024) );


// #5
function getYearThreeMonthAgo() {
    let now = new Date();

    let newDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());

    return newDate.getFullYear();
}

console.log(getYearThreeMonthAgo());



// #6
function getDayLastDayMonth() {
    let now = new Date();

    let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return lastDay.getDay();
}

console.log(getDayLastDayMonth());


// #7
function isCurYearLeap() {
    let now = new Date();

    return now.getFullYear() % 4 === 0 ? true : false;
}

console.log(isCurYearLeap());


// #8
function lastLeapYear() {
    let now = new Date();

    for(let i = now.getFullYear() - 1; i >= now.getFullYear() - 5; i-- ) {
        if (i % 4 === 0)  {
            return i;
        }
    }
}

console.log(lastLeapYear());


// #9
function nextLeapYear() {
    let now = new Date();

    for(let i = now.getFullYear() + 1; i <= now.getFullYear() + 5; i++) {
        if (i % 4 === 0) {
            return i;
        }
    }
}
console.log(nextLeapYear());