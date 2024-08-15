"use strict"
// ⊗jsPmMuAF

// Отрефакторил задачу №3
// Было с переменными (визуально кажется понятнее)

let arr = [];

for (let i = 0; i < 3; i++) {
    let subArr = [];

    for (let j = 0; j < 2; j++) {
        let subSubArr = [];

        for (let k = 1; k < 6; k++) {
            subSubArr.push(k);
        }

        subArr.push(subSubArr);
    }

    arr.push(subArr);
}

console.log(arr);

// Стало на мой взгляд менее читаемо, но
// раз так учат значит так правильнее :)
// Думаю, что так правильнее из за вожности более простой масштабируемости

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];

        for (let k = 1; k < 6; k++) {
            arr[i][j].push(k);
        }
    }
}

console.log(arr);