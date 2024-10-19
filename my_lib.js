"use strict";

; (function () {
    let _ = {};

    // основная функция поиска индекса элемента в массиве
    _.indexOf = function (arr, value, isSorted) {

        let firstFlag = true;
        let nothingFlag = true; // флаг на случай, если ничего не будет найдено

        if(isSorted == 1) {
            return binarSearchElement(arr, value);
        }

        for (let i = 0; i < arr.length; i++) {

            if (isSorted > 0 && firstFlag) {
                i = isSorted;
                firstFlag = false;
            };

            if (arr[i] == value) {
                nothingFlag = false;
                return i;
            }

        }

        if (nothingFlag) {
            return -1;
        }
    };

    // Оптимизация для отсортированных arr (сюда передается фун-ия если стоит флаг isSorted в осн)
    // рекурсивная функция бинарного поиска
    function binarSearchElement(arr, elem) {
        console.log('Сработал бинарный поиск')
    
        let left = 0;
        let right = arr.length - 1;
        let result = -1;
    
        return binSearch(arr, elem, left, right);
    
        function binSearch(arr, target, left, right) {
            if (left > right) {
                return result;  // Если не найдено
            }
    
            let mid = Math.floor((left + right) / 2);
    
            if (arr[mid] == target) {
                result = mid;  // Запоминаем индекс
                // Проверяем, является ли это первое вхождение
                if (mid == 0 || arr[mid - 1] != target) {
                    return mid;  // Это первое вхождение
                } else {
                    // Ищем дальше в левой части
                    return binSearch(arr, target, left, mid - 1);
                }
            }
    
            if (arr[mid] > target) {
                return binSearch(arr, target, left, mid - 1);
            } else {
                return binSearch(arr, target, mid + 1, right);
            }
        };
    };
    
    // Вспомогательная функция для сортировки массива в случае, если он не отсортирован
    _.sortArr = function (arr) {
        let newArr = [...arr];

        for (let i = 0; i < newArr.length; i++) {
            for (let j = i + 1; j < newArr.length; j++) {
                if (newArr[i] > newArr[j]) {

                    let temp = newArr[i];
                    newArr[i] = newArr[j];
                    newArr[j] = temp;
                }
            }

        }

        return newArr;
    };


    // Функция возвращает n последних элементов массива
    _.last = function (arr, n) {
        let newArr = [];

        if (n > arr.length || n <= 0) {
            console.log( 'С переданным числом что-то не так' );
            return [];
        };

        for(let i = arr.length - 1; i > arr.length - 1 - n ; i--) {
            newArr.push( arr[i] );
        };

        return newArr.reverse();
    }

    // Функция возвращает все элементы массива начиная с n индекса
    _.rest = function (arr, n) {
        return arr.slice(n)
    }

    // Вспомогательная функция для создания массивов (для тестов)
    function randomArr(min, max, length) {
        let arr = [];

        for(let i = 0; i < length; i++) {
            let randomNumber = Math.floor( Math.random() * (max - min + 1)) + min;
            arr.push(randomNumber);
        }

        return arr;
    };


    // ДАЛЬШЕ ПОЛЕ ДЛЯ ТЕСТОВ
    // Проверим функцию генерации рандомных массивов с числами
    let checkArr = randomArr(1, 9, 500);

    console.log('Не сортированный массив: ');
    console.log(checkArr);

    console.log( _.rest(checkArr, 2) )
    // console.log ( _.last(checkArr, 90000) )

    // console.log( _.indexOf( checkArr, 3 ) );


    // console.log('Отсортированный массив: ');
    // console.log( _.sortArr(checkArr) );
    // console.log( _.indexOf( _.sortArr(checkArr), 3, 1 ) );

    window._ = _;
})();