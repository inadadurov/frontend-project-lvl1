// game "answer if number is even or not" is described in this file

import readlineSync from 'readline-sync';

const gameEvenNumbers = (NameOfPlayer) => {
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

  console.log(''.concat('Congratulations, ', NameOfPlayer, '!'));
  return true;
};

export default gameEvenNumbers;
