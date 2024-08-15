"use strict"
// ⊗jsPmMuSI

// №1
// С помощью вложенных циклов выведите на экран все строки с данными.

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };

// for (let key in data) {
//     for (let num of data[key]) {
//         console.log(num);
//     }
// }


// №2

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];

// for (let num of data) {
// 	for (let key in num) {
// 		console.log(num[key]);
// 	}
// }



// #3
let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];



for (let num of data) {
	for (let key in num) {
		for (let numInKey of num[key]) {
			console.log(numInKey);
		}
	}
}

// Пока написал это понял, что путаюсь
// в том, где нужно писать [num] а где не  нужно
// В общем путаю объекты и массивы как вписывать, где нужно ключ
// Нужна ещё практика по этой теме

// Например строчка которую очень долго не понимал почему не работает:
//  console.log(num[key][numInKey]); --> хотя надо было -> console.log(numInKey);			


