#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// game "answer if number is even or not" is described in this file

import userDialog from '../src/cli.js';
import gameEvenNumbers from '../games/game-even.js';

const playerName = userDialog();
gameEvenNumbers(playerName);
