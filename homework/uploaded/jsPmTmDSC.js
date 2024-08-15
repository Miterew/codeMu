"use strict"

// ⊗jsPmTmDSC

// #1
let date1 = '2020-11-31';
let date2 = '2020-12-01';

function getBigDate(d1, d2) {
    return d1 > d2 ? d1 : d2;
}

console.log( getBigDate(date1, date2) );