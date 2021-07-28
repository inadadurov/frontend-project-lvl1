import { getRandInt, answerProcessor, msgWinner } from '../src/index.js';

const gameEvenNumbers = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandInt(0, 100);

    let rightAnswer = '';

    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    const result = answerProcessor(number, rightAnswer, false);

    if (result === 'loose') {
      return false;
    }
  }

  msgWinner(name);
  return true;
};

export default gameEvenNumbers;
