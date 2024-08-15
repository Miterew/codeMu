"use strict"
// ⊗jsPmMuAOO

// №1

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// for (let user of employees) {
// 	console.log(`${user.name} - ${user.salary}`)
// }
// легко далось


// #2

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// let res = 0;

// for (let user of employees) {
// 	res += user.salary;
// }
// console.log('Сумма зарплат: ' + res);

// легко далось


// #3
let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let res = 0;

for (let user of employees) {
	if (user.age >= 30) {
		res += user.salary;
	}
}

console.log(res);
// легко далось с 1 раза
