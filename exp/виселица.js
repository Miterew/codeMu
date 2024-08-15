"use strict";

// gameGallows

    const words = ['автобус', 'бритва', 'карты', 'велосипед'];

    const gameWord = words[Math.floor ( Math.random() * words.length)];
    console.log('Слово выбранное игрой: ' + gameWord);

    let userName = prompt('Как вас зовут?');
    console.log('Приятно познакомиться, ' + userName);


    let answerArray = [];
    for ( let i = 0; i < gameWord.length; i++){
        answerArray.push('_')
    }

    let remainLetters = gameWord.length; 
    let health = 5;

    while ( remainLetters > 0 && health > 0){
        let userLetter = prompt('Введите букву');

        if (userLetter === null) {
            alert('Жаль, что вы решили уйти.');
            break
        } else if (userLetter.length !== 1) {
            alert('Вы должны вписать одну букву. (1)');
            continue;
        } else if (userLetter === ''){
            alert('Вы должны вписать одну букву.');
            continue;
        } else {
            
            userLetter = userLetter.toLowerCase();
            
            let letterFound = false;

            for ( let j = 0; j < gameWord.length; j++){
                if (gameWord[j] === userLetter){

                    if ( answerArray[j] !== '_' ){
                        alert('Вы уже угадывали эту букву ранее');
                        letterFound = true;
                        break;
                    }

                    alert('Вы угадали букву ' + userLetter);
                    answerArray[j] = userLetter;
                    alert( answerArray.join(' ') );
                    remainLetters--;
                    letterFound = true;
                } 
            }
        
            if (!letterFound){
                alert(`Буквы ${userLetter} в слове нет. Осталось попыток: ` + health);
                alert( answerArray.join(' ') );
                health--;
            }
        }

    }
    
    if (remainLetters === 0){
        alert(`${userName}, вы победили!`);
    }