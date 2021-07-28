#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// game "Greatest Common Divisor" is described in this file

import userDialog from '../src/cli.js';
import gameGreatestCommonDivisor from '../games/game-gcd.js';

const nameOfPlayer = userDialog();
gameGreatestCommonDivisor(nameOfPlayer);
