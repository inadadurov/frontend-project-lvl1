// файл с функциями

import readlineSync from 'readline-sync';

// user welcome dialog
const userDialog = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default userDialog;
