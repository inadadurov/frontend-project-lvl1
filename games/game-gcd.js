import { getRandInt, answerProcessor, msgWinner } from '../src/index.js';

const gameGreatestCommonDivisor = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandInt(1, 100);
    const number2 = getRandInt(1, 100);

    // Search for greatest divisor with Euclid method
    let maxNumber = Math.max(number1, number2);
    let minNumber = Math.min(number1, number2);

    const expression = ''.concat(maxNumber, ' ', minNumber);

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

    const result = answerProcessor(expression, maxCommonDivisor, true);

    if (result === 'loose') {
      return false;
    }
  }

  msgWinner(name);
  return true;
};

export default gameGreatestCommonDivisor;
