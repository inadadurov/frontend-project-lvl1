import { ariphmeticProgression, getRandInt } from '../utils.js';

const description = 'What number is missing in the progression?';

const gameArProgression = () => {
  const firstElem = getRandInt(0, 100);
  const diff = getRandInt(1, 30);
  const elemNumber = getRandInt(5, 11);

  const progression = ariphmeticProgression(firstElem, diff, elemNumber);

  const hiddenElemPos = getRandInt(0, progression.length);
  const rightAnswer = progression[hiddenElemPos];
  progression.splice(hiddenElemPos, 1, '..');

  const expression = progression.join(' ');

  return [description, expression, rightAnswer];
};

export default gameArProgression;
