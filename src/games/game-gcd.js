import { getRandInt, greatestDivisor } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gameGreatestCommonDivisor = () => {
  const number1 = getRandInt(1, 100);
  const number2 = getRandInt(1, 100);

  const expression = `${number1} ${number2}`;

  const rightAnswer = greatestDivisor(number1, number2);

  return [description, expression, rightAnswer];
};

export default gameGreatestCommonDivisor;
