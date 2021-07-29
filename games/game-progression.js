import { getRandInt } from '../src/index.js';

const gameArProgression = () => {
  const explanation = 'What number is missing in the progression?';

  const ElemNumber = getRandInt(5, 11);
  const diff = getRandInt(1, 30);
  const firstElem = getRandInt(0, 100);
  const progression = [];
  const hiddenElemPos = 1 + Math.floor(Math.random() * ElemNumber);
  let rightAnswer = 0;

  for (let j = 1; j <= ElemNumber; j += 1) {
    if (j === hiddenElemPos) {
      rightAnswer = firstElem + j * diff;
      progression.push('..');
    } else progression.push(firstElem + j * diff);
  }

  const expression = progression.join(' ');

  return [explanation, expression, rightAnswer, true];
};

export default gameArProgression;
