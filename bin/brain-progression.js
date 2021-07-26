#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// Game ariphmetic progression

import readlineSync from 'readline-sync';
import userDialog from '../src/cli.js';

const gameArProgression = (name) => {
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const ElemNumber = 5 + Math.floor(Math.random() * 10);
    const diff = Math.floor(Math.random() * 50);
    const firstElem = Math.floor(Math.random() * 10);
    const progression = [];
    const hiddenElemPos = 1 + Math.floor(Math.random() * ElemNumber);
    let rightAnswer = 0;

    for (let j = 1; j <= ElemNumber; j += 1) {
      if (j === hiddenElemPos) {
        rightAnswer = firstElem + j * diff;
        progression.push('..');
      } else progression.push(firstElem + j * diff);
    }

    console.log('Question: ', progression.join(' '));
    const answer = Number(readlineSync.question('Your answer: '));

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
gameArProgression(nameOfPlayer);

export default gameArProgression;
