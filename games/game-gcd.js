import { getRandInt } from '../src/index.js';

const gameGreatestCommonDivisor = () => {
  const explanation = 'Find the greatest common divisor of given numbers.';

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

  return [explanation, expression, maxCommonDivisor, true];
};

export default gameGreatestCommonDivisor;
