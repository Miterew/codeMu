"use strict"
// ⊗jsPmLpOCh

// №1

let obj = {x: 1, y: 2, z: 3};

for (let key in obj){
    obj[key] *= obj[key]
};

console.log(obj);

// №2
let obje = {x: 1, y: 2, z: 3};

for (let key2 in obje){
    obje[key2] += 1;
}
console.log(obje);