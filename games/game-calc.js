import { getRandInt, answerProcessor, msgWinner } from '../src/index.js';

const gameCalculator = (name) => {
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
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

    const result = answerProcessor(expression, rightAnswer, true);

    if (result === 'loose') {
      return false;
    }
  }

  msgWinner(name);
  return true;
};

export default gameCalculator;
