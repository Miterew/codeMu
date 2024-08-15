"use strict"

// ⊗jsPmDstFPO

// #1
function func(options) {
	let {color, width, height} = options;
	return color; // для проверки вернем цвет
}

// Проверка
console.log(
	'Задача 1: ' + func( {color: 'red', width: 400, height: 500} )
);




// #2
function func(options) {
	let {width, height, color = 'black'} = options;
	return color; // для примера
}

// Проверка
console.log(
	'Задача 2: ' + func( {color: 'red', width: 400, height: 500} )
);