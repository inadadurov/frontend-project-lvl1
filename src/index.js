import readlineSync from 'readline-sync';
import userDialog from './cli.js';
import { getRandInt } from './utils.js';

const engineBrainGames = (game, cyclesNumber = 3) => {
  // engine to play all games

  // welcome player and store  his/her name
  const playerName = userDialog();

  for (let i = 1; i <= cyclesNumber; i += 1) {
    const gameData = game(); // get all data from the game

    const expression = gameData[1]; // question expression to be adressed to player
    const rightAnswer = String(gameData[2]); // right answer for game round and convert to string

    if (i === 1) console.log(gameData[0]); // write game explanation at start only

    console.log(`Question: ${expression}`); // show question
    const playerAnswer = String(readlineSync.question('Your answer: ')); // get answer and convert to string

    if (playerAnswer !== rightAnswer) {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${playerName}!`,
      );
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);

  return true;
};

export {
  getRandInt, engineBrainGames,
};
