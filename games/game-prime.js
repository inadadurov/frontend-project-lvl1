import { getRandInt } from '../src/index.js';

const gamePrimeNumbers = () => {
  const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const number = getRandInt(1, 500);
  const expression = number;

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

  return [explanation, expression, rightAnswer, false];
};

export default gamePrimeNumbers;
