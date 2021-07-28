#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// game "answer if number is prime or not"
import userDialog from '../src/cli.js';
import gamePrimeNumbers from '../games/game-prime.js';

const nameOfPlayer = userDialog();
gamePrimeNumbers(nameOfPlayer);
