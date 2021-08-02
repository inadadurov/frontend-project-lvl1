import { getRandInt, isEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEvenNumbers = () => {
  const expression = getRandInt(0, 100);

  const rightAnswer = isEven(expression) ? 'yes' : 'no';

  return [description, expression, rightAnswer];
};

export default gameEvenNumbers;
