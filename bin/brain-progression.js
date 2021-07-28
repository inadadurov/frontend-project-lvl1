#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// Game ariphmetic progression

import userDialog from '../src/cli.js';
import gameArProgression from '../games/game-progression.js';

const nameOfPlayer = userDialog();
gameArProgression(nameOfPlayer);
