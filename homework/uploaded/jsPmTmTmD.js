"use strict"

// ⊗jsPmTmTmD

// #1 
let newDate  = new Date(2000, 0, 10);
let oldDate = new Date(1998, 2, 1);

let res = newDate.getTime() - oldDate.getTime();

console.log(res / (1000 * 60 * 60 * 24));

// #2

let birthDayDate = new Date(1996, 6, 7);
let currentDate = new Date();

let newRes = currentDate.getTime() - birthDayDate.getTime();
console.log(newRes / (1000 * 60 * 60 * 24 * 30))

// для себя придумал задачку
// мужчины в РФ живут в среднем 66 лет
// подсчитаем сколько миллисекунд
let years66 = 1000 * 60 * 60 * 24 * 30; // 66 лет в мс
let leftToLive = newRes - years66; // я прожил минус средняя прод

console.log('Я прожил ' + (newRes / Math.floor(1000 * 60 * 60 * 24 * 30)) + ' остлось примерно ' + leftToLive / Math.floor((1000 * 60 * 60 * 24 * 30)) + ' месяцев.')
// надо будет доделать округление до целого