import { getRandInt, answerProcessor, msgWinner } from '../src/index.js';

const gameArProgression = (name) => {
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
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

    const result = answerProcessor(progression.join(' '), rightAnswer, true);

    if (result === 'loose') {
      return false;
    }
  }

  msgWinner(name);
  return true;
};

export default gameArProgression;
