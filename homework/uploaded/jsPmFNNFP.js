"use strict"
// ⊗jsPmFNNFP



// #1
// Сделайте функцию test, параметрами принимающую 
// 3 функции и возвращающую сумму результатов переданных функций.

function test(fun1, fun2, fun3) {
    return fun1() + fun2() + fun3();
}


// #2
// Сделайте 3 функции, объявив их как Function 
// Declaration и дав им имена func1, func2 и func3. 
// Пусть первая функция возвращает 1, вторая - 2, 
// а третья - 3. Передайте эти функции параметром в 
// функцию test из предыдущей задачи.

function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3 () {
    return 3;
}

console.log(test(func1, func2, func3));


// #3
// Модифицируйте предыдущую задачу так, чтобы функции
//  были объявлены как Function Expression с теми же именами.

let func1 = function() {return 1;};
let func2 = function() {return 2;};
let func3 = function() {return 3;};

console.log(getSum(func1, func2, func3));

function getSum(fun1, fun2, fun3) {
    return fun1() + fun2() + fun3();
}