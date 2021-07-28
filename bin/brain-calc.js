#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// game "Calculator" is described in this file

import userDialog from '../src/cli.js';
import gameCalculator from '../games/game-calc.js';

const nameOfPlayer = userDialog();
gameCalculator(nameOfPlayer);

export default gameCalculator;
