import { getRandInt } from '../src/index.js';

const gameEvenNumbers = () => {
  const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

  const expression = getRandInt(0, 100);

  let rightAnswer = '';

  if (expression % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  return [explanation, expression, rightAnswer, false];
};

export default gameEvenNumbers;
