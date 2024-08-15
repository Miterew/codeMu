"use strict"

// ⊗jsPmDstFP

// #1

function func(employee) {
	let [name, surname, department, position, salary] = employee;
	return name; // для теста сделал вывод из функции имени
}

// Проверка
console.log(
	'Задача 1: ' + func( ['John', 'Smit', 'development', 'programmer', 2000] )
);



// #2
function func2(employee) {
	let [name, surname, info] = employee;
	return surname; // для теста выводим surname
}

// Проверка
console.log(
	'Задача 2: ' + func2( ['John', 'Smit', 'development', 'programmer', 2000] )
);



// #3

function func3(employee) {
	let [name, surname, department, position = 'джуниор'] = employee;
	return position; // для теста пусть возвращает должность
}

// Проверка
console.log(
	'Задача 3: ' + func3( ['John', 'Smit', 'development'] )
);



// #4

function func4(department, employee, hired) {
	let [name, surname] = employee;
	let [year, month, day] = hired

	return [department, name, surname, year, month, day] // выведем массивом
}

console.log(
	'Задача 4: ' + func4( 'development', ['John', 'Smit'], [2018, 12, 31] )
);