import readlineSync from 'readline-sync';
import userDialog from './cli.js';

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

const msgWinner = (playerName) => console.log(''.concat('Congratulations, ', playerName, '!'));

const msgLoser = (playerAnswer, rightAnswer, playerName) => {
  console.log(''.concat(
    '\'', playerAnswer, '\' is wrong answer ;(.Correct answer was \'',
    rightAnswer, '\'\nLet\'s try again, ', playerName, '!'));
};

function engineBrainGames(game, cyclesNumber = 3) {
  // engine to play all games

  // welcome player and store  his/her name
  const playerName = userDialog();

  for (let i = 1; i <= cyclesNumber; i += 1) {
    const gameData = game(); // get all data from the game

    const expression = gameData[1]; // question expression to be adressed to player
    const rightAnswer = gameData[2]; // right answer for game round
    const expectNumber = gameData[3]; // boolean to define if to expect number in player's answer

    if (i === 1) console.log(gameData[0]); // write game explanation at start only

    console.log(''.concat('Question: ', expression)); // show question
    let playerAnswer = readlineSync.question('Your answer: '); // get answer
    const answer = playerAnswer;

    if (expectNumber) {
      playerAnswer = Number(playerAnswer);
    }

    if (Number.isNaN(playerAnswer) || playerAnswer !== rightAnswer) {
      msgLoser(answer, rightAnswer, playerName);
      return false;
    }

    console.log('Correct!');

    if (i === cyclesNumber) msgWinner(playerName);
  }

  return true;
}

export {
  getRandInt, answerProcessor, msgWinner, engineBrainGames,
};
