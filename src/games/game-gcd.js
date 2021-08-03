import getRandInt from '../utils.js';
import engineBrainGames from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (number1, number2) => {
  if (number2 === 0) return number1;
  return greatestDivisor(number2, number1 % number2);
};

const gameGreatestCommonDivisor = () => {
  const number1 = getRandInt(1, 100);
  const number2 = getRandInt(1, 100);

  const expression = `${number1} ${number2}`;

  const rightAnswer = String(greatestDivisor(number1, number2));

  return [expression, rightAnswer];
};

const launchGcd = () => engineBrainGames(gameGreatestCommonDivisor, gameDescription);

export default launchGcd;
