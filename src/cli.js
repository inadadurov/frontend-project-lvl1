// файл с функциями

import readlineSync from 'readline-sync';

const welcomeDialog = () => {
  const playerName = readlineSync.question('May I have your name? ');
  // console.log('Hello, ', playerName, '!');
  return (''.concat('Hello, ', playerName, '!'));
};

export default welcomeDialog;
