#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// eslint-disable-next-line import/named
import welcomeDialog from '../src/cli.js';
import gameEvenNumbers from '../src/game_EvenNumbers.js';
import gameCalculator from '../src/game_Calculator.js';

console.log('Welcome to the Brain Games!');

const playerName = welcomeDialog();

// game #1 Enev Numbers
gameEvenNumbers(playerName);

// game #2 Calculator
gameCalculator(playerName);
