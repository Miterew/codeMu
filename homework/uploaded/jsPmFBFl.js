"use strict"
// ⊗jsPmFBFl

// №1
// function isEvenNumber(arr) {
	
// 	for (let number of arr) {
// 		if (number % 2 !== 0){
// 			return false;
// 		}
// 	}
// 	return true;
// }

// // Проверки
// console.log(isEvenNumber([2, 4, 6, 8, 12, 22]));
// console.log(isEvenNumber([2, 4, 6, 8, 12, 21]));
// console.log(isEvenNumber([2, 4, 6, 8, 12, 26]));
// console.log(isEvenNumber([2, 4, 6, 8, 12, 1515]));

// №2

// function isOddNumber(num) {
// 	let str = String(num); // переводим в строку для обработки split
// 	let arr = str.split(''); // добавляем в массив чтоб перебрать

// 	for (let number of arr) { // перебираем массив
// 		if (Number(number) % 2 === 0) {  // кидаем неявный флаг если хоть 1 число четное
// 			return false;
// 		}
// 	}
// 	return true; // проверили все числа, четных нет - выводим true
// }
// // Проверки
// console.log(isOddNumber(141241));
// console.log(isOddNumber(139731));
// console.log(isOddNumber(139731));


// #3

function isCopy(arr) {
	let lastNum; 				// переменная чтоб потом отслеживать прошлое число
	for (let num of arr) { 		// перебираем данные из массива
		if (lastNum === num) { 	// если прошлое число равно текущему
			return true; 		// то выводим true, но пока 1 число не отработало, то
		}						// прошлое не задано не может быть равно
		lastNum = num;			// тут записываем пред чтобы сравнивать с предыдущим
	}
	return false;				// если нигде не отработало, то копий нет
}

// проверки
console.log(isCopy([1, 2, 3, 4, 5]));
console.log(isCopy([1, 2, 3, 4, 5, 5]));
console.log(isCopy([1, 2, 3, 4, 4, 5]));
