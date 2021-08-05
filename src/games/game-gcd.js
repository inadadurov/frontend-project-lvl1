import getRandInt from '../utils.js';
import runEngineBrainGames from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) return number1;
  return getGcd(number2, number1 % number2);
};

const gameGreatestCommonDivisor = () => {
  const number1 = getRandInt(1, 100);
  const number2 = getRandInt(1, 100);

  const expression = `${number1} ${number2}`;

  const rightAnswer = String(getGcd(number1, number2));

  return [expression, rightAnswer];
};

const launchGcd = () => runEngineBrainGames(gameGreatestCommonDivisor, gameDescription);

export default launchGcd;
