"use strict"
// ⊗jsPmFBMst | Поиск ошибок в коде

// #1
// Код должен найти сумму результатов работы двух функций:

// function func1(number) {
// 	return number;
// }
// function func2(number) {
// 	return number;
// }

// console.log( func1(3) + func2(5) );


// #2
// Код должен найти сумму элементов массива:

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }

// console.log(sum([1, 2, 3, 4, 5]));


// #3
// Код должен найти сумму элементов массива, однако,
//  ничего не выводит в консоль:

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
								
// 	return res;
// }

// console.log( func(arr) );



// #4
// Код должен найти сумму результатов работы двух функций:

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1() + func2() );


// #5
// let sum = [1, 2, 3, 4, 5];

// function calcSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }
// console.log(calcSum(sum));


// #6
// let res = [1, 2, 3, 4, 5];
// console.log(sum(res));

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }

// #7
// function add(num) {
// 	if (num > 0 && num <= 9) {
// 		return num + '0';
// 	}

// 	return num;
// }

// console.log(add(7));


// #8
// let arr = [1, 2, 3, 4, 5];
// console.log(sum(arr));

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }



// #9
// let num = 12345;
// console.log(getDigitsSum(num));

// function getDigitsSum(num) {
// 	let numToString = String(num);
// 	let arr = numToString.split('');

// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }



// #10

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		
		if (num % i === 0) {
			return false;
		} 
	}
	return true;
}


// напишу тест для вывода массива до 300 (так хочется)

//добавил все простые числа в массив
let arrOfPrimeNumbers = [];
for (let i = 2; i <= 293; i++) {
	isPrime(i) ? arrOfPrimeNumbers.push(i) :'';
}

// (1) правда сверяю с выдачей гугла вручную xD
// (2) додумался с вики скопировать и сунуть в массив
let arrayFromWiki = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293];

// (3) сделаем сверку чисел из массивов

for (let i = 0; i < arrOfPrimeNumbers.length; i++) {
	if (arrayFromWiki[i] !== arrOfPrimeNumbers[i] ||
		arrayFromWiki.length !== arrOfPrimeNumbers.length) {
			console.log('Массивы не равны');
	} else {
		console.log('Массивы равны');
	} 
}
// (4) хотелось практических задач xD