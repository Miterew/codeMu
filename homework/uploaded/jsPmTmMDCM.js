"use strict"

// ⊗jsPmTmMDCM

// #1
let now = new Date();

// let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
// console.log(date.getDay());

// Проблемы с январем (0) не будет т.к. JS поймет относительность и
// 0 (янв) - 1 (мес) = дек прошлого года



// #2
let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(date.getDay()); // все верно