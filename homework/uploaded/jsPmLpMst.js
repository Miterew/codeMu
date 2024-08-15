"use strict"
// ⊗jsPmLpMst


// №1
for (let i = 0; i < 10; i++) {
	console.log(i);
}



// №2
for (let i = 10; i > 0; i--) {
	console.log(i);
}



// №3
for (let i = 10; i > 0; i--) {
	console.log(i);
}



// №4
let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}



// №5
let res = 0;

for (let i = 1; i < 10; i++) {
	res += i;
}

console.log(res);



// №6
let res = 1;

for (let i = 1; i < 10; i++) {
	res *= i;
}

console.log(res);



// №7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15



// №8
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15



// №9
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15



// №10
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN



// №11
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15



// №12
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15



// №13
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	let number = elem ** 2;
	console.log(number);
}



// №14
let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);



// №15
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	sum += obj[elem];
}

console.log(sum);

// Единственная задача, которая заставила задуматься
// вспомнил, как обращаться к данные объекта
// сперва пробовал obj.elem, но надо только obj[elem]



// №16
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += obj[key];
}

console.log(sum);



// №17
// Добавил break

let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
		break;
	} else {
		res = '---';
	}
}

console.log(res);



// № 18
let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);



// №19
// Убрал let в проверке if
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}

console.log(res);



// №20
// Добавил строгое сравнение
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
}



// №21
// Объявил новый массив и добавил строгое неравенство
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];

for (let elem of arr) {
	if (elem % 2 !== 0) {
		res.push(elem);
	}
}

console.log(res);