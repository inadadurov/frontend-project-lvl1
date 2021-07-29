import { getRandInt } from '../src/index.js';

const gameCalculator = () => {
  const explanation = 'What is the result of the expression?';

  const number1 = getRandInt(0, 20);
  const number2 = getRandInt(0, 20);

  const operators = ['+', '-', '*'];
  const pickedOperator = String(operators[getRandInt(0, operators.length)]);

  // determine calculation and right answer
  let rightAnswer = 0;

  switch (pickedOperator) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    default:
      rightAnswer = number1 * number2;
  }

  const expression = ''.concat(number1, ' ', pickedOperator, ' ', number2);

  return [explanation, expression, rightAnswer, true];
};

export default gameCalculator;
