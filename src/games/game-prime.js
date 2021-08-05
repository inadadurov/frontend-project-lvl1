import getRandInt from '../utils.js';
import runEngineBrainGames from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number ** (1 / 2); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const gamePrimeNumbers = () => {
  const number = getRandInt(1, 500);
  const expression = number;

  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [expression, rightAnswer];
};

const launchPrime = () => runEngineBrainGames(gamePrimeNumbers, gameDescription);

export default launchPrime;
