import getRandInt from '../utils.js';
import engineBrainGames from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameEvenNumbers = () => {
  const expression = getRandInt(0, 100);

  const rightAnswer = isEven(expression) ? 'yes' : 'no';

  return [expression, rightAnswer];
};

const launchEven = () => engineBrainGames(gameEvenNumbers, gameDescription);

export default launchEven;
