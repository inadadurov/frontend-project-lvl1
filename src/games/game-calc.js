import getRandInt from '../utils.js';
import engineBrainGames from '../index.js';

const gameDescription = 'What is the result of the expression?';

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

const gameCalculator = () => {
  const number1 = getRandInt(0, 20);
  const number2 = getRandInt(0, 20);

  const operators = ['+', '-', '*'];
  const pickedOperator = operators[getRandInt(0, operators.length)];

  const rightAnswer = String(calculate(number1, number2, pickedOperator));

  const expression = `${number1} ${pickedOperator} ${number2}`;

  return [expression, rightAnswer];
};

const launchCalc = () => engineBrainGames(gameCalculator, gameDescription);

export default launchCalc;
