"use strict"
// ⊗jsPmSMMP

// №1
console.log( Math.pow(2, 10) );
// 1024 - OK


// #2
console.log(Math.sqrt(245)); 
// 15.652475842498529 - ответ получился не красивый, не уверен что правильно решил



// #3
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10];
let result = 0;
let sumPow = 0;

for (let num of arr) {
	sumPow += Math.pow(num, 2);
}

console.log( Math.sqrt(sumPow) ); 
// ответ 25.98076211353316 - не уверен что верно решил
