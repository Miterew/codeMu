"use strict"
// ⊗jsPmFNFAP


// #1

// Сделайте функцию test, параметрами принимающую 3 функции. 
// Передайте в нее первым параметром функцию, возвращающую 1,
//  вторым - функцию, возвращающую 2, третьим - функцию, 
//  возвращающую 3. Выведите в консоль сумму результатов функций.

test(
    function() {return 1;},
    function() {return 2;},
    function() {return 3;},
);

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}