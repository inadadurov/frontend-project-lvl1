import getRandInt from '../utils.js';
import engineBrainGames from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const ariphmeticProgression = (firstElement, difference, progressionLength) => {
  const progression = [];

  for (let j = 0; j < progressionLength; j += 1) {
    progression.push(firstElement + j * difference);
  }

  return progression;
};

const gameArProgression = () => {
  const firstElem = getRandInt(0, 100);
  const diff = getRandInt(1, 30);
  const elemNumber = getRandInt(5, 11);

  const progression = ariphmeticProgression(firstElem, diff, elemNumber);

  const hiddenElemPos = getRandInt(0, progression.length);
  const rightAnswer = String(progression[hiddenElemPos]);
  progression.splice(hiddenElemPos, 1, '..');

  const expression = progression.join(' ');

  return [expression, rightAnswer];
};

const launchProgression = () => engineBrainGames(gameArProgression, gameDescription);

export default launchProgression;
