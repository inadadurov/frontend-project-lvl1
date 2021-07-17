// файл с функциями

import readlineSync from 'readline-sync';

const welcomeDialog = () => {
    const playerName = readlineSync.question('May I have your name? ');
    // console.log('Hello, ', playerName, '!');
    return ('Hello, ' + playerName + '!');
}

export {welcomeDialog};