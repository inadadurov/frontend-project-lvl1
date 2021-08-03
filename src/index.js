import readlineSync from 'readline-sync';

const engineBrainGames = (game, gameDescription, cyclesNumber = 3) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(gameDescription);

  for (let i = 1; i <= cyclesNumber; i += 1) {
    const gameData = game();

    const expression = gameData[0];
    const rightAnswer = gameData[1];

    console.log(`Question: ${expression}`);
    const playerAnswer = readlineSync.question('Your answer: ');

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

export default engineBrainGames;
