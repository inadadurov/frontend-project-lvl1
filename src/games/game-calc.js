import { getRandInt, calculate } from '../utils.js';

const description = 'What is the result of the expression?';

const gameCalculator = () => {
  const number1 = getRandInt(0, 20);
  const number2 = getRandInt(0, 20);

  const operators = ['+', '-', '*'];
  const pickedOperator = operators[getRandInt(0, operators.length)];

  // determine calculation and right answer
  let rightAnswer = 0;

  rightAnswer = calculate(number1, number2, pickedOperator);

  const expression = `${number1} ${pickedOperator} ${number2}`;

  return [description, expression, rightAnswer];
};

export default gameCalculator;
