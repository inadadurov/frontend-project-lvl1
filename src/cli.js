// файл с функциями

import readlineSync from 'readline-sync';

// user welcome dialog
const welcomeDialog = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(''.concat('Hello, ', name, '!'));
  return name;
};

export default welcomeDialog;
