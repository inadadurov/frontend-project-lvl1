import { getRandInt, answerProcessor, msgWinner } from '../src/index.js';

const gamePrimeNumbers = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandInt(1, 500);

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

    const result = answerProcessor(number, rightAnswer, false);

    if (result === 'loose') {
      return false;
    }
  }

  msgWinner(name);
  return true;
};

export default gamePrimeNumbers;
