#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// eslint-disable-next-line import/named
import userDialog from '../src/cli.js';

userDialog();

// import gameEvenNumbers from './brain-even.js';
// import gameCalculator from './brain-calc.js';
// import gameGreatestCommonDivisor from './brain-gcd.js';
// const playerName = welcomeDialog();
// gameEvenNumbers(playerName);
// gameCalculator(playerName);
// gameGreatestCommonDivisor(playerName);
