"use strict"

// ⊗jsPmTmMLCh

// #1

function getCount1JanWeekend(fromYear) {
    let now = new Date();
    let currentYear = new Date( now.getFullYear() );

    let counter = 0;

    for(let year = fromYear; year <= currentYear; year++) {
        let nextYear = new Date(year, 0, 1);
    
        if(nextYear.getDay() == 6 || nextYear.getDay() == 0) {
            counter++;
        }
    }
    
    return counter;
}

console.log(getCount1JanWeekend(2000));
