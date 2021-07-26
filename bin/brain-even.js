#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// game "answer if number is even or not" is described in this file

import readlineSync from 'readline-sync';
import userDialog from '../src/cli.js';

const gameEvenNumbers = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 100);

    console.log('Question: ', number);
    const answer = readlineSync.question('Your answer: ');

    let rightAnswer = '';

    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(''.concat('\'', answer, '\' is wrong answer ;(. Correct answer was \'', rightAnswer, '\''));
      return false;
    }
  }

  console.log(''.concat('Congratulations, ', name, '!'));
  return true;
};

const nameOfPlayer = userDialog();
gameEvenNumbers(nameOfPlayer);

export default gameEvenNumbers;
