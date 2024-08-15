"use strict"

// ⊗jsPmDstAFDV

// #1

function getMonth() {
	return (new Date).getDate();
}

function getYear() {
    return (new Date).getFullYear();
}

let arr = [];

let [year = getYear(), month = getMonth(), day] = arr;



// Проверка
console.log(month);
console.log(year);

// Попробовал дописать и день и выдало 7, хотя сегодня 8 число 22:40.
// Видимо не случайно в задаче не просится вывести день, есть особенности?)
