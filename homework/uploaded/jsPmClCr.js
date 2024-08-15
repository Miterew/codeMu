"use strict"

// ⊗jsPmClCr


// #1
// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

function func() {
	let num = 1;

	return function() {
		console.log(num);
		num++;
	}
}

let sub = func();

sub();
sub();

// №2
// Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

function func() {
	let num = 10;

	return function() {
		console.log(num);
		num--;
	}
}

let newFunc = func();

newFunc();
newFunc();
newFunc();


// №3
// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

function func() {
	let num = 10;

	return function() {
		if(num <= 0) {
			return console.log('Отсчет окончен');
		}

		console.log(num);
		num--;
	}
}

let newFunc = func();

newFunc();
newFunc();
newFunc();
newFunc();
newFunc();
newFunc();
newFunc();
newFunc();
newFunc();
newFunc();
newFunc();

