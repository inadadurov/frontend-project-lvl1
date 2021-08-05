import getRandInt from '../utils.js';
import runEngineBrainGames from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameEvenNumbers = () => {
  const expression = getRandInt(0, 100);

  const rightAnswer = isEven(expression) ? 'yes' : 'no';

  return [expression, rightAnswer];
};

const launchEven = () => runEngineBrainGames(gameEvenNumbers, gameDescription);

export default launchEven;
