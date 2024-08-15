"use strict"

// ⊗jsPmTmCDO

// #1
let now = new Date();
let middleCurrentDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

now > middleCurrentDay ?    console.log('Полдень был') : 
                            console.log('Полдень будет');


// #2
let middleCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 15);

now > middleCurrentMonth ?  console.log('15 число было'):
                            console.log('15 число будет');