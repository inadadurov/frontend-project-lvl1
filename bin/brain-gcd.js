// game "Greatest Common Divisor" is described in this file

import readlineSync from 'readline-sync';
import userDialog from '../src/cli.js';

const gameGreatestCommonDivisor = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const number1 = Math.floor(1 + Math.random() * 100);
    const number2 = Math.floor(1 + Math.random() * 100);

    // Search for greatest divisor with Euclid method
    let maxNumber = Math.max(number1, number2);
    let minNumber = Math.min(number1, number2);

    // maxNumber = minNumber;

    console.log('Question: ', maxNumber, ' ', minNumber);

    let search = true;
    let maxCommonDivisor = 1;

    if (maxNumber === minNumber) {
      search = false;
      maxCommonDivisor = maxNumber;
    }

    while (search === true) {
      maxCommonDivisor = maxNumber % minNumber;
      maxNumber = minNumber;
      minNumber = maxCommonDivisor;
      if (maxNumber % minNumber === 0) search = false;
    }

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === maxCommonDivisor) {
      console.log('Correct!');
    } else {
      console.log(''.concat('\'', answer, '\' is wrong answer ;(. Correct answer was \'', maxCommonDivisor, '\''));
      return false;
    }
  }
  console.log(''.concat('Congratulations, ', name, '!'));
  return true;
};

const nameOfPlayer = userDialog();
gameGreatestCommonDivisor(nameOfPlayer);

export default gameGreatestCommonDivisor;
