#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// game "answer if number is prime or not"

import readlineSync from 'readline-sync';
import userDialog from '../src/cli.js';

const gamePrimeNumbers = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = 1 + Math.floor(Math.random() * 500);

    console.log('Question: ', number);
    const answer = readlineSync.question('Your answer: ');

    let rightAnswer = 'yes';
    let checkIfEven = false;
    let divisor = 2;
    let divisorsCounter = 2;

    while (!checkIfEven) {
      if (number === 1) {
        rightAnswer = 'no';
        checkIfEven = true;
      }
      if (number % divisor === 0) {
        divisorsCounter += 1;
        // console.log('НАЙДЕН ДЕЛИТЕЛЬ: ', divisor);
      }
      divisor += 1;
      if (divisorsCounter > 2) {
        checkIfEven = true;
        rightAnswer = 'no';
      }
      if (divisor === number) checkIfEven = true;
    }

    // console.log('делитель на выходе из цикла: ', divisor);

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
gamePrimeNumbers(nameOfPlayer);

export default gamePrimeNumbers;
