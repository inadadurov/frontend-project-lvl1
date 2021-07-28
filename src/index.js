import readlineSync from 'readline-sync';

const getRandInt = (min, max) => Math.floor(min + Math.random() * max);

const answerProcessor = (questionExpression, correctAnswer, numericAnswerExpected) => {
  console.log(''.concat('Question: ', questionExpression));

  let playerAnswer = readlineSync.question('Your answer: ');
  const answer = playerAnswer;

  if (numericAnswerExpected) playerAnswer = Number(playerAnswer);

  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return 'win';
  }
  console.log(''.concat('\'', answer, '\' is wrong answer ;(. Correct answer was \'', correctAnswer, '\''));

  return 'loose';
};

const msgWinner = (playerName) => {
  console.log(''.concat('Congratulations, ', playerName, '!'));
  return true;
};

export { getRandInt, answerProcessor, msgWinner };
