// game "Calculator" is described in this file

import readlineSync from 'readline-sync';
import userDialog from '../src/cli.js';

const gameCalculator = (name) => {
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 100);

    const operators = ['+', '-', '*'];
    const pickOperator = Math.floor(Math.random() * operators.length);

    // determine calculation and right answer
    let rightAnswer = 0;
    if (operators[pickOperator] === '+') {
      console.log(''.concat('Question: ', number1, '+', number2));
      rightAnswer = number1 + number2;
    }
    if (operators[pickOperator] === '-') {
      console.log(''.concat('Question: ', number1, '-', number2));
      rightAnswer = number1 - number2;
    }
    if (operators[pickOperator] === '*') {
      console.log(''.concat('Question: ', number1, '*', number2));
      rightAnswer = number1 * number2;
    }

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(''.concat('\'', answer, '\' is wrong answer ;(. Correct answer was \'', rightAnswer, '\''));
      return false;
    }
  }

  console.log(''.concat('Congratulations, ', name, '!'));
  return true;
};

const nameOfPlayer = userDialog();
gameCalculator(nameOfPlayer);

export default gameCalculator;
