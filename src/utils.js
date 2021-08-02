// random numbers generator in range from min (including) to max (excluding)

const ariphmeticProgression = (firstElement, difference, elemNumber) => {
  const progression = [];

  for (let j = 0; j < elemNumber; j += 1) {
    progression.push(firstElement + j * difference);
  }

  return progression;
};

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operation: '${operator}'!`);
  }
};

const getRandInt = (min, max) => Math.floor(min + Math.random() * max);

const greatestDivisor = (number1, number2) => {
// works for natural numbers only
  if (number2 === 0) return number1;
  return greatestDivisor(number2, number1 % number2);
};

const isEven = (number) => number % 2 === 0;

const isPrime = (number) => {
  for (let i = 2; i <= number ** (1 / 2); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export {
  ariphmeticProgression,
  calculate,
  greatestDivisor,
  getRandInt,
  isEven,
  isPrime,
};
