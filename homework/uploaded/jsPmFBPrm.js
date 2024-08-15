"use strict"
// ⊗jsPmFBPrm  | Практика на функции




// #1
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

let arrOfEx1 = [1, 2, 3, 4, 5];
console.log('В задаче № 1 ответ: ' +  calcSumOfElemOfArr(arrOfEx1));

function calcSumOfElemOfArr(arr) {
	let res = 0;

	for (let num of arr) {
		res += num;
	}

	return res;
}




// #2
// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
console.log('В задаче № 2 ответ: ' +  getArrOfDevisors(16))

function getArrOfDevisors(number) {
	let arrOfDevisors = [];

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			arrOfDevisors.push(i);
		}
	}

	return arrOfDevisors;
}
// В предыдущем задании для себя добавлял простые числа в массив, похожее задание :)




// #3
// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
let sayHi = 'привет';

console.log('В задаче № 3 ответ: ' +  setStrToArr(sayHi));

function setStrToArr(str) {
	return str.split('');
}




// #4
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
console.log('В задаче № 4 ответ: ' +   setReverseString(sayHi));

function setReverseString(str) {
	let newArr = str.split('');
	newArr.reverse();
	
	return newArr.join('');;
}



// #5
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

console.log('В задаче № 5 ответ: ' +  setFirstLetterUp(sayHi))

function setFirstLetterUp(str) {
	let newString = str.slice(0, 1).toUpperCase();
	let oldString = str.slice(1);

	return newString + oldString;
}



// #6
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

console.log('В задаче № 6 ответ: ' +  setAllFirstLettersUp('добрый день дорогие враги'))

function setAllFirstLettersUp(str) {

	let firstLetter = str.slice(0, 1).toUpperCase(); 	// делаем 1 букву 1 слова заглавной
	let secondLetter = str.slice(1);					// приклеиваем остаток фразы к 1 букве
	let newString = firstLetter + secondLetter;			// приклеиваем остаток фразы к 1 букве шаг 2

	let arrayOfSpaces = []; // создаем массив пробелов

	let strArr = newString.split(''); // для простоты взаимодействия создаем переменную-массив символов

	for (let i = 0; i < strArr.length; i++) { // складываем индексы пробелов строки в массив пробелов
		if (strArr[i] === ' ') {
			arrayOfSpaces.push(i);
		}
	}
	
	for (let elem of arrayOfSpaces) { // пользуясь индексом пробелов ищем буквы за пробелом
		strArr[elem+1] = strArr[elem+1].toUpperCase(); // делаем заглавным следующий за пробелом символ
	}
	
	return strArr.join(''); // из массива в строку и возвращаем
}




// #7
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// Тут не понял существующий массив или новый, но это мелочи)

console.log('В задаче № 7 ответ: ')
console.log(calcFromOneToNum(101) );

function calcFromOneToNum(num) {
    let arrForEx7 = [];

	for (let i = 1; i < num; i++) {
		arrForEx7.push(i);
	}

	return arrForEx7;
}




// #8

// Сделайте функцию, которая параметром будет принимать 
// число и возвращать сумму его цифр.
console.log('В задаче № 8 ответ: ' + calcSumOfNumberSymbols(552))

function calcSumOfNumberSymbols(num) {  	
										
	let numToArr = String(num).split(''); 	// Это хорошая практика, менять типы туда-сюда ?)
	let sum = 0;

	for (let i of numToArr) {
		sum += Number(i); 					// Это хорошая практика, менять типы туда-сюда ?)
	}

	return sum;
}




// #9

// Сделайте функцию, которая вернет текущий день недели словом.

console.log('В задаче № 9 ответ: ' + getCurrentDayByNum(5));

function getCurrentDayByNum(num) {
	if (num === 1) {
		return 'понедельник';
	} else if ( num === 2) {
		return 'вторник';
	} else if ( num === 3) {
		return 'среда';
	} else if ( num === 4) {
		return 'четверг';
	} else if ( num === 5) {
		return 'пятница';
	} else if ( num === 6) {
		return 'суббота';
	} else if ( num === 7) {
		return 'воскресенье';
	}

	return 'Укажите цифрой день недели';
}



// #10
// Сделайте функцию, которая параметром будет получать дату, 
// а возвращать день недели словом, соответствующий этой дате.

// эту тему мы не проходили ещё с датами, но загуглил



let year = 1996;
let month = 6; 	// тут с нуля счет почему то
let day = 7; 	// а тут с 1 почему то
let dayOfBird = new Date(year, month, day);

console.log('В задаче № 10 ответ: ' + dateToDayOfWeek(dayOfBird));

function dateToDayOfWeek(date) {

	let numberDayOfWeek = date.getDay();

	switch(date.getDay(numberDayOfWeek)) {
		case 1:
			return 'Понедельник';
		
		case 2:
			return 'Вторник';

		case 3:
			return 'Среда';

		case 4:
			return 'Четверг';
		
		case 5:
			return 'Пятница';

		case 6:
			return 'Суббота';
		
		case 0:					// а тут неделя начинается с 0 почемуто
		return 'Воскресенье';
	}

	return date;
}


// #11
// Сделайте функцию, 
// которая параметром будет год и проверять, високосный он или нет.
console.log('В задаче № 11 ответ: ' +  isLeapYear(2020)); // leap - високосный

function isLeapYear(year) {
	if(year % 4 === 0) {
		return true;
	}

	return false;
}



// #12
console.log('В задаче № 12 ответ: ' +  calcSecToDays(1470000));

function calcSecToDays(sec) {
	// return Math.floor(sec / 86400) // если нужно округлить сколько прошло целых
	return Math.ceil(sec / 86400) // если нужно какие сейчас идут сутки по счету
}



// #13
// Я сделал для июня и июля (я родился в июле, там помню даты :) )

console.log('В задаче № 13 ответ: ' +  dateToZodiac('07.07.1996')); // 

function dateToZodiac(date) {
	let dayOfDate = Number(date.slice(0, 2));
	let monthOfDate = Number(date.slice(3, 5));

	switch(monthOfDate) {
		case 6:
			if (dayOfDate <= 21) {
				return 'Близнецы';
			} else {
				return 'Рак'
			}


		case 7:
			if (dayOfDate <= 21) {
				return 'Рак';
			} else {
				return 'Лев'
			}
	}

	return 'Не смог определить. Формат: день.месяц.год';
}




// #14
console.log('В задаче № 14 ответ: ' +  getRandomElemFromArr([10, 20, 30, 40, 50]))

function getRandomElemFromArr(arr) {
	let randomNum = Math.floor(Math.random() * arr.length);
	
	return arr[randomNum];
}




// #15
// Сделайте функцию, которая 
// параметром будет принимать число и проверять, простое оно или нет.
console.log('В задаче № 15 ответ: ' +  isNumberSimple(59));

function isNumberSimple(num) {

	for (let i = 2; i < num; i++) {
		if(num % i === 0) {
			return false;
		}
	}

	return true
}