import { getRandInt, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrimeNumbers = () => {
  const number = getRandInt(1, 500);
  const expression = number;

  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [description, expression, rightAnswer];
};

export default gamePrimeNumbers;
